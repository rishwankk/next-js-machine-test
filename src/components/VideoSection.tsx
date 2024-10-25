"use client"
import React from 'react';
import { FaPlay } from 'react-icons/fa'; 
import Button from './Button'; 
import { SECOND_IMAGE } from '../app/constants/imageLinks';

const VideoSection = () => {
  const handlePlayClick = () => {
    
    console.log('Play button clicked!');
  };

  return (
    <div className="relative w-full flex justify-center items-center py-12"> 
      
      
      <div className="w-[90%] h-64 md:h-96 flex justify-center items-center overflow-hidden rounded-lg relative"> 
        <img
          className="w-full h-full object-cover" 
          src={SECOND_IMAGE}
          alt="Graduation Ceremony"
        />
        
       
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 bg-black bg-opacity-40"> 
         
          <div className="mb-6 -ml-96">
            <button 
              onClick={handlePlayClick}
              className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full"
            >
              <FaPlay className="w-6 h-6" />
            </button>
          </div>
          
         
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center -ml-56"> 
            Lorem ipsum dolor sit amet.
          </h2>
          
       
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
