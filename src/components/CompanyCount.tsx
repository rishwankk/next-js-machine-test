"use client";
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const target = document.querySelector('#stats-counter');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div id="stats-counter" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
        
        {/* Counter 1 */}
        <div>
          <h2 className="text-3xl font-bold">
            {isVisible && <CountUp start={0} end={8} duration={3} />} Years
          </h2>
          <p className="text-gray-600">of Success</p>
        </div>

        {/* Counter 2 */}
        <div>
          <h2 className="text-3xl font-bold">
            {isVisible && <CountUp start={0} end={200} duration={3} />}+
          </h2>
          <p className="text-gray-600">Members</p>
        </div>

        {/* Counter 3 */}
        <div>
          <h2 className="text-3xl font-bold">
            {isVisible && <CountUp start={0} end={155} duration={3} />}+
          </h2>
          <p className="text-gray-600">All Over The USA</p>
        </div>

        {/* Counter 4 */}
        <div>
          <h2 className="text-3xl font-bold">
            {isVisible && <CountUp start={0} end={200000} duration={3} />}k
          </h2>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
