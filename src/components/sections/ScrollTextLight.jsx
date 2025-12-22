import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const ScrollTextLight = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const controls = useAnimation();

  useEffect(() => {
     if (inView) {
      controls.start({
        color: '#FFFFFF', // texte blanc
        opacity: 1,
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({
        color: '#000000', // texte noir
        opacity: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3, color: '#000000' }}
      animate={controls}
      className=''
    >
      {children}
    </motion.div>
  );
};

export default ScrollTextLight;
