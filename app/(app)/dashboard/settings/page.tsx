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
import { ChevronLeft } from 'lucide-react';

export default () => {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <Button variant={'outline'} size={'icon'}>
          <ChevronLeft className="size-4" />
        </Button>
        <div>
          <h1 className="font-extrabold text-2xl">Settings</h1>
          <p className="text-muted-foreground text-sm">Manage your settings</p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>User Account</CardTitle>
          <CardDescription>Manage your account</CardDescription>
        </CardHeader>
        <CardContent>
          <TextField label="Name" placeholder="Enter your name" />
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
