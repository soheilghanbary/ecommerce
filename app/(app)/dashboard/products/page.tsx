import { BackButton } from '@/components/back-btn';

export default () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <BackButton />
        <div>
          <h1 className="font-extrabold text-2xl">Products</h1>
          <p className="text-muted-foreground text-sm">Manage your products</p>
        </div>
      </div>
    </>
  );
};
