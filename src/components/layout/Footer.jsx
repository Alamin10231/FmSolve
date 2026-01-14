import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Ask Sam", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
    { name: "FM Answers", href: "#" },
    { name: "FM News", href: "#" },
  ];

  return (
    <footer className="w-full py-12 px-6 border-t 
      bg-white dark:bg-[#0a0e14] 
      border-gray-200 dark:border-gray-800/50"
    >
      <div className="flex flex-col items-center justify-between gap-8 mx-auto max-w-7xl md:flex-row">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              FmSolve
            </span>
            <span className="hidden text-sm text-gray-400 md:inline">|</span>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Problem. Solution. Exit.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-600 transition-colors duration-200 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          © {currentYear} FmSolve. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
