"use client"
import { SECOND_IMAGE } from '@/app/constants/imageLinks';
import React from 'react';
import { FaPlay } from 'react-icons/fa'; // For play icon
import Button from './Button'; // Import your Button component

const VideoSection = () => {
  const handlePlayClick = () => {
    // Handle the play action, e.g., open a video modal or redirect
    console.log('Play button clicked!');
  };

  return (
    <div className="relative w-full flex justify-center items-center py-12"> 
      
      {/* Background Image Container */}
      <div className="w-[90%] h-64 md:h-96 flex justify-center items-center overflow-hidden rounded-lg relative"> 
        <img
          className="w-full h-full object-cover" 
          src={SECOND_IMAGE}
          alt="Graduation Ceremony"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 bg-black bg-opacity-40"> 
          {/* Play Button */}
          <div className="mb-6 -ml-96">
            <button 
              onClick={handlePlayClick}
              className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full"
            >
              <FaPlay className="w-6 h-6" />
            </button>
          </div>
          
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center -ml-56"> 
            Lorem ipsum dolor sit amet.
          </h2>
          
          {/* Subtitle */}
          <p className="text-xs md:text-base  -ml-[360px]"> 
            Sanchez Alexis<br />
           CEO & Founder of Demo
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
