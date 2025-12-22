import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import LogoNav from '../assets/images/Logo/LOGO_normal_small.png';

const Navbar = () => {
  const navLinks = [
    { label: 'ACCUEIL', href: '' },
    { label: 'QUI SOMMES NOUS ?', href: 'about' },
    { label: 'SERVICES', href: 'services' },
    { label: 'CONTACT', href: 'contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative'>
      {/* Header */}
      <div className='flex items-center justify-between h-20 px-8'>
        <img
          src={LogoNav}
          alt='logo_geoconsulting'
          className='max-h-11 w-auto'
        />
        {/*         <div className='text-2xl font-bold'>Logo</div>
         */}{' '}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center gap-2'
          aria-label='Toggle Menu'
        >
          MENU {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu déroulant */}
      <ul
        className={`
          flex flex-col overflow-hidden transition-all duration-300 ease-in-out
          ${
            isOpen
              ? 'max-h-80 opacity-100 pointer-events-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}
      >
        {navLinks.map((link) => (
          <li key={link.label} className='py-4 border-t border-gray-300'>
            <a
              href={`/${link.href}`}
              className='flex justify-between px-8 font-bold hover:text-bluegeo transition-colors'
            >
              <span>{link.label}</span>
              <ChevronRight />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
