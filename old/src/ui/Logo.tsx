import React from 'react';

export const Logo: React.FC<any> = ({ symbol }) => {
  return (
    <div className="flex items-center justify-center bg-gray-400 h-14 sm:h-16 w-14 sm:w-16 rounded-xl">
      <div className="text-3xl text-white ">{symbol}</div>
    </div>
  );
};
