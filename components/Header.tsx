'use client';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Roboto, Montserrat } from 'next/font/google';
import { Menu, X } from 'lucide-react'; // Make sure lucide-react is installed

export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1a1a1a] text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/pizza.png" alt="Pizza Logo" className="w-10 h-10" />
          <p className={`${montserrat.className} text-xl text-yellow-300 font-semibold tracking-wide`}>
            CrustLab
          </p>
        </div>

        {/* Center: Desktop Nav */}
        <nav className={`${montserrat.className} hidden md:flex items-center gap-4 text-base font-medium mx-auto`}>
          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-full transition-colors duration-300 hover:bg-yellow-400/20 hover:text-yellow-300"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/orders"
            className="px-4 py-2 rounded-full transition-colors duration-300 hover:bg-yellow-400/20 hover:text-yellow-300"
          >
            Pizza Orders
          </Link>
        </nav>

        {/* Right: Desktop Logout & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Logout */}
          <button
            onClick={() => signOut()}
            className="hidden md:block px-4 py-2 rounded-xl bg-white/10 text-yellow-200 border border-yellow-300 
                       backdrop-blur-md hover:bg-yellow-300/20 hover:text-white hover:border-yellow-400 
                       transition-all duration-300 shadow-lg"
          >
            Logout
          </button>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 px-6 pb-4">
          <nav className={`${montserrat.className} flex flex-col gap-2 w-full`}>
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-2 rounded-full transition-colors duration-300 hover:bg-yellow-400/20 hover:text-yellow-300"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/orders"
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-2 rounded-full transition-colors duration-300 hover:bg-yellow-400/20 hover:text-yellow-300"
            >
              Pizza Orders
            </Link>
          </nav>
          <button
            onClick={() => {
              setIsOpen(false);
              signOut();
            }}
            className="w-full px-4 py-2 rounded-xl bg-white/10 text-yellow-200 border border-yellow-300 
                       backdrop-blur-md hover:bg-yellow-300/20 hover:text-white hover:border-yellow-400 
                       transition-all duration-300 shadow-lg"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
