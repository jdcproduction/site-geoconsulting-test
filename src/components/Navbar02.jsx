import { Menu, X, ChevronRight } from 'lucide-react';
import logoImg from './../assets/images/Logo/LOGO_normal_small.png';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'ACCUEIL', href: '' },
    { label: 'QUI SOMMES NOUS ?', href: 'about' },
    { label: 'SERVICES', href: 'services' },
    { label: 'CONTACT', href: 'contact' },
  ];

  return (
    <nav className='relative bg-white shadow-md'>
      <div className='flex justify-between items-center px-6 py-4 md:py-6'>
        {/* LOGO */}
        <img src={logoImg} className='max-h-12' alt='Logo' />

        {/* Desktop links */}
        <ul className='hidden md:flex flex-row gap-10 items-center text-bluegeo font-semibold text-base'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`/${link.href}`}
                className='relative group hover:text-bluemarine transition-colors duration-300'
              >
                {link.label}
                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-bluemarine group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className='md:hidden flex items-center'>
          <motion.button onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={isOpen ? 'x' : 'menu'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='relative z-20'
              >
                {isOpen ? (
                  <X className='text-bluegeo' size={28} />
                ) : (
                  <Menu className='text-bluegeo' size={28} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile side panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed top-0 left-0 w-full h-screen z-10 
                       backdrop-blur-2xl bg-bluegeo/90 
                       flex items-center md:hidden'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          >
            <motion.ul
              className='w-full flex flex-col gap-6 px-10'
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
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                    exit: { opacity: 0, x: -40 },
                  }}
                >
                  <a
                    href={`/${link.href}`}
                    className='group flex justify-between items-center py-4 text-white text-xl font-semibold transition-all'
                  >
                    <span className='tracking-wide group-hover:translate-x-2 transition-all duration-300'>
                      {link.label}
                    </span>

                    <ChevronRight
                      className='opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300'
                      size={28}
                    />
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

export default Navbar02;
