import '@/app/globals.css';
import { ReactNode } from 'react';
import { ApolloWrapper } from '@/components/apollo-wrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
