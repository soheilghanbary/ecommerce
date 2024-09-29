import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, PlusIcon } from 'lucide-react';
import Link from 'next/link';

const StoreCard = () => (
  <div className="border-separate rounded-xl border shadow-sm">
    <Link href={'/dashboard/stores/1'}>
      <div className="h-32 w-full border-separate rounded-t-[inherit] border-b bg-muted" />
    </Link>
    <div className="grid p-4">
      <h2 className="font-semibold">Kian Ertebat Arvand</h2>
      <p className="text-muted-foreground text-sm">
        The Mobile Antenna Booster Compnay
      </p>
      <hr className="my-4 border-border/40" />
      <div className="flex items-center justify-between gap-4">
        <p className="line-clamp-2 font-medium text-muted-foreground text-sm">
          34 . Product
        </p>
        <Button asChild size={'sm'} variant={'ghost'}>
          <Link href={'/dashboard/stores/1'}>
            View
            <ChevronRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export default () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant={'outline'} size={'icon'}>
            <ChevronLeft className="size-4" />
          </Button>
          <div>
            <h1 className="font-extrabold text-2xl">Stores</h1>
            <p className="text-muted-foreground text-sm">Manage your stores</p>
          </div>
        </div>
        <Button variant={'secondary'}>
          <PlusIcon className="mr-2 size-4" />
          Create Store
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </>
  );
};
