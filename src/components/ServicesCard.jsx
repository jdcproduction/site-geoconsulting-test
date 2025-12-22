import BorderAnimation from "./BorderAnimation";
import ScrollHighlight from "./ScollHighLight";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ServicesCard = () => {
    const CardsAbout = [
  {
    cardTitle: 'Analyse initiale',
    cardNumber: '01',
    cardText: " Étude des documents existants, compréhension du périmètre d’intervention et des contraintes techniques et réglementaires."
  },
  {
    cardTitle: 'Intervention terrain',
    cardNumber: '02',
    cardText: "Relevés, inspections, prises de vues et localisation précise des ouvrages et réseaux existants."
  },
  {
    cardTitle: 'Traitement DAO / SIG',
    cardNumber: '03',
    cardText: "Vectorisation, structuration des données et mise à jour des plans selon les standards en vigueur."
  },
  {
    cardTitle: 'Livraison & contrôle',
    cardNumber: '04',
    cardText: "Vérification, cohérence des livrables et transmission de documents directement exploitables."
  }
];
  return (
    <motion.div className='pt-8'
       initial='hidden'
          whileInView='visible'
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
    >
        {CardsAbout.map((card)=>{
          return (
            <div key={card.cardTitle}>
            <BorderAnimation className='' />
            <ScrollHighlight>
              <div className='w-full'>
                 <div className='h-32 flex flex-col justify-between'>
                    <div className='flex flex-row justify-between'>
                      <h2 className='text-3xl font-bold'>{card.cardTitle}</h2>
                      <h1 className='text-3xl text-white font-bold'>{card.cardNumber}</h1>
                    </div>
                    <div className='text-base text-white'>
                      {card.cardText}
                   </div>
                  </div>
               </div>
            </ScrollHighlight>
          </div>
          )
        })}
      </motion.div>
  )
}
export default ServicesCard