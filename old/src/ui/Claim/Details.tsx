import React from 'react';

export const Details: React.FC<any> = ({ defaultConditions }) => {
  const renderDefaults = defaultConditions.map((con, i) => {
    return (
      <div className="" key={i}>
        <div>{con.name}</div>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center w-full h-auto">
      {renderDefaults}
    </div>
  );
};
