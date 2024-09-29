import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant={'outline'} size={'icon'}>
        <ChevronLeft className="size-4" />
      </Button>
      <h1 className="font-extrabold text-2xl">Dashboard</h1>
    </div>
  );
};
