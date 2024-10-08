import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-separate border-t">
      <div className="container mx-auto max-w-7xl p-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/75 text-sm">
              © {currentYear} The Shopino. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              href="/"
              className="font-medium text-muted-foreground text-xs transition-colors hover:text-foreground md:text-sm"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-medium text-muted-foreground text-xs transition-colors hover:text-foreground md:text-sm"
            >
              Products
            </Link>
            <Link
              href="/category"
              className="font-medium text-muted-foreground text-xs transition-colors hover:text-foreground md:text-sm"
            >
              Category
            </Link>
            <Link
              href="/about-us"
              className="font-medium text-muted-foreground text-xs transition-colors hover:text-foreground md:text-sm"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="font-medium text-muted-foreground text-xs transition-colors hover:text-foreground md:text-sm"
            >
              Contact Us
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </footer>
  );
}
