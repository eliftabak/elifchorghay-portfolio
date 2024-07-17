"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [useClass, setUseClass] = useState('');
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  const toggleMobileMenu = () => {
    if (isActive) {
      setUseClass('hidden');
    } else {
      setUseClass('active');
    }
    setIsActive(!isActive);
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

  useEffect(() => {
    const body = document.querySelector('body');
    if (isActive) {
      body!.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        body!.style.overflow = '';
      }, 400);
    }
  }, [isActive]);

  return (
    <header className={`sticky top-0 z-50 bg-white py-6 ${scrolling ? 'border-b border-border mt-0' : 'mt-4'}`}>
      <div className="contain flex items-center justify-between">
        <Link href="/" className={`font-heading text-xl tracking-wider z-50 transition-colors duration-300 ${isActive ? 'text-white' : 'text-primary'}`}>
          Elif Chorghay
        </Link>
        <div
          role="button"
          tabIndex={0}
          className={`hamburger relative block z-50 pointer focus:outline-none ${isActive ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          onKeyDown={(evt) => evt.key === 'Enter' && toggleMobileMenu()}
        >
          <div className="bg-primary h-0.5 w-6 mb-1"></div>
          <div className="bg-primary h-0.5 w-6 mb-1"></div>
          <div className="bg-primary h-0.5 w-6"></div>
        </div>
        <nav className={`${useClass} fixed top-0 left-0 w-full h-full z-40`} style={{ backgroundColor: '#ce6565' }}>
          <div className="menu mt-32 contain flex flex-col font-heading text-3xl tracking-wider items-end">
            <Link href="/" className={`mb-8 hover:text-white ${pathname === '/' ? 'text-white active' : 'text-offgray'}`} onClick={isActive ? toggleMobileMenu : null}>
              Home
            </Link>
            <Link href="/about" className={`mb-8 hover:text-white ${pathname === '/about' ? 'text-white active' : 'text-offgray'}`} onClick={isActive ? toggleMobileMenu : null}>
              About
            </Link>
            <Link href="/contact" className={`mb-8 hover:text-white ${pathname === '/contact' ? 'text-white active' : 'text-offgray'}`} onClick={isActive ? toggleMobileMenu : null}>
              Contact
            </Link>
            <a className="mb-8 text-offgray hover:text-white" href={'/ElifsResume.pdf'} target="_blank" rel="noopener noreferrer" onClick={isActive ? toggleMobileMenu : null}>
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
