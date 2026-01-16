
import { motion } from "framer-motion"

const MotionFadeIn = {
  initial:'hidden',
  whileInView:'visible',
  viewport:{ once: true, amount: 0.2 },
  transition:{ duration: 0.8 }
};

const WhySection = ({params}) => {
  return (
    <>
    <motion.div
        variants={params}
        {...MotionFadeIn}
        className="bg-blue-100 rounded-4xl px-4 py-14 flex flex-col gap-10 justify-around sm:items-center sm:text-center sm:pt-12 sm:pb-12 sm:h-120"
      >
        <h2 className="text-4xl text-center font-bold text-bluegeo sm:text-4xl">
          Des plans fiables pour des réseaux durables
        </h2>
        <p className="max-w-3xl px-4 text-bluemarine sm:text-base">
          La fiabilité des réseaux d’assainissement repose sur la qualité des données
          terrain et des documents techniques. Des plans obsolètes ou inexacts peuvent
          entraîner des erreurs d’exploitation, des non-conformités réglementaires
          et des impacts environnementaux.
        </p>
        <p className="text-bluemarine px-4 max-w-6xl sm:text-xl sm:font-semibold">
          GEO Consulting intervient pour sécuriser vos projets grâce à des relevés
          précis, une digitalisation rigoureuse et une mise à jour fidèle de vos plans
          d’assainissement.
        </p>
      </motion.div>
    </>
  )
}

export default WhySection