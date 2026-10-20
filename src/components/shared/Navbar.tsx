"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0B1120]/95 backdrop-blur-md">
      <nav className="container mx-auto flex min-h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-xl font-bold tracking-wide text-white sm:text-2xl"
        >
          MD. MAINUL<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/resume.pdf"
            download="Mainul_Resume.pdf"
            className="whitespace-nowrap rounded-lg border border-blue-500 px-4 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500 hover:text-white"
          >
            Download Resume
          </a>

          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg border border-gray-700 p-2 text-white transition-colors hover:border-blue-500 hover:text-blue-400 lg:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile/Tablet Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-800 bg-[#0B1120] px-4 pb-5 pt-3 sm:px-6 lg:hidden"
        >
          <div className="container mx-auto flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="/resume.pdf"
                download="Mainul_Resume.pdf"
                className="rounded-lg border border-blue-500 px-4 py-3 text-center text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500 hover:text-white"
              >
                Download Resume
              </a>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
