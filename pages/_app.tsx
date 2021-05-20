import type { AppProps } from 'next/app';

import { Community } from '@modules/community';
import { RemoteStore } from '@modules/storage';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RemoteStore>
      <Community />
      <Component {...pageProps} />
    </RemoteStore>
  );
}
export default MyApp;
