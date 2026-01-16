import { motion } from "framer-motion"

const MotionFadeIn = {
  initial:'hidden',
  whileInView:'visible',
  viewport:{ once: true, amount: 0.2 },
  transition:{ duration: 0.8 }
};

const CtaSection = ({params}) => {
  return (
    <>
    <motion.div
        variants={params}
       {...MotionFadeIn}
        className="px-4 mb-24 flex flex-col items-center text-center"
      >
        <div className="bg-blue-100 py-14 px-4 rounded-2xl flex flex-col items-center gap-10 md:px-20">
          <h2 className="text-3xl font-bold text-bluegeo">
           Un projet, un besoin, une mise à jour de vos données ?
          </h2>
          <p className="text-gray-700 max-w-xl">
            Contactez Eric Di Carlo pour échanger sur votre projet et bénéficier
            d’un accompagnement technique adapté à vos enjeux.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-bluegeo text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Nous contacter
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default CtaSection