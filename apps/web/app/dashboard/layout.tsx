import * as React from 'react';
import AccountSwitcher from './components/account-switch';
import UserNavigation from './components/user-navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex flex-col md:flex">
      <div className="border-b ">
        <div className="flex h-16 items-center px-4">
            <AccountSwitcher />
            <div className="ml-auto flex items-center justify-end space-y-2">
              <UserNavigation />
            </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}
