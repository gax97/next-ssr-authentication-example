import prisma from '@/lib/prisma';

export const getAllPosts = () => {
  return prisma.post.findMany();
};

export const getFreePosts = () => {
  return prisma.post.findMany({ where: { premium: false } });
};
