// Button.tsx
import React from 'react';
import Link from 'next/link';


type ButtonProps = {
  href: string;      
  text: string;    
  className?: string;
};


const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
  return (
    <Link 
      href={href} 
      className={`px-4 py-2 rounded-md transition duration-300 ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
