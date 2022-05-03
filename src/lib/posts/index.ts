import prisma from '@/lib/prisma';
import { User } from '@prisma/client';
export const getAllPosts = () => {
  return prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
};

export const getFreePosts = () => {
  return prisma.post.findMany({
    where: { premium: false },
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
};

export const getPost = (id: string) => {
  return prisma.post.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
};

export const getPostForUser = async (id: string, user?: User) => {
  const post = await prisma.post.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      premium: true,
    },
  });
  if (post.premium && !user?.subscribed) {
    return null;
  }
  return post;
};
