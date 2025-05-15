// import Image from "next/image";
// import logo from "/public/images/logo.svg";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white text-center py-8">
//       <div className="flex justify-center mb-4">
//         <Image src={logo} alt="Logo" width={100} height={100} />
//       </div>
//       <p>&copy; {new Date().getFullYear()} Care Solutions | All rights reserved.</p>
//     </footer>
//   );
// }
//---------------

"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import { ArrowUp, Heart, Mail, Phone, MapPin, Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your API
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-orange-800 to-orange-900 text-white pt-16 pb-8">
      {/* Wave Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-full">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - About */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4 bg-white p-2 rounded-xl shadow-md">
              <Image 
                src={logo} 
                alt="Care Solutions Logo" 
                width={60} 
                height={60} 
                className="rounded" 
              />
              <div className="ml-2 text-orange-800">
                <p className="text-lg font-bold leading-tight">Care</p>
                <p className="text-lg font-bold leading-tight">Solutions</p>
              </div>
            </div>
            <p className="text-orange-100 mb-6 text-center md:text-left">
              Using AI technology to detect early signs of depression and connect people with the help they need.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-orange-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-orange-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-orange-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-orange-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 right-0 md:left-0 md:right-auto md:w-16 h-1 bg-orange-500 rounded"></span>
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li><a href="#" className="text-orange-200 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#intro" className="text-orange-200 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#download" className="text-orange-200 hover:text-white transition-colors duration-300">Get App</a></li>
              <li><a href="#screenshots" className="text-orange-200 hover:text-white transition-colors duration-300">Features</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 right-0 md:left-0 md:right-auto md:w-16 h-1 bg-orange-500 rounded"></span>
            </h3>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <MapPin size={20} className="text-orange-400 flex-shrink-0" />
                <span className="text-orange-200">47 C Civic Center Johar Town Block D، 2, Block D 2 Phase 1 Johar Town, Lahore, 54600</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <Phone size={20} className="text-orange-400 flex-shrink-0" />
                <span className="text-orange-200">+92 (304) 4070568</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <Mail size={20} className="text-orange-400 flex-shrink-0" />
                <span className="text-orange-200">caresolutions786@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Subscribe
              <span className="absolute -bottom-2 left-0 right-0 md:left-0 md:right-auto md:w-16 h-1 bg-orange-500 rounded"></span>
            </h3>
            <p className="text-orange-200 mb-4 text-center md:text-left">
              Stay updated with our latest features and announcements
            </p>
            <form onSubmit={handleSubscribe} className="w-full">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-l-md w-full focus:outline-none text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 mt-2 text-sm flex items-center justify-center md:justify-start">
                  <Heart size={16} className="mr-1" /> Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-orange-700/50 mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-orange-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Care Solutions | All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-orange-300 mr-4">Made with <Heart size={16} className="inline text-orange-500" /> by Care Team</p>
            <button
              onClick={scrollToTop}
              className="h-10 w-10 rounded-full bg-orange-600 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}