import { BackButton } from '@/components/back-btn';
import { CreateStore } from '@/components/create-store';
import { Button } from '@/components/ui/button';
import { getStores } from '@/server/actions/store';
import type { Store } from '@prisma/client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const StoreCard = ({ name, description, id }: Store) => (
  <div className="border-separate rounded-xl border shadow-sm">
    <Link href={`/dashboard/stores/${id}`}>
      <div className="h-32 w-full border-separate rounded-t-[inherit] border-b bg-muted" />
    </Link>
    <div className="grid p-4">
      <h2 className="font-semibold">{name}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
      <hr className="my-4 border-border/40" />
      <div className="flex items-center justify-between gap-4">
        <p className="line-clamp-2 font-medium text-muted-foreground text-sm">
          0 . Product
        </p>
        <Button asChild size={'sm'} variant={'ghost'}>
          <Link href={`/dashboard/stores/${id}`}>
            View
            <ChevronRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export default async () => {
  const stores = await getStores();
  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <div>
            <h1 className="font-extrabold text-2xl">Stores</h1>
            <p className="text-muted-foreground text-sm">Manage your stores</p>
          </div>
        </div>
        <CreateStore />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {stores.map((store) => (
          <StoreCard key={store.id} {...store} />
        ))}
      </div>
    </>
  );
};
