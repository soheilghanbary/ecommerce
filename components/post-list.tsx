import { ArrowRightIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PostCard = () => {
  return (
    <div className="border-separate rounded-lg border bg-card">
      <div className="relative h-52 w-full rounded-t-[inherit] bg-muted/40">
        <Badge className="absolute top-5 left-5">Frameworks</Badge>
      </div>
      <div className="grid gap-3 p-4">
        <h3 className="line-clamp-2 font-semibold text-lg">
          Wireless Headphones
        </h3>
        <p className="line-clamp-2 text-foreground/80 text-sm/6">
          Until now, trying to style an article, document, or blog post with
          Tailwind has been a tedious task that required a keen eye for
          typography and a lot of complex custom CSS.
        </p>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <span className="text-muted-foreground text-xs">34 Aug 24</span>
          <Button size={'sm'} variant={'ghost'} className="gap-2">
            Read More <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export function PostList() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <PostCard key={item} />
      ))}
    </div>
  );
}
