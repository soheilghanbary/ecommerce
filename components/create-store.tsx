'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { createStore } from '@/server/actions/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { BadgePlus } from 'lucide-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { TextFieldArea } from './text-area';
import { TextField } from './text-field';

const storeSchema = z.object({
  name: z.string().min(3).trim(),
  description: z.string().trim(),
});

type StoreSchema = z.infer<typeof storeSchema>;

export function CreateStore() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <BadgePlus className="mr-2 size-4" />
            Create Store
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Store</DialogTitle>
            <DialogDescription>
              Create your Store and manage Products
            </DialogDescription>
          </DialogHeader>
          <StoreForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <BadgePlus className="mr-2 size-4" />
          Create Store
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Create Store</DrawerTitle>
          <DrawerDescription>
            Create your Store and manage Products
          </DrawerDescription>
        </DrawerHeader>
        <StoreForm className="px-4" onClose={() => setOpen(false)} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function StoreForm({
  className,
  onClose,
}: React.ComponentProps<'form'> & { onClose: () => void }) {
  const mutation = useMutation({
    mutationKey: ['create-store'],
    mutationFn: (values: StoreSchema) => createStore(values),
    onSuccess() {
      onClose();
      toast.success('Store created successfully');
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StoreSchema>({
    resolver: zodResolver(storeSchema),
  });

  const onSubmit = handleSubmit(async (data: StoreSchema) => {
    await mutation.mutateAsync(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className={cn('grid items-start gap-4', className)}
    >
      <TextField
        label="Store Name"
        placeholder="Enter your store name"
        error={errors.name?.message}
        {...register('name')}
      />
      <TextFieldArea label="Description" {...register('description')} />
      <Button type="submit" disabled={mutation.isPending}>
        Create
      </Button>
    </form>
  );
}
