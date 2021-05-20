import React from 'react';
import { useRouter } from 'next/router';

import { Loading } from 'src/ui/Loading';
import { Store } from '@modules/internal';
import { Layout } from '@ui/Layout';
import { Access } from '@ui/Forms';

export default function SignInPage() {
  const router = useRouter();
  const cert = Store.react(Store.certificate);

  React.useEffect(() => {
    if (cert.data) {
      const from = window.history.state.url;
      const redirect = from === '/signin' ? '/' : from;
      router.push(redirect);
    }
  }, [cert.data, router]);

  if (cert.data || cert.status === 'loading') return <Loading />;

  return (
    <Layout footer={false}>
      <Access />
    </Layout>
  );
}
