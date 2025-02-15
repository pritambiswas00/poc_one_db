'use client';

import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import ProfileUpdatSettings from './components/profile-update';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  return (
    <React.Fragment>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium ">Profile</h3>
          <p className="text-sm text-muted-foreground">
            Update your profile settings. Set your preferred choice.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <ProfileUpdatSettings />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Settings;
