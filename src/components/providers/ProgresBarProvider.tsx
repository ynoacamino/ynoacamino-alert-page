'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppProgressBar
        color="#A21AE6"
        height="3px"
        options={{ showSpinner: false }}
      />
      {children}
    </>
  );
}
