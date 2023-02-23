// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.pokemon.upsert({
    where: { name: 'Pokemon 1' },
    update: {},
    create: {
      name: 'Pokemon 1',
    },
  });

  const post2 = await prisma.pokemon.upsert({
    where: { name: 'Pokemon 2' },
    update: {},
    create: {
      name: 'Pokemon 2',
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
