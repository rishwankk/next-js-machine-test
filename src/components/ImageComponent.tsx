
import React from 'react';
import { IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4 } from '../app/constants/imageLinks';

const ImageGrid = () => {
  const images = [
    { src: IMAGE_1, title: 'Consectetur adipiscing elit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.' },
    { src: IMAGE_2, title: 'Consectetur adipiscing elit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.' },
    { src: IMAGE_3, title: 'Consectetur adipiscing elit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.' },
    { src: IMAGE_4, title: 'Consectetur adipiscing elit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.' }
  ];

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img 
              src={image.src} 
              alt={image.title} 
              className="w-full h-48 object-cover rounded-lg shadow-lg" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-end p-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
