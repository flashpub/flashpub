import React from 'react';

import { Single } from './Single';
import { Details } from './Details';
import { Store } from 'src/modules/storage.module';

export const ContentClaim: React.FC<any> = ({ claim }) => {
  const selectedContent = Store.react(Store.selectedContent);

  return (
    <div className="flex flex-col items-center w-full m-4 h-auto">
      <Single item1={claim.item1} />
      <p className="">Recommended details:</p>
      <Details defaultConditions={selectedContent.data.defaultConditions} />
    </div>
  );
};
