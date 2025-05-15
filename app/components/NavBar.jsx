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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll on link click
  useEffect(() => {
  const handleLinkClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
        const yOffset = -navbarHeight;

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


  return (
    <header className="sticky top-0 z-50 bg-orange-500 text-white shadow-md">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={80} height={80}  className="bg-white"/>
          <span className="text-xl font-bold">Care Solutions</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#download" className="hover:text-orange-900">Download</a>
          <a href="#intro" className="hover:text-orange-900">About</a>
          <a href="#screenshots" className="hover:text-orange-900">Design</a>
          <a href="#contact" className="hover:text-orange-900">Contact</a>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-orange-600 ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <a href="#download" className="hover:text-orange-900">Download</a>
          <a href="#intro" className="hover:text-orange-900">About</a>
          <a href="#screenshots" className="hover:text-orange-900">Design</a>
          <a href="#contact" className="hover:text-orange-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}
