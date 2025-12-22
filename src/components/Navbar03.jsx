import { Menu, X } from 'lucide-react';
import logoImg from './../assets/images/Logo/LOGO_normal_small.png';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar03 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'ACCUEIL', href: '' },
    { label: 'QUI SOMMES NOUS ?', href: 'about' },
    { label: 'SERVICES', href: 'services' },
    { label: 'CONTACT', href: 'contact' },
  ];

  return (
    <nav className='fixed w-full z-50 backdrop-blur-md bg-white/70 shadow-md'>
      <div className='flex justify-between items-center px-6 py-4 md:py-6'>
        {/* LOGO */}
        <img src={logoImg} className='max-h-12' alt='Logo' />

        {/* Desktop links */}
        <ul className='hidden md:flex flex-row gap-10 items-center text-bluegeo font-semibold text-base'>
          {navLinks.map((link) => (
            <li key={link.label} className='relative group'>
              <a
                href={`/${link.href}`}
                className='hover:text-bluemarine transition-colors duration-300'
              >
                {link.label}
              </a>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-bluemarine to-cyan-500 group-hover:w-full transition-all duration-300'></span>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className='md:hidden flex items-center'>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition'
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={isOpen ? 'x' : 'menu'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {isOpen ? <X className='text-bluegeo' size={28} /> : <Menu className='text-bluegeo' size={28} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile slide menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-40 backdrop-blur-lg bg-white/80 flex flex-col justify-center items-center md:hidden'
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.ul
              className='flex flex-col gap-8 text-2xl font-semibold text-bluegeo'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    exit: { opacity: 0, y: -20 },
                  }}
                >
                  <a
                    href={`/${link.href}`}
                    className='hover:scale-105 transition-transform duration-300'
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar03;
