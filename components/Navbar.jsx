'use client';

import { useState } from 'react'; // Move this import before the other imports

import Link from 'next/link';
import { motion } from 'framer-motion';

import { navVariants } from '../utils/motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="fixed top-0 left-0 w-full bg-blue-500 p-4 shadow-lg z-10"
    >
      <div className="container mx-auto flex items-center justify-between nav">
        <Link href="/" className="text-extrabold">
          ADLM <span className="sm:hidden">Studio</span>
        </Link>

        <ul className="flex space-x-6 li">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'}`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
