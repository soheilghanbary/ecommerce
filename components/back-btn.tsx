'use client';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export function BackButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant={'outline'} size={'icon'}>
      <ChevronLeft className="size-4" />
    </Button>
  );
}
