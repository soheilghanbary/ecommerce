import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Button variant={'outline'} size={'icon'}>
          <ChevronLeft className="size-4" />
        </Button>
        <div>
          <h1 className="font-extrabold text-2xl">Products</h1>
          <p className="text-muted-foreground text-sm">Manage your products</p>
        </div>
      </div>
    </>
  );
};
