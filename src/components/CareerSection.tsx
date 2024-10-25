import React from 'react';
import Button from './Button'; // Adjust path if necessary
import { IMAGE_1 } from '@/app/constants/imageLinks';

const CareersSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Flexbox container for two-column layout */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left side with text */}
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold">Let's work Together</h2>
            <p className="mt-4 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare tristique euismod rcu tristique nisl id nibh. 
              Vivamus feugiat viverra. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Right side with button */}
          <div className="md:w-auto flex mr-36 mt-10 w-full ">
            <Button 
              href="/careers" // Update this to the appropriate path
              text="View Vacancies"
              className="bg-blue-600 text-white hover:bg-blue-500"
            />
          </div>
        </div>
      </div>
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-50 z-0" 
        style={{ 
          backgroundImage: `url(${IMAGE_1})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      ></div>
    </section>
  );
};

export default CareersSection;
