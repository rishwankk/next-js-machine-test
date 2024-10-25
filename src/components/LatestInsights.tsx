"use client";
import { IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4 } from '@/app/constants/imageLinks';
import React, { useState } from 'react';

const LatestInsights = () => {
  const insights = [
    {
      src: IMAGE_1,
      date: 'October 25, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    },
    {
      src: IMAGE_2,
      date: 'October 24, 2024',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#'
    },
    {
      src: IMAGE_3,
      date: 'October 23, 2024',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      link: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? insights.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === insights.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-thin ml-24">Latest Insights</h2>
        <div className="flex">
          <button onClick={handlePrev} className="bg-gray-800 text-white rounded-full p-2 mx-2">
            &#9664; 
          </button>
          <button onClick={handleNext} className="bg-gray-800 text-white rounded-full p-2 mx-2">
            &#9654; 
          </button>
        </div>
      </div>

      <div className="flex gap-5 overflow-x-auto px-4 justify-evenly" >
        {insights.map((insight, index) => (
          <div key={index} className={`relative w-80 mb-6 transition-transform duration-300 ${currentIndex === index ? 'scale-105' : ''}`}>
            <img 
              src={insight.src} 
              className='object-cover rounded-xl w-full h-[350px]' 
              alt={insight.description} 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col justify-end p-4 text-white">
              <p className="text-sm">{insight.date}</p>
              <p className="text-lg font-semibold">{insight.description}</p>
              <a href={insight.link} className="text-blue-400 hover:underline mt-2">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestInsights;
