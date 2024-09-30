import { BackButton } from '@/components/back-btn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UpdateStore } from '@/components/update-store';
import { getStore } from '@/server/actions/store';
import { BadgePlus, EditIcon, FilterIcon, Trash2Icon } from 'lucide-react';

type Params = {
  id: string;
};

export default async ({ params }: { params: Params }) => {
  const store = await getStore(params.id);
  if (!store) return <p>Store Not Found</p>;
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="font-extrabold text-2xl">Store Page</h1>
      </div>
      <Tabs defaultValue="products">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <div className="mb-2 flex items-center justify-between gap-4">
            <div className="flex w-fit items-center gap-2">
              <Input
                type="text"
                placeholder="search product"
                className="flex-1"
              />
              <Button variant={'outline'} size={'icon'}>
                <FilterIcon className="size-4" />
              </Button>
            </div>
            <Button>
              <BadgePlus className="mr-2 size-4" />
              New Product
            </Button>
          </div>
          <div className="flow-root rounded-lg border p-4 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="*:text-center">
                  <TableHead>#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="*:text-center">
                  <TableCell>1</TableCell>
                  <TableCell>Samsung 23 Ultra</TableCell>
                  <TableCell>$399.99</TableCell>
                  <TableCell>Mobiles</TableCell>
                  <TableCell>2024/09/29</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        variant={'outline'}
                        size={'icon'}
                        className="text-destructive"
                      >
                        <Trash2Icon className="size-4" />
                      </Button>
                      <Button
                        variant={'outline'}
                        size={'icon'}
                        className="text-emerald-500"
                      >
                        <EditIcon className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <UpdateStore {...store} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
