import React from 'react';

const SecondColumn = () => {
  return (
    <div className="flex flex-col">
      {/* Second Column */}
      <div className="f"></div>
      
      <div className="border-l border-black pl-8 mb-8">
        <h3 className="text-xl font-semibold mb-4">Lorem ipsum</h3>
        <p className="text-gray-600 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst. Fusce non venenatis velit. Purus luctus molestie. Pellentesque
          lacus elit lorem.
        </p>
      </div>

      {/* Third Column */}
      <div className="border-l border-black pl-8">
        <h3 className="text-xl font-semibold mb-4">Lorem ipsum</h3>
        <p className="text-gray-600 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst. Fusce non venenatis velit. Purus luctus molestie. Pellentesque
          lacus elit lorem.
        </p>
      </div>
    </div>
  );
};

export default SecondColumn;
