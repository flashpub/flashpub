import React from 'react';
import { useRouter } from 'next/router';

import { Logo } from '@ui/Logo';
import { Store } from '@modules/internal';
import { Authenticate } from '@modules/authenticate';
import { Button } from '@ui/Button';

export const Access: React.FC = () => {
  const router = useRouter();
  const cert = Store.react(Store.certificate);

  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [submit, setSubmit] = React.useState(false);

  const onSubmit = () => setSubmit(true);
  const onPass = (e: any) => setPass(e.target.value);
  const onEmail = (e: any) => setEmail(e.target.value);

  React.useEffect(() => {
    if (submit && pass !== '' && email !== '') Authenticate.signIn(email, pass);
  }, [email, pass, submit]);

  React.useEffect(() => {
    if (cert.redirect) {
      router.push(cert.redirect[0], cert.redirect[1]);
    }
  }, [cert.redirect, router]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center border-2 max-w-sm p-6 rounded-xl">
        <Logo symbol="fp" />
        <p className="text-center my-4">
          Sign in to your flashpub account to continue
        </p>
        <input
          className="border-2 px-4 py-2 rounded-lg mb-2"
          type="email"
          value={email}
          onChange={onEmail}
          placeholder="email"
        />
        <input
          className="border-2 px-4 py-2 rounded-lg mb-2"
          value={pass}
          type="password"
          onChange={onPass}
          placeholder="password"
        />
        <Button onClick={onSubmit} label="Sign in" />
      </div>
    </div>
  );
};
