import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParagraphScroll = ({ children, className, startRatio, endRatio }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'start start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [startRatio, endRatio],
    [0, 1]
  );

  return (
    <motion.div ref={element} className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
};

export default ParagraphScroll;
