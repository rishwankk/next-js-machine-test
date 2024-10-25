import React from 'react';

const TextColumns = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column - Wider with title */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold mb-4">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In
            hac habitasse platea dictumst. Fusce non venenatis velit. Purus luctus molestie.
            Pellentesque lacus elit lorem et varius ipsum dictum. A met vitae scelerisque.
            Gravida sit vitae mollis massa lectus o neque. Massa mollis elit quis lacinia
            vestibulum eu molestie in.
          </p>
        </div>

        {/* Second Column */}
        <div className="border-l border-gray-200 pl-8 hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Lorem ipsum</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.
            In hac habitasse platea dictumst. Fusce non venenatis velit. Purus luctus molestie.
            Pellentesque lacus elit lorem.
          </p>
        </div>

        {/* Third Column */}
        <div className="border-l border-gray-200 pl-8 hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Lorem ipsum</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.
            In hac habitasse platea dictumst. Fusce non venenatis velit. Purus luctus molestie.
            Pellentesque lacus elit lorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextColumns;