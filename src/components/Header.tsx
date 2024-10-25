"use client";
import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { navLinks } from '@/app/constants/Links';
import Button from './Button';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent fixed top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Logo
        </Link>

        <nav className="hidden md:flex flex-grow justify-center space-x-8 items-center">
          {navLinks.map((nav) => (
            <Link key={nav.href} href={nav.href} className="text-white hover:text-gray-600">
              {nav.text}
            </Link>
          ))}
        </nav>

      
        <Button
          href="/contact-us" 
          text="Contact Us" 
          className="hidden md:block bg-white text-black border border-white hover:bg-gray-700 hover:text-gray-800" 
        />

       
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenuAlt3 />
        </button>
      </div>

      
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((nav) => (
              <li key={nav.href}>
                <Link href={nav.href} className="text-gray-800 hover:text-gray-600">
                  {nav.text}
                </Link>
              </li>
            ))}
            <li>
            <Button 
                href="/contact-us" 
                text="Contact Us" 
                className="bg-gray-800 text-white shadow-md hover:bg-gray-700"
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
