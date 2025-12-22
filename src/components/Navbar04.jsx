import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logoImg from './../assets/images/Logo/LOGO_normal_small.png';

const Navbar04 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'ACCUEIL', href: '' },
    { label: 'QUI SOMMES NOUS ?', href: 'about' },
    { label: 'SERVICES', href: 'services' },
    { label: 'CONTACT', href: 'contact' },
  ];

  return (
    <nav className="fixed top-6 w-full z-50">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex justify-center">
        <div className="flex items-center gap-6">

          {/* CAPSULE NAVBAR */}
          <div
            className="
              flex items-center gap-8 px-8 py-3
              rounded-full bg-blue-50
              shadow-lg
            "
          >
            {/* LOGO */}
            <img
              src={logoImg}
              alt="Logo"
              className="h-10 object-contain px-4"
            />

            {/* LINKS */}
            <ul className="flex items-center gap-8 text-bluemarine text-sm font-medium">
              {navLinks.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={`/${link.href}`}
                    className={`
                      px-4 py-2 rounded-full
                      transition-all duration-300
                      hover:bg-blue-100
                      ${index === 2
                        ? ''
                        : ''}
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ================= MOBILE BAR ================= */}
      <div className="
        md:hidden relative z-50
        flex justify-between items-center
        px-6 py-4
        bg-blue-50 rounded-full mx-4 backdrop-blur-md shadow-md
        border-bluegeo
      ">
        <img src={logoImg} className="h-10" alt="Logo" />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'x' : 'menu'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen
                ? <X size={28} className="text-bluegeo" />
                : <Menu size={28} className="text-bluegeo" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="
              fixed inset-0 z-40
              bg-white/80 backdrop-blur-lg
              flex flex-col justify-center items-center
            "
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.ul
              className="flex flex-col gap-8 text-2xl font-semibold text-gray-900"
              initial="hidden"
              animate="visible"
              exit="hidden"
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
                  }}
                >
                  <a
                    href={`/${link.href}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:scale-105 transition-transform duration-300"
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

export default Navbar04;
