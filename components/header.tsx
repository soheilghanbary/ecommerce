import { cn } from '@/lib/utils';
import { FlameIcon, MenuIcon, SearchIcon, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ModeToggle } from './mode-toggle';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-4">
        <div className="mb-6 flex items-center gap-1 text-blue-500">
          <FlameIcon className="size-6 fill-blue-400/20" />
          <span className="font-bold">Shopino</span>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={'/'}
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'justify-normal text-foreground/75',
            )}
          >
            Home
          </Link>
          <Link
            href={'/blgo'}
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'justify-normal text-foreground/75',
            )}
          >
            Blog
          </Link>
          <Link
            href={'/'}
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'justify-normal text-foreground/75',
            )}
          >
            Category
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  return (
    <header className="border-separate border-b">
      <nav className="container flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-1 text-blue-500 dark:text-blue-300">
          <FlameIcon className="size-6 fill-blue-400/20" />
          <span className="hidden font-bold sm:inline">Shopino</span>
        </div>
        <div className="hidden flex-1 items-center gap-2 md:flex">
          <Link
            href={'/'}
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'text-foreground/75',
            )}
          >
            Home
          </Link>
          <Link
            href={'/blog'}
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'text-foreground/75',
            )}
          >
            Blog
          </Link>
          <Link
            href={'/'}
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'text-foreground/75',
            )}
          >
            Category
          </Link>
        </div>
        <div className="relative flex max-w-xs flex-1 items-center">
          <Input
            type="text"
            placeholder="search any product"
            className="w-full pr-4 pl-10"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={'ghost'} size={'icon'}>
            <ShoppingCart className="size-4" />
          </Button>
          <ModeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
