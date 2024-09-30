'use client';
import { cn } from '@/lib/utils';
import {
  ChartArea,
  FlameIcon,
  HomeIcon,
  LayoutGrid,
  type LucideIcon,
  SettingsIcon,
  StoreIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';

type SidebarLinkProps = {
  label: string;
  icon: LucideIcon;
  href: string;
};

const SidebarLink = ({ label, icon: Icon, href }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-4 py-2 text-foreground/75 duration-100 hover:text-foreground',
        { 'bg-muted/50 text-foreground': isActive },
      )}
    >
      <Icon className="size-4 lg:size-5" />
      <span className="font-medium text-sm lg:text-base">{label}</span>
    </Link>
  );
};

export function Sidebar() {
  return (
    <aside className="flex h-svh w-60 flex-col gap-2 border-r">
      <div className="flex items-center justify-between gap-4 p-2">
        <div className="flex items-center gap-1 text-blue-500 dark:text-blue-300">
          <FlameIcon className="size-6 fill-blue-400/20" />
          <span className="font-extrabold">Shopino</span>
        </div>
        <ModeToggle />
      </div>
      <hr className="mb-2" />
      <div className="flex flex-col gap-1 px-2">
        <SidebarLink href="/dashboard" label="Dashboard" icon={HomeIcon} />
        <SidebarLink href="/dashboard/stores" label="Stores" icon={StoreIcon} />
        <SidebarLink
          href="/dashboard/products"
          label="Products"
          icon={LayoutGrid}
        />
        <SidebarLink
          href="/dashboard/analytics"
          label="Analytics"
          icon={ChartArea}
        />
        <SidebarLink
          href="/dashboard/settings"
          label="Settings"
          icon={SettingsIcon}
        />
      </div>
    </aside>
  );
}
