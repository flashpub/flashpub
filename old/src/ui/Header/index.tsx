import React from 'react';

import { Config } from '@modules/internal';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  return (
    <div className="absolute top-0 flex w-full h-14 md:h-20 items-center px-4 justify-center z-10 bg-gray-50 shadow-md">
      <div className="max-w-5xl flex w-full h-full items-center justify-self-auto">
        <div className="flex w-1/2">flashpub</div>
        <div className="flex w-1/2 justify-end">
          <Navigation />
        </div>
        <div
          className="absolute"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          {Config.communityName}
        </div>
      </div>
    </div>
  );
};
