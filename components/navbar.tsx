"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const pathname = usePathname();

  const linkStyles = "text-lg font-medium transition-colors px-4 py-2 rounded-md";
  const activeStyles = "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400";
  const hoverStyles = "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400";

  return (
    <nav className="flex justify-center items-center w-full py-4">
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className={`${linkStyles} ${pathname === '/' ? activeStyles : hoverStyles}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${linkStyles} ${pathname === '/about' ? activeStyles : hoverStyles}`}
        >
          About
        </Link>
        <Link
          href="/experience"
          className={`${linkStyles} ${pathname === '/experience' ? activeStyles : hoverStyles}`}
        >
          Experience
        </Link>
        <Link
          href="/contact"
          className={`${linkStyles} ${pathname === '/contact' ? activeStyles : hoverStyles}`}
        >
          Contact
        </Link>
        <div className = {linkStyles}>
          <ModeToggle/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;