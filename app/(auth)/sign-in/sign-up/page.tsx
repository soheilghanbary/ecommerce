import { AuthForm } from '@/components/auth-form';

export default () => {
  return (
    <section className="grid h-svh grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <AuthForm title="Sign Up" />
      </div>
      <img
        alt=""
        className="h-full w-full object-cover brightness-50"
        src="https://img.pikbest.com/ai/illus_our/20230414/b4a5288ed630aeda46643b71c8ab3b65.jpg!w700wp"
      />
    </section>
  );
};
