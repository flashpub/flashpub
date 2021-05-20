import React from 'react';
import { useRouter } from 'next/router';

import { Store } from '@modules/internal';
import { Button } from '@ui/Button';

const Anonymous = () => {
  const router = useRouter();

  const onLogin = () => {
    router.push('/signin');
  };

  return (
    <div className="">
      <Button
        className="bg-blue-400 border-0"
        label="Login"
        onClick={onLogin}
      />
    </div>
  );
};

const Certified = () => {
  const router = useRouter();

  const onPublish = () => {
    router.push('/publish');
  };

  return (
    <div className="">
      <Button className="border-0" label="Publish" onClick={onPublish} />
    </div>
  );
};

export const Navigation: React.FC = () => {
  const cert = Store.react(Store.certificate);

  return cert.data ? <Certified /> : <Anonymous />;
};
