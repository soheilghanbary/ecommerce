'use client';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SpinnerIcon } from './icons/spinner';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export function SignOut() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onLogout = async () => {
    setLoading(true);
    await signOut({
      callbackUrl: '/',
    });
  };

  const toBack = () => {
    router.back();
  };

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="mb-2 text-center">Sign Out</CardTitle>
        <CardDescription className="text-center">
          do you want to sign out?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button disabled={loading} variant={'outline'} onClick={onLogout}>
            Log Out
            {!!loading && (
              <SpinnerIcon className="ml-2 size-4 fill-foreground" />
            )}
          </Button>
          <Button onClick={toBack} disabled={loading}>
            Back
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
