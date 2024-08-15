import './globals.css';
import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import { Header } from '@/components/global/Header';
import ProgressBarProvider from '@/components/providers/ProgresBarProvider';
import AuthProvider from '@/components/providers/AuthProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'Alerta de talon de pago | Noa Alert',
  description: 'Recibe una alerta cuando tu talon de pago este disponible en la pagina de @ynoacamino',
  authors: [{ name: 'Yenaro Joel Noa Camino', url: 'https://github.com/ynoacamino' }],
  creator: 'Yenaro Joel Noa Camino',
  publisher: 'Yenaro Joel Noa Camino',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://noa-registration-alert.vercel.app/',
    title: 'Alerta de talon de pago | Noa Alert',
    description: 'Recibe una alerta cuando tu talon de pago este disponible en la pagina de @ynoacamino',
    images: [
      {
        url: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1711773133/o7ebpfrmzuh5znkudsal.webp',
        width: 1000,
        height: 623,
        alt: 'Alerta de talon de pago | Noa Alert',
      },
    ],
    siteName: 'Alerta de talon de pago | Noa Alert',
  },
  twitter: {
    creator: '@ynoacamino',
    site: 'https://github.com/ynoacamino',
    description: 'Recibe una alerta cuando tu talon de pago este disponible en la pagina de @ynoacamino',
    images: [
      {
        url: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1711773133/o7ebpfrmzuh5znkudsal.webp',
        width: 1000,
        height: 623,
        alt: 'Alerta de talon de pago | Noa Alert',
      },
    ],
    title: 'IEEE UNSA | Student Chapter',
  },
  metadataBase: new URL('https://noa-registration-alert.vercel.app/'),
  other: {
    'google-site-verification': 'g30ufCNKK71KbPsouFqQiaJDDp7dMHnrahL2HKS6Jow',
  },
};

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col w-full overflow-x-hidden',
          fontSans.variable,
        )}
        style={{ scrollbarGutter: 'stable' }}
      >
        <ProgressBarProvider>
          <AuthProvider>
            <ThemeProvider>
              <Header />
              {children}
            </ThemeProvider>
          </AuthProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
