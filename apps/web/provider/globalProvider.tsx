'use client';

import * as React from 'react';
interface GlobalStyleProviderProps extends React.PropsWithChildren {}

const GlobalStyleProvider: React.FC<GlobalStyleProviderProps> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <div className="h-screen flex gap-10">{children}</div>
    </React.Fragment>
  );
};

export default GlobalStyleProvider;
