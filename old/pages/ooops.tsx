import React from 'react';
import { useRouter } from 'next/router';

import { Button } from 'src/ui/Button';
import { Store } from '@modules/internal';

export default function OoopsPage() {
  const router = useRouter();
  const [msg, setMsg] = React.useState('');

  React.useEffect(() => {
    setMsg(router.query.error as string);
  }, [msg, router.query.error]);

  const onAgain = () => {
    router.replace('/signin');
    Store.certificate.redirect = undefined;
  };
  const onHome = () => {
    router.replace('/');
    Store.certificate.redirect = undefined;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {msg}
      <Button onClick={onAgain} label="Sign in" />
      <Button onClick={onHome} label="Home" />
    </div>
  );
}
