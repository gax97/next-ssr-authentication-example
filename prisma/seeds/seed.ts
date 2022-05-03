import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// Data

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `test@gmail.com`,
      password: bcrypt.hashSync(`Test123.`, 10),
      image: ``,
      subscribed: false,
    },
  });
  await prisma.user.create({
    data: {
      email: `premium@gmail.com`,
      password: bcrypt.hashSync(`Test123.`, 10),
      image: ``,
      subscribed: true,
    },
  });

  await prisma.post.create({
    data: {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      premium: false,
      title: `Post 1`,
      published: true,
    },
  });
  await prisma.post.create({
    data: {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      premium: false,
      title: `Post 2`,
      published: true,
    },
  });
  await prisma.post.create({
    data: {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      premium: false,
      title: `Post 3`,
      published: true,
    },
  });
  await prisma.post.create({
    data: {
      content: `Premium Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      premium: true,
      title: `Premium Post`,
      published: true,
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
