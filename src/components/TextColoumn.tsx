import React from 'react';
import FirstColumn from './coloumn/FirstColumn';
import SecondColumn from './coloumn/SecondColumn';

const TextColumns = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="flex flex-col justify-center items-center md:items-start">
          <FirstColumn />
        </div>

      
        <div className="flex flex-col justify-between">
          <SecondColumn />
        </div>
      </div>
    </div>
  );
};

export default TextColumns;
