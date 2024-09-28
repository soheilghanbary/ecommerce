import { ChevronRight, ShoppingCartIcon, StarIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProductCard = () => {
  return (
    <div className="border-separate rounded-lg border transition-all hover:shadow-lg">
      <div className="h-80 w-full rounded-t-[inherit] bg-muted" />
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="line-clamp-2 font-semibold text-lg">
            Wireless Headphones
          </h3>
          <Badge className="ml-2">In Stock</Badge>
        </div>
        <div className="mb-2 flex items-center">
          <StarIcon className="h-5 w-5 fill-current text-yellow-400" />
          <span className="ml-1 font-medium text-sm">4.4</span>
          <span className="ml-1 text-gray-500 text-sm">128</span>
        </div>
        <div className="flex items-center justify-between">
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
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </section>
  );
}
