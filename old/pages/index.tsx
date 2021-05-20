import React from 'react';

import { Layout } from '@ui/Layout';
import { Loading } from '@ui/Loading';
import { Store } from '@modules/internal';

export default function Index() {
  const cert = Store.react(Store.certificate);

  if (cert.status === 'loading') return <Loading />;

  return (
    <Layout>
      <div>FEED</div>
    </Layout>
  );
}
