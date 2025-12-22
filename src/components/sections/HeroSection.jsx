import MidJourney04 from '../../assets/images/Midjourney03.png';
import CTA from '../CTA';

const HeroSection = () => {
  return (
    <>
      <div className='relative'>
        <section className='*:w-full h-90 md:h-120 overflow-hidden'>
          <img
            src={MidJourney04}
            alt="Bassin de retention d'eau"
            className='w-full h-full object-cover object-center'
          />
        </section>

        <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] z-20'>
          <div className='bg-white text-center py-2 px-2'>
            <h1 className='font-extrabold text-xl md:text-2xl text-bluegeo'>
              Eau et assainissement
            </h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center py-6 px-4 md:mt-10'>
        <span className='font-montserrat '>
          Digitalisez vos plans urbains pour une gestion optimisée de
          l’assainissement
        </span>

        <CTA className=' border hover:bg-bluegeo hover:text-white'/>
      </div>
    </>
  );
};

export default HeroSection;