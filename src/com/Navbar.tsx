"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
// import Link from "next/Link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);
  const navLinks = ["Home", "About", "schedule", "Ministries", "Contact"];

  useEffect(() => {
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setAtTop(y < 20);
        if (Math.abs(y - lastY.current) < 10) return;
        // show when scrolling up or near top
        setShowNavbar(y < lastY.current || y < 50);
        lastY.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${atTop ? "bg-white" : "bg-white/95 backdrop-blur shadow-sm"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 flex justify-center items-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <span className="font-bold text-gray-900 text-lg">
              HTTL. Khánh Hội
            </span>
          </Link>

          <div className="flex gap-8">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                href="/login"
                className="bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase}`}
              className="block text-gray-600 hover:text-gray-900 font-medium py-1"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}

          <Link
            href="/login"
            className="block bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg text-center mt-2"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
