import { motion } from 'framer-motion';
import PhotoAccueil from '../../assets/images/Accueil.webp';
import CTA from '../CTA';

const MotionFadeIn = {
  initial:'hidden',
  whileInView:'visible',
  viewport:{ once: true, amount: 0.2 },
  transition:{ duration: 0.8 }
};

const HeroSection = ({params}) => {
  return (
<>
<motion.div variants={params} {...MotionFadeIn} >
  <div className='relative'>
    <section className='*:w-full h-90 md:h-120 overflow-hidden'>
        <img src={PhotoAccueil} alt="Bassin de retention d'eau" className='w-full h-full object-cover object-top'/>
    </section>
    <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] z-20'>
      <div className='bg-white text-center py-2 px-2'>
        <h1 className='font-extrabold text-xl md:text-2xl text-bluegeo'>
          Système d'information géographique et <br/> Ingénierie de l'assainissement
        </h1>
      </div>
    </div>
  </div>
  <div className='flex flex-col items-center py-10 px-4 md:text-center md:py-12 md:gap-2 md:px-18'>
    <span className='font-montserrat '>
      Apporter aux maîtres d’œuvres et gestionnaires les méthodes et les techniques pour optimiser la gestion de leur patrimoine.
    </span>
    <CTA className=' border hover:bg-bluegeo hover:text-white'/>
  </div>
</motion.div>      
</>
  );
};

export default HeroSection;