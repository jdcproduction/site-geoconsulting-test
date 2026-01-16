import { MapPinCheck, RefreshCcw, ScanLine ,Database} from 'lucide-react';
import { motion } from 'framer-motion';



const ServicesPresentation = ({mainTitle,params}) => {
  const lucideClassName="text-bluegeo w-auto h-12 sm:h-20"
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
    },
     {
      lucideElement: <Database className={lucideClassName}/>,
      h3:'Définition et Intégration',
      p:'Définition des modèles de données et intégration des données dans le SIG Client'
    }
    
  ]
  
  return (
    <div className='flex flex-col justify-around px-4 mb-14 bg-white sm:text-center sm:items-center sm:pb-12  sm:h-120'>
        <h2 className='text-center mb-10 text-4xl font-bold text-bluegeo sm:text-5xl'>{mainTitle}</h2>

        <div className='grid grid-cols-1 gap-4 text-base text-gray-700 sm:gap-12 sm:text-center + sm:grid-cols-4 max-w-6xl'>
          {infoService.map((e,i)=>{
            return (
              <motion.div 
              initial='hidden'
          whileInView='visible'
          variants={params}
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
export default ServicesPresentation