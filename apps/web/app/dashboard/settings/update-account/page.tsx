'use client';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';
import { AccountForm } from './account-form';

interface UpdateAccountProps extends React.PropsWithChildren {}

const UpdateAccount: React.FC<UpdateAccountProps> = () => {
  return (
    <React.Fragment>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Account</h3>
          <p className="text-sm text-muted-foreground">
            Update your account settings. Set your preferred language and
            timezone.
          </p>
        </div>
        <Separator />
        <AccountForm />
      </div>
    </React.Fragment>
  );
};

export default UpdateAccount;
