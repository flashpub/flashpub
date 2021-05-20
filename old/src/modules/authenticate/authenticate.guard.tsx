import React from 'react';
import { useRouter } from 'next/router';

import { Backend, Store } from '@modules/internal';
import { Authenticate } from './authenticate.service';

export const AuthenticateGuard: React.FC = ({ children }) => {
  const router = useRouter();
  const cert = Store.react(Store.certificate);
  const path = router.pathname;

  React.useEffect(() => {
    if (typeof cert.data === 'undefined') {
      Store.certificate.status = 'loading';
      Backend.Auth().onAuthStateChanged((user) => {
        Store.certificate.data = Authenticate.createCertificate(user);
        Store.certificate.status = 'idle';
        // if (!user) router.push(`/signin?from=${path}`, '/signin');
      });
    }
  }, [cert.data, path, router]);

  return <>{children}</>;
};
