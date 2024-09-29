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
import type { PropsWithChildren } from 'react';

type SidebarLinkProps = {
  label: string;
  icon: LucideIcon;
  href: string;
};

const SidebarLink = ({ label, icon: Icon, href }: SidebarLinkProps) => (
  <Link
    href={href}
    className="flex items-center gap-3 rounded-lg px-4 py-2 duration-100 hover:bg-muted"
  >
    <Icon className="size-4 lg:size-5" />
    <span className="font-medium text-sm lg:text-base">{label}</span>
  </Link>
);
export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="container flex">
      <aside className="flex h-svh w-60 flex-col gap-2 border-r p-4">
        <div className="flex items-center gap-1 text-blue-500 dark:text-blue-300">
          <FlameIcon className="size-6 fill-blue-400/20" />
          <span className="font-extrabold">Shopino</span>
        </div>
        <hr />
        <div className="flex flex-col gap-1">
          <SidebarLink href="/dashboard" label="Dashboard" icon={HomeIcon} />
          <SidebarLink
            href="/dashboard/stores"
            label="Stores"
            icon={StoreIcon}
          />
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
      <main className="flex-1 p-4 lg:p-6">{children}</main>
    </div>
  );
}
