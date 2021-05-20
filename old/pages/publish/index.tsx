import React from 'react';
import { useRouter } from 'next/router';

import { Layout } from '@ui/Layout';
import { Loading } from '@ui/Loading';
import { Store } from '@modules/internal';
import { Publish } from '@ui/Publish';

export default function PublishPage() {
  const router = useRouter();
  const cert = Store.react(Store.certificate);

  React.useEffect(() => {
    if (!cert.data) {
      const msg = 'You need to sign in to publish';
      router.push(`/ooops?error=${msg}`, '/ooops');
    }
  }, [cert.data, router]);

  if (cert.status === 'loading') return <Loading />;

  return (
    <Layout>
      <Publish />
    </Layout>
  );
}
