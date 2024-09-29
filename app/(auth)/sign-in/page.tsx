import { AuthForm } from '@/components/auth-form';
import { getUserSession } from '@/server/auth';
import { FlameIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async () => {
  const session = await getUserSession();
  if (session) redirect('/');
  return (
    <section className="grid h-svh md:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center">
        <Link
          href={'/'}
          className="absolute top-5 left-5 mb-6 flex items-center gap-1 text-blue-500 dark:text-blue-300"
        >
          <FlameIcon className="size-6 fill-blue-400/20" />
          <span className="font-bold">Shopino</span>
        </Link>
        <AuthForm title="Sign In" />
      </div>
      <img
        alt=""
        className="hidden h-full w-full object-cover brightness-50 md:block"
        src="https://img.pikbest.com/ai/illus_our/20230414/b4a5288ed630aeda46643b71c8ab3b65.jpg!w700wp"
      />
    </section>
  );
};
