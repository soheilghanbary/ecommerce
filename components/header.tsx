import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { getUserSession } from '@/server/auth';
import {
  FlameIcon,
  LayoutGrid,
  LogOut,
  MenuIcon,
  SearchIcon,
  Settings,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button, buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-4">
        <div className="mb-6 flex items-center gap-1 text-blue-500 dark:text-blue-300">
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

export async function Header() {
  const session = await getUserSession();
  return (
    <header className="border-separate border-b">
      <nav className="container flex items-center justify-between gap-4 p-2">
        <MobileMenu />
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
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex w-full flex-1 items-center">
            <Input
              type="text"
              placeholder="search any product"
              className="w-full pr-4 pl-10"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <Button variant={'outline'} size={'icon'}>
            <ShoppingCart className="size-4" />
          </Button>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src={session.image!} alt={session.name!} />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  {session.name} <br />{' '}
                  <span className="font-normal text-muted-foreground text-xs">
                    {session.email}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <LayoutGrid className="mr-2 size-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 size-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={'/logout'}>
                    <LogOut className="mr-2 size-4" />
                    Log Out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild size={'sm'}>
              <Link href={'/sign-in'}>Sign In</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
