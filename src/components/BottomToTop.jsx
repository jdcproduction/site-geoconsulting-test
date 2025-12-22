import { motion } from 'framer-motion';

const BottomToTop = ({ title, className }) => {
  const words = title.split(' ');

  return (
    <motion.h1>
      {words.map((word, i) => (
        <span key={i} className={`${className} inline-block overflow-hidden`}>
          <motion.span
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: i * 0.12,
            }}
            className='inline-block'
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

export default BottomToTop;
