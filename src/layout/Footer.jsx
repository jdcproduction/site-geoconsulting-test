import LogoWhite from '../assets/images/Logo/Logo_White.svg';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = ({ className }) => {
  const adressText = [
    { key: 'line1', text: '12 Avenue Maurice Thorez' },
    { key: 'line2', text: '94200 Ivry-Sur-Seine' },
    { key: 'line3', text: '451 142 715 00049' },
  ];

  const usefulLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'A propos', href: '/about' },
     { text: 'Nos services', href: '/services' },
    { text: 'Realisations', href: '/realisations' },
    { text: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { text: 'Mentions légales', href: '/mentions-legales' },
    { text: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { text: 'Plan du site', href: '/plan-du-site' },
  ];

  return (
    <motion.footer className={`relative overflow-hidden ${className}`}>
      {/* BACKGROUND ANIMÉ */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ['0% 50%', '50% 100%', '100% 50%', '50% 0%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(135deg, #0B79CA, #065A8F, #03243C)',
          backgroundSize: '300% 300%',
        }}
      />

      {/* CONTENU */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-white items-center">
        {/* LOGO + DESCRIPTION */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={LogoWhite} alt="Logo" className="w-36 h-auto" />
         
        </div>

        {/* ADRESSE / CONTACT */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1 text-white/80">
            {adressText.map((line) => (
              <li key={line.key}>{line.text}</li>
            ))}
          </ul>
        </div>

        {/* LIENS UTILES */}
       <div className="hidden md:flex flex-col items-start gap-2">
           <h4 className="font-semibold mb-2">Nos pages</h4>
           <ul className="text-sm space-y-1 text-white/80">
             {usefulLinks.map((link) => (
               <li key={link.href}>
                 <a href={link.href} className="hover:text-blue-300 transition-colors">
                   {link.text}
                 </a>
               </li>
             ))}
           </ul>
       </div>


        {/* RESEAUX SOCIAUX + LEGAL */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold mb-2">Suivez-nous</h4>
          <div className="flex gap-4">
            <a href="https://fr.linkedin.com/in/eric-di-carlo-7b82b9117" aria-label="LinkedIn">
              <Linkedin size={20} className="hover:text-blue-400 transition-colors" />
            </a>
          </div>

          <ul className="text-xs space-y-1 text-white/50 mt-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-white/50 py-4 border-t border-white/20">
        © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
      </div>
    </motion.footer>
  );
};

export default Footer;
