import { motion } from 'framer-motion';

const BorderAnimation = ({ className }) => {
  return (
    <div className='px-4'>
      <div className={`${className} overflow-hidden w-full`}>
        <motion.div
          className='border-t border-dashed border-blue-200 w-[200%]'
          animate={{ x: [0, -window.innerWidth] }} // déplacer sur toute la largeur visible
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
};

export default BorderAnimation;
