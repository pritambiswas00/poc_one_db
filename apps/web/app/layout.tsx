
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/provider/theme.provider';
import GlobalStyleProvider from '@/provider/globalProvider';
import { ToastProvider } from '@/provider/toast.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "One Drive Inc",
  description: "Manage all your data with Ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <GlobalStyleProvider>
            <ToastProvider>
            {children}
            </ToastProvider>
          </GlobalStyleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
