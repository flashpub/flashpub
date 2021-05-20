import * as React from 'react';
import { useRouter } from 'next/router';
import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
  header?: boolean;
  footer?: boolean;
  wide?: boolean;
}
export const Layout: React.FC<LayoutProps> = ({
  header = true,
  footer = true,
  wide = false,
  children,
}) => {
  const router = useRouter();
  const withHeader = header ? 'pt-14 md:pt-20' : '';
  const isContentWide = wide ? 'max-w-screen px-0' : 'max-w-5xl px-4';

  return (
    <div
      className={`flex flex-col justify-center items-center relative max-w-screen`}
    >
      {header && <Header />}
      <div
        className={`flex justify-center h-auto ${withHeader} ${isContentWide} w-full relative`}
      >
        {children}
      </div>
      {footer && <Footer />}
    </div>
  );
};
