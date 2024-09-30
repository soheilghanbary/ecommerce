'use server';
import { redirect } from 'next/navigation';
import { getUserSession } from '../auth';
import prisma from '../db';

type UpdateStoreProps = {
  id: string;
  name: string;
  description: string;
};

type createStoreProps = Omit<UpdateStoreProps, 'id'>;

export const createStore = async (values: createStoreProps) => {
  const session = await getUserSession();
  const userId = session?.user?.id as string;
  const store = await prisma.store.create({
    data: {
      name: values.name,
      description: values.description,
      userId,
    },
  });
  redirect(`/dashboard/stores/${store.id}`);
};

export const getStores = async () => {
  const session = await getUserSession();
  return await prisma.store.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const getStore = async (id: string) => {
  const session = await getUserSession();
  return await prisma.store.findUnique({
    where: {
      id,
      userId: session?.user?.id,
    },
  });
};

export const updateStore = async (data: UpdateStoreProps) => {
  const session = await getUserSession();
  return await prisma.store.update({
    where: {
      id: data.id,
      userId: session?.user?.id,
    },
    data,
  });
};

export const deleteStore = async (id: string) => {
  const session = await getUserSession();
  await prisma.store.delete({
    where: {
      id,
      userId: session?.user?.id,
    },
  });
  redirect('/dashboard/stores');
};
