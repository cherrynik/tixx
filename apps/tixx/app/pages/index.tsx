import { trpc } from '@tixx/utils/trpc';

export default function IndexPage() {
  const hello = trpc.wassgud.useQuery({ text: 'client' });

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}