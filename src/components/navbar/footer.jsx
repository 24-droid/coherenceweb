import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 mb-0 w-full bg-primary text-white px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="h-10 hover:cursor-pointer transition-transform duration-200 hover:scale-105"
          />
          <p className="text-lg font-semibold">
            Coherence - Inspiring Innovation
          </p>
        </div>

        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
            <Twitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
   
        <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
          <Link
            to="/init"
            className="hover:text-secondary transition-colors duration-200"
          >
            Init
          </Link>
          <Link
            to="/omni"
            className="hover:text-secondary transition-colors duration-200"
          >
            Omni
          </Link>
          <Link
            to="/search"
            className="hover:text-secondary transition-colors duration-200"
          >
            Search
          </Link>
        </div>

        <p className="text-gray-400 text-center">
          © {new Date().getFullYear()} Coherence. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
