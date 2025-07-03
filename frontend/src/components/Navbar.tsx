import React from 'react';

interface NavbarProps {
  currentPage: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const linkBase =
    'text-xs font-medium tracking-widest transition-colors duration-300';
  const activeClasses =
    'text-[#b8860b] border-b-2 border-[#b8860b]';
  const inactiveClasses = 'text-gray-300 hover:text-white';

  // Effective page index ignoring the landing page (index 0)
  const pageAfterLanding = currentPage - 1;

  const isActive = (index: number) => pageAfterLanding === index;

  return (
    <nav className="fixed top-0 w-full z-50 px-12 py-10 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Left Nav */}
        <div className="flex items-center space-x-20">
          <a
            href="#about"
            className={`${linkBase} ${
              isActive(1) ? activeClasses : inactiveClasses
            }`}
          >
            ABOUT
          </a>
          <a
            href="#work"
            className={`${linkBase} ${
              isActive(0) ? activeClasses : inactiveClasses
            }`}
          >
            EXPERIENCE
          </a>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 top-10 transform -translate-x-1/2">
          <div className="text-5xl font-thin text-[#b8860b]">
            <span className="inline-block">G</span>
            <span className="inline-block ml-1">S</span>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-20">
          <a
            href="#shop"
            className={`${linkBase} ${
              isActive(2) ? activeClasses : inactiveClasses
            }`}
          >
            PROJECTS
          </a>
          <a
            href="#contacts"
            className={`${linkBase} ${
              isActive(3) ? activeClasses : inactiveClasses
            }`}
          >
            CONTACTS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 