import { ChevronRight, ShoppingCartIcon, StarIcon } from 'lucide-react';
import { Button } from './ui/button';

const ProductCard = () => {
  return (
    <div className="border-separate rounded-xl border transition-all duration-200 hover:shadow-md">
      <img
        alt=""
        src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=640&q=75"
        className="h-60 w-full border-separate rounded-t-[inherit] border-b bg-muted/20 object-contain"
      />
      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-lg">Acme Hoodie</h3>
        <div className="mb-2 flex items-center">
          <StarIcon className="size-4 fill-current text-yellow-500" />
          <span className="ml-1 font-medium text-sm">4.4</span>
          <span className="ml-1 text-muted-foreground text-sm">
            (128) reviews
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-bold text-lg">$129.00</p>
          <Button variant={'default'} size={'sm'} className="gap-2">
            <ShoppingCartIcon className="size-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export function ProductList() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-center font-bold text-2xl">Featured Products</h2>
        <Button variant={'outline'} size={'sm'} className="gap-2">
          View All <ChevronRight className="size-4" />
        </Button>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </section>
  );
}
