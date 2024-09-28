import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-separate border-t">
      <div className="container mx-auto max-w-7xl p-4 lg:p-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/75 text-sm">
              © {currentYear} The Shopino. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/"
              className="font-medium text-muted-foreground md:text-sm text-xs transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-medium text-muted-foreground md:text-sm text-xs transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="/category"
              className="font-medium text-muted-foreground md:text-sm text-xs transition-colors hover:text-foreground"
            >
              Category
            </Link>
            <Link
              href="/about-us"
              className="font-medium text-muted-foreground md:text-sm text-xs transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="font-medium text-muted-foreground md:text-sm text-xs transition-colors hover:text-foreground"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
