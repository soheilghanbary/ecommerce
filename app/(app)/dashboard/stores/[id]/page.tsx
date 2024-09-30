import { BackButton } from '@/components/back-btn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <Tabs defaultValue="products">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="settings">
          <UpdateStore {...store} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
