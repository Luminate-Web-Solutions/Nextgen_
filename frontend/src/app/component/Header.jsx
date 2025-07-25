'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // optional icons for toggle

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FFF2E4] shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold text-black">
          <img src="/Logo.jpg" alt="Logo" className="h-14 w-auto" />
          NEXTGEN DYNAMIX
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/service" className="text-gray-700 hover:text-black">Services</Link>
          <Link
            href="/contact"
            className="bg-[#5B3D1B] text-white px-4 py-2 rounded hover:bg-[#3c2a13] transition"
          >
            Connect
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#3b240b]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center">
          <Link href="/" className="block text-gray-700 hover:text-black">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-black">About</Link>
          <Link href="/service" className="block text-gray-700 hover:text-black">Services</Link>
          <Link
            href="/contact"
            className="inline-block bg-[#5B3D1B] text-white px-4 py-2 rounded hover:bg-[#3c2a13] transition"
          >
            Connect
          </Link>
        </div>
      )}
    </header>
  );
}
