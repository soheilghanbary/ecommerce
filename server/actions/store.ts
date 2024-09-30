'use server';
import { getUserSession } from '../auth';
import prisma from '../db';

export const createStore = async (values: any) => {
  const session = await getUserSession();
  const store = await prisma.store.create({
    data: {
      ...values,
      userId: session?.user?.id,
    },
  });
  return store;
};

export const getStores = async () => {
  const session = await getUserSession();
  return await prisma.store.findMany({
    where: {
      userId: session?.user?.id,
    },
  });
};
