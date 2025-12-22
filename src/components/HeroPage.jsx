import { motion } from 'framer-motion';
import BottomToTop from './BottomToTop';

const HeroPage = ({ className, title, punchline, paragraph, imgName }) => {
  return (
    <div className={`${className} max-w-6xl mx-auto py-12`}>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-12'>
        {/* TEXTE */}
        <div className='md:w-1/2'>
          <motion.h4
            className='text-sm font-bold text-bluegeo'
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {punchline}
          </motion.h4>

          <BottomToTop
            title={title}
            className='text-3xl font-bold pt-4 text-bluemarine px-1'
          />

          <div className='overflow-hidden'>
            <motion.p
              className='pt-4 text-gray-700'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {paragraph}
            </motion.p>
          </div>
        </div>

        {/* IMAGE */}
        <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
          <div className='overflow-hidden rounded-4xl w-full h-[400px] md:h-[500px]'>
            <img
              src={`/images/${imgName}`}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroPage;
