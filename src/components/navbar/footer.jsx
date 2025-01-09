
import React from "react";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0  w-full h-16 bg-primary flex items-center justify-between px-4">
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

        <a
          href="/omni"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Omni
        </a>
        <a
          href="/init"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Init
        </a>
        <a
          href="/search"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Search
        </a>
      </div>
    </footer>
  );
}
