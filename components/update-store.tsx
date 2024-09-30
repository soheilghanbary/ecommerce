'use client';
import { deleteStore, updateStore } from '@/server/actions/store';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Store } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { Trash2Icon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { SpinnerIcon } from './icons/spinner';
import { TextFieldArea } from './text-area';
import { TextField } from './text-field';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const storeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

type StoreFormData = z.infer<typeof storeSchema>;

export function UpdateStore(store: Store) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StoreFormData>({
    resolver: zodResolver(storeSchema),
    defaultValues: store,
  });

  const updateMutation = useMutation({
    mutationKey: ['update-store'],
    mutationFn: (data: StoreFormData) => updateStore(data),
    onSuccess() {
      toast.success('Store updated successfully');
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ['delete-store'],
    mutationFn: (id: string) => deleteStore(id),
    onSuccess() {
      toast.success('Store deleted successfully');
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await updateMutation.mutateAsync(data);
  });

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Store Settings</CardTitle>
        <CardDescription>Manage your store</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <TextField
            label="Name"
            placeholder="Enter your Store name"
            error={errors.name?.message}
            {...register('name')}
          />
          <TextFieldArea
            label="Description"
            placeholder="Store description"
            {...register('description')}
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="mr-2"
          onClick={onSubmit}
          disabled={updateMutation.isPaused}
        >
          Save
          {!!updateMutation.isPending && (
            <SpinnerIcon className="ml-2 size-4 fill-primary-foreground" />
          )}
        </Button>
        <Button
          type="button"
          className="text-destructive"
          variant={'outline'}
          onClick={() => deleteMutation.mutateAsync(store.id)}
          disabled={deleteMutation.isPending}
        >
          <Trash2Icon className="mr-2 size-4" />
          Delete Store
        </Button>
      </CardFooter>
    </Card>
  );
}
