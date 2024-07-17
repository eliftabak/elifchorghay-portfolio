"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsActive((prev) => !prev);
  };

  const changeClass = () => {
    const scrollPosY = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosY > 30) {
      setScrolling(true);
    } else if (scrollPosY <= 30) {
      setScrolling(false);
    }
  };

  useEffect(() => {
    changeClass();
    window.addEventListener('scroll', changeClass);

    return () => {
      window.removeEventListener('scroll', changeClass);
    };
  }, []);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={`hamburger relative block z-50 pointer focus:outline-none ${isActive ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        onKeyDown={(evt) => evt.key === 'Enter' && toggleMobileMenu()}
      >
        <div className="bg-primary"></div>
        <div className="bg-primary"></div>
        <div className="bg-primary"></div>
      </div>
      <nav className={`menu ${isActive ? 'active' : 'hidden'} ${scrolling ? 'bg-red-500' : ''}`}>
        <div className="mt-32 contain flex flex-col font-heading text-3xl tracking-wider items-end">
          <Link href="/" className={`mb-8 hover:text-white ${pathname === '/' ? 'text-white active' : 'text-offgray'}`} onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={`mb-8 hover:text-white ${pathname === '/about' ? 'text-white active' : 'text-offgray'}`} onClick={toggleMobileMenu}>
            About
          </Link>
          <Link href="/contact" className={`mb-8 hover:text-white ${pathname === '/contact' ? 'text-white active' : 'text-offgray'}`} onClick={toggleMobileMenu}>
            Contact
          </Link>
          <a className="mb-8 text-offgray hover:text-white" href="/ElifsResume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>
            Resume
          </a>
        </div>
      </nav>
    </>
  );
};

export default Menu;
