import { Sidebar } from '@/components/sidebar';
import type { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="container flex">
      <Sidebar />
      <main className="flex-1 p-4 lg:p-6">{children}</main>
    </div>
  );
}
