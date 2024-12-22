import React from "react";
import { Search } from "lucide-react";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-primary flex items-center justify-between px-4">
      {/* Left side - Logo and Brand */}
      <div className="flex items-center gap-8 py-8 text-white">
        <img
          src={logo}
          alt="logo"
          className="h-8 hover:cursor-pointer transition-transform duration-200 hover:scale-105"
        />
        <p className="text-2xl font-semibold hidden md:block hover:cursor-pointer hover:text-secondary transition-colors duration-200">
          Coherence
        </p>
      </div>

      {/* Right side - Navigation Links */}
      <div className="flex items-center gap-6 py-8 text-white">
        {/* Search Icon */}
        <button
          className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          aria-label="Search"
        >
          <Search size={20} />
        </button>

        {/* Navigation Links */}
        <a
          href="/blog"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Blog
        </a>
        <a
          href="/careers"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Careers
        </a>
        <a
          href="/contact"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Contact
        </a>
        <a
          href="/about"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          About
        </a>
      </div>
    </nav>
  );
}
