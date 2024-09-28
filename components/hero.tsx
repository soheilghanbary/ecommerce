import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="flex min-h-64 flex-col items-center justify-center gap-4 text-center lg:min-h-80">
      <h2 className="font-black text-3xl lg:text-5xl">Welcome to Shopino</h2>
      <p className="text-sm md:text-base">The Modern Ecommerce Platform</p>
      <div className="mt-2 flex items-center justify-center gap-4">
        <Button className="rounded-full">All Products</Button>
        <Button className="rounded-full" variant={'outline'}>
          Get Source
        </Button>
      </div>
    </section>
  );
}
