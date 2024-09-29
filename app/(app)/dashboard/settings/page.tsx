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

export default () => {
  return (
    <div className="grid gap-4">
      <h1 className="font-extrabold text-2xl">Settings</h1>
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
