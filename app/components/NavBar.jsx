// import Image from "next/image";
// import logo from "/public/images/logo.svg";

// export default function Navbar() {
//   return (
//     <header className="flex justify-between items-center px-6 shadow-md bg-orange-500 text-white sticky top-0 z-50">
//       <div className="flex items-center space-x-2">
//         <Image src={logo} alt="Logo" width={80} height={80} className="bg-black" />
//         <span className="text-xl font-bold">Care Solutions</span>
//       </div>
//       <nav className="space-x-6">
//         <a href="#download" className="hover:text-orange-900">Download</a>
//         <a href="#intro" className="hover:text-orange-900">About</a>
//         <a href="#screenshots" className="hover:text-orange-900">Design</a>
//         <a href="#contact" className="hover:text-orange-900">Contact</a>
//       </nav>
//     </header>
//   );
// }
//-----------------------

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import logo from "/public/images/logo.svg";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Smooth scroll on link click
//   useEffect(() => {
//   const handleLinkClick = (e) => {
//     const href = e.currentTarget.getAttribute("href");
//     if (href.startsWith("#")) {
//       e.preventDefault();
//       const targetEl = document.querySelector(href);
//       if (targetEl) {
//         const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
//         const yOffset = -navbarHeight;

//         const y = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;

//         window.scrollTo({ top: y, behavior: "smooth" });
//         setIsOpen(false); // Close mobile menu
//       }
//     }
//   };

//   const links = document.querySelectorAll("a[href^='#']");
//   links.forEach((link) => link.addEventListener("click", handleLinkClick));

//   return () => {
//     links.forEach((link) => link.removeEventListener("click", handleLinkClick));
//   };
// }, []);


//   return (
//     <header className="sticky top-0 z-50 bg-orange-500 text-white shadow-md">
//       <div className="flex justify-between items-center px-6">
//         <div className="flex items-center space-x-2">
//           <Image src={logo} alt="Logo" width={80} height={80}  className="bg-white"/>
//           <span className="text-xl font-bold">Care Solutions</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6">
//           <a href="#download" className="hover:text-orange-900">Download</a>
//           <a href="#intro" className="hover:text-orange-900">About</a>
//           <a href="#test" className="hover:text-orange-900">Take Test</a>
//           <a href="#screenshots" className="hover:text-orange-900">Design</a>
//           <a href="#contact" className="hover:text-orange-900">Contact</a>
//         </nav>

//         {/* Hamburger Icon */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden bg-orange-600 ${
//           isOpen ? "max-h-60 py-4" : "max-h-0"
//         }`}
//       >
//         <nav className="flex flex-col items-center space-y-4">
//           <a href="#download" className="hover:text-orange-900">Download</a>
//           <a href="#intro" className="hover:text-orange-900">About</a>
//           <a href="#test" className="hover:text-orange-900">Take Test</a>
//           <a href="#screenshots" className="hover:text-orange-900">Design</a>
//           <a href="#contact" className="hover:text-orange-900">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }
//-----------------------------

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll events for navbar appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar appearance on scroll
      setScrolled(window.scrollY > 20);
      
      // Determine which section is in view
      const sections = ["download", "intro", "screenshots", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on link click
  useEffect(() => {
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
          const yOffset = -navbarHeight - 10; // Extra padding

          const y = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
          setIsOpen(false); // Close mobile menu
        }
      }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleLinkClick));
    };
  }, []);

  // Determine active link styling
  const getNavLinkClass = (section) => {
    const baseClass = "relative px-3 py-2 transition-all duration-300 hover:text-white rounded-md";
    const activeClass = activeSection === section ? "text-white font-medium" : "text-orange-100";
    
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-orange-600/95 backdrop-blur-sm py-2 shadow-lg" 
          : "bg-orange-500 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-300 to-orange-600 rounded-full opacity-80 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
            <div className="relative bg-white p-1 rounded-full">
              <Image src={logo} alt="Care Solutions Logo" width={60} height={60} className="rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none">Care Solutions</span>
            <span className="text-xs text-orange-200">Professional Healthcare Services</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1">
          <a href="#download" className={getNavLinkClass("download")}>
            Download
            {activeSection === "download" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </a>
          <a href="#intro" className={getNavLinkClass("intro")}>
            About
            {activeSection === "intro" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </a>
          <a href="#screenshots" className={getNavLinkClass("screenshots")}>
            Design
            {activeSection === "screenshots" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </a>
          <a href="#contact" className={getNavLinkClass("contact")}>
            Contact
            {activeSection === "contact" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full"></span>
            )}
          </a>
          <a href="#test" className="ml-6 px-4 py-1.5 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-100 transition-colors duration-300 flex items-center space-x-1 shadow-md">
            <span>Take Test</span>
            <ChevronDown size={16} />
          </a>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-3 px-6 py-4">
          <a 
            href="#download" 
            className={`px-3 py-2 rounded-md ${activeSection === "download" ? "bg-orange-700 text-white" : "text-orange-100"}`}
          >
            Download
          </a>
          <a 
            href="#intro" 
            className={`px-3 py-2 rounded-md ${activeSection === "intro" ? "bg-orange-700 text-white" : "text-orange-100"}`}
          >
            About
          </a>
          <a 
            href="#screenshots" 
            className={`px-3 py-2 rounded-md ${activeSection === "screenshots" ? "bg-orange-700 text-white" : "text-orange-100"}`}
          >
            Design
          </a>
          <a 
            href="#contact" 
            className={`px-3 py-2 rounded-md ${activeSection === "contact" ? "bg-orange-700 text-white" : "text-orange-100"}`}
          >
            Contact
          </a>
          <a href="#test" className="mt-2 px-4 py-2 bg-white text-orange-600 rounded-md font-medium hover:bg-orange-100 transition-colors duration-300 flex items-center justify-center space-x-1 shadow-md">
            <span>Take Test</span>
            <ChevronDown size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}