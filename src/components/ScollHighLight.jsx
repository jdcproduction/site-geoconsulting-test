import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const ScrollHighlight = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        backgroundColor: '#0B79CA', // bg bleu géo
        color: '#FFFFFF', // texte blanc
        opacity: 1,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        backgroundColor: '#FFFFFF', // bg blanc
        color: '#0B3E63', // texte noir
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3, backgroundColor: '#FFFFFF', color: '#000000' }}
      animate={controls}
      className='flex w-full pt-8 pb-8 px-4 rounded-2xl'
    >
      {children}
    </motion.div>
  );
};

export default ScrollHighlight;
