import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import '../styles/globals.css';

import { AuthenticateGuard } from '@modules/authenticate';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticateGuard>
        <Component {...pageProps} />
      </AuthenticateGuard>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
