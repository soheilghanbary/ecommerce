import Footer from '@/components/footer';
import { Header } from '@/components/header';
import type { PropsWithChildren } from 'react';

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container p-4">{children}</main>
      <Footer />
    </>
  );
}
