import { BackButton } from '@/components/back-btn';
import { UpdateStore } from '@/components/update-store';
import { getStore } from '@/server/actions/store';

type Params = {
  id: string;
};

export default async ({ params }: { params: Params }) => {
  const store = await getStore(params.id);
  if (!store) return <p>Store Not Found</p>;
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="font-extrabold text-2xl">Store Page</h1>
      </div>
      <UpdateStore {...store} />
    </div>
  );
};
