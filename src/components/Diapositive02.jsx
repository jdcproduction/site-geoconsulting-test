import { MapPinCheck, RefreshCcw, ScanLine } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Diapositive02 = ({mainTitle}) => {
  const lucideClassName="text-bluegeo w-auto h-9 sm:h-20 mt-1"
  const infoService = [
    {lucideElement:<MapPinCheck className={lucideClassName} />,
    h3:'Relevés terrain',
    p:'Inspections, photos et géolocalisation des ouvrages pour établir un état précis des réseaux.'
    },
    {
      lucideElement:<ScanLine className={lucideClassName}/>,
      h3:'Digitalisation de plans',
      p:'Vectorisation de vos plans existants (PDF, DWG, SHP…) pour une exploitation claire et moderne.'
    },
    {
      lucideElement: <RefreshCcw className={lucideClassName}/>,
      h3:'Mise à jour & corrections',
      p:'Révision des plans selon les informations collectées sur le terrain pour garantir leur exactitude.'
    }
    
  ]

  
  return (
    <div className='flex flex-col justify-around p-4 bg-white h-96 sm:text-center sm:items-center sm:pb-12  sm:h-120'>
        <h2 className='text-3xl font-bold text-bluegeo sm:text-5xl'>{mainTitle}</h2>

        <div className='grid grid-cols-1 gap-4 text-sm text-gray-700 sm:gap-12 sm:text-center sm:grid-cols-3 max-w-6xl'>
          {infoService.map((e,i)=>{
            return (
              <motion.div 
              initial='hidden'
          whileInView='visible'
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
              className='flex items-start gap-3 sm:text-base' key={i}>
                  {e.lucideElement}
                  <div>
                   <h3 className='font-bold text-bluegeo sm:text-xl'>{e.h3}</h3>
                   <p>
                   {e.p}
                   </p>
                  </div>
              </motion.div>
            )
          })}

        </div>
      </div>
  )
}
export default Diapositive02