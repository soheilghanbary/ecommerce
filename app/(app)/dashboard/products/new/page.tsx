import { BackButton } from '@/components/back-btn';
import { TextFieldArea } from '@/components/text-area';
import { TextField } from '@/components/text-field';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarIcon, ImagesIcon } from 'lucide-react';

export default () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <BackButton />
        <div>
          <h1 className="font-extrabold text-2xl">New Product</h1>
          <p className="text-muted-foreground text-sm">Create a new product</p>
        </div>
      </div>
      <section className="my-4 grid max-w-screen-sm gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Images</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant={'outline'}>
              <ImagesIcon className="mr-2 size-4" />
              Upload Images
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <TextField label="Name" />
              <TextField label="Price" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2 [&>label]:text-sm">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="choose category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Digital</SelectItem>
                    <SelectItem value="dark">Clothes</SelectItem>
                    <SelectItem value="system">Cars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 [&>label]:text-sm">
                <Label>Date</Label>
                <Button variant={'outline'} className="justify-normal">
                  <CalendarIcon className="mr-2 size-4" />
                  Pick a Date
                </Button>
              </div>
            </div>
            <TextFieldArea rows={5} label="Description" />
            <Button className="w-fit">Save</Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
};
