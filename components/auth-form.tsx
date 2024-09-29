'use client';
import { signIn } from 'next-auth/react';
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

type Props = {
  title: string;
};

export function AuthForm({ title }: Props) {
  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    setLoading(true);
    await signIn('github');
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="mb-2 text-center">{title}</CardTitle>
        <CardDescription className="text-center">
          Enter your email below to {title} to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" onClick={onSignIn} disabled={loading}>
          {title} with GitHub
          {!!loading && (
            <SpinnerIcon className="ml-2 size-4 fill-primary-foreground" />
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
