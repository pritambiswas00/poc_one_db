'use client';

import { Separator } from '@/components/ui/separator';
import * as React from 'react';
import { NotificationsForm } from './notification-form';

const Notifications: React.FC = () => {
  return (
    <React.Fragment>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </div>
        <Separator />
        <NotificationsForm />
      </div>
    </React.Fragment>
  );
};

export default Notifications;
