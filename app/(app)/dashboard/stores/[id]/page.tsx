import { TextFieldArea } from '@/components/text-area';
import { TextField } from '@/components/text-field';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronLeft, Trash2Icon, TrashIcon } from 'lucide-react';

export default () => {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <Button variant={'outline'} size={'icon'}>
          <ChevronLeft className="size-4" />
        </Button>
        <h1 className="font-extrabold text-2xl">Store</h1>
      </div>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Store Settings</CardTitle>
          <CardDescription>Manage your store</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <TextField label="Name" placeholder="Enter your Store name" />
          <TextFieldArea label="Description" placeholder="Store description" />
        </CardContent>
        <CardFooter>
          <Button className="mr-2">Save</Button>
          <Button variant={'outline'} className="text-destructive">
            <Trash2Icon className="mr-2 size-4" />
            Delete Store
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
