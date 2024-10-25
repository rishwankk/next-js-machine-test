import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolios', href: '/portfolios' },
  { name: 'Insights', href: '/insights' }
];

const leftLinks = [
  { name: 'Lorem ipsum dolor sit amet', href: '/lorem-ipsum-1' },
  { name: 'Lorem ipsum dolor sit amet', href: '/lorem-ipsum-2' },
  { name: 'Lorem ipsum dolor sit amet', href: '/lorem-ipsum-3' }
];

const middleLinks = [
  { name: 'Lorem', href: '/lorem' },
  { name: 'Ipsum', href: '/ipsum' },
  { name: 'Consectetur', href: '/consectetur' },
  { name: 'Efficitur', href: '/efficitur' }
];

const socialMediaIcons = [
  { icon: <FaFacebook />, href: 'https://www.facebook.com' },
  { icon: <FaTwitter />, href: 'https://www.twitter.com' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com' }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Top section: Quick Links */}
        <div className="border-b border-gray-600 pb-6 mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
         
          <div>
            <ul className="space-y-2">
              {leftLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white text-gray-400">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <ul className="space-y-2">
              {middleLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white text-gray-400">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Lorem Ipsum, Iso Lorem,<br />
              Iso Lorem Posum
            </p>
            <p className="mt-4 text-gray-400">
              +91 00000 00000<br />
              info@demo.com
            </p>
            <div className="flex space-x-4 mt-4">
              {socialMediaIcons.map((item, index) => (
                <a key={index} href={item.href} className="text-gray-400 hover:text-white">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <p className=" text-gray-400 text-sm">©2024 Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
