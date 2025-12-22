import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WordScroll = ({ text, className }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.5', '-0.1 start'],
  });

  const wordSplit = text.split(' ');

  const wordSpan = wordSplit.map((word, i) => {
    const start = i / wordSplit.length;
    const end = start + 1 / wordSplit.length;

    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

    return (
      <div key={i} className='relative leading-tight'>
        {/*  Texte gris derrière */}
        <span className='absolute text-gray-200 px-1 select-none'>{word}</span>

        {/* 텍스트 animé */}
        <motion.span className='relative px-1' style={{ opacity }}>
          {word}
        </motion.span>
      </div>
    );
  });

  return (
    <motion.p
      ref={element}
      className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}
    >
      {wordSpan}
    </motion.p>
  );
};

export default WordScroll;
