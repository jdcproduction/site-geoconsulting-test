import { motion } from 'framer-motion';
import CTR from '../CTR';
import BottomToTop from '../BottomToTop';
import Bassin from '../../assets/images/ExpertiseTerrain.webp';

const MotionFadeIn = {
  initial:'hidden',
  whileInView:'visible',
  viewport:{ once: true, amount: 0.2 },
  transition:{ duration: 0.8 }
};


const ServicePresentation = ({ title, text,params }) => {
  return (
<motion.div
        variants={params}
       {...MotionFadeIn}
>
  <section className="bg-bluegeo py-14">
    <div className="mx-auto max-w-6xl px-6">
      {/* GRID PRINCIPALE */}
      <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 ">
        {/* TITRE — centré sur les 2 colonnes */}
        <div className="sm:col-span-2 text-center">
          <BottomToTop title={title} className="text-4xl font-bold text-white sm:text-5xl"/>
        </div>

          {/* TEXTE */}
        <div className="flex flex-col gap-10 text-center sm:text-left">
          <p className="text-base text-white sm:text-base">
            {text}
          </p>
          <CTR className="max-w-60 bg-white text-bluegeo self-center" />
        </div>
        {/* IMAGE */}
        <div>
          <img src={Bassin} alt="Image d'un bassin" className="h-auto w-full max-w-md mx-auto sm:mx-0 rounded-3xl"/>
        </div>
      </div>
    </div>
  </section>
</motion.div>
    
  );
};

export default ServicePresentation;
