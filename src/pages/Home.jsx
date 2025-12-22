
import { motion } from "framer-motion";

import HeroSection from '../components/sections/HeroSection';
import Diapositive01 from '../components/Diapositive01';
import Diapositive02 from '../components/Diapositive02';
import ReleveTerrain from '../assets/images/DSC07446.JPG';
import { Circle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const expertText =
    "Nous accompagnons les collectivités, bureaux d’études et opérateurs de réseaux dans la gestion et la fiabilité de leurs infrastructures d’assainissement. Sur le terrain, nous réalisons des relevés photographiques, techniques et géolocalisés. Au bureau, nous digitalisons, vectorisons et mettons à jour vos plans pour garantir des documents exploitables, conformes et à jour (SIG, CAD, PDF géoréférencés).";

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      {/* EXPERTISE TERRAIN */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Diapositive01 title="Une expertise de terrain" text={expertText} />
      </motion.div>

      {/* CIBLES / SERVICES */}
      <motion.div
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-10 md:gap-25 lg:flex-row justify-around px-8 pt-20 ">
          <motion.div className="flex flex-col gap-4"
          initial='hidden'
          whileInView='visible'
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-3xl text-bluegeo">
              À qui s’adressent nos prestations ?
            </h2>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <Circle size={6} className="bg-black rounded-full" /> Collectivités territoriales
              </li>
              <li className="flex items-center gap-2">
                <Circle size={6} className="bg-black rounded-full" /> Bureaux d’études techniques
              </li>
              <li className="flex items-center gap-2">
                <Circle size={6} className="bg-black rounded-full" /> Exploitants de réseaux d’assainissement
              </li>
              <li className="flex items-center gap-2">
                <Circle size={6} className="bg-black rounded-full" /> Aménageurs et maîtres d’ouvrage
              </li>
            </ul>
          </motion.div>

          <motion.div 
          initial='hidden'
          whileInView='visible'
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-120">
            <p>
              On accompagne les acteurs publics et privés dans la gestion de leurs réseaux d’assainissement. Grâce à notre expertise terrain et à nos outils numériques, nous assurons la fiabilité de vos données et la mise à jour de vos plans techniques.
            </p>
            <p>___</p>
            <p className="font-bold">Notre objectif : vous garantir des documents précis et exploitable.</p>
          </motion.div>
        </div>

        <Diapositive02 mainTitle="Nos services" />
      </motion.div>

      {/* ENJEUX / POURQUOI */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-blue-100 rounded-4xl px-6 py-12 flex flex-col gap-6 justify-around sm:items-center sm:text-center sm:pt-12 sm:pb-12 sm:h-120"
      >
        <h2 className="text-3xl font-bold text-bluegeo sm:text-4xl">
          Des plans fiables pour des réseaux durables
        </h2>
        <p className="max-w-3xl text-bluemarine sm:text-base">
          La fiabilité des réseaux d’assainissement repose sur la qualité des données
          terrain et des documents techniques. Des plans obsolètes ou inexacts peuvent
          entraîner des erreurs d’exploitation, des non-conformités réglementaires
          et des impacts environnementaux.
        </p>
        <p className="text-bluemarine max-w-6xl sm:text-xl sm:font-semibold">
          Geoconsulting intervient pour sécuriser vos projets grâce à des relevés
          précis, une digitalisation rigoureuse et une mise à jour fidèle de vos plans
          d’assainissement.
        </p>
      </motion.div>

      {/* IMAGE FULL-WIDTH */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative h-[500px] rounded-4xl sm:h-[600px] w-full overflow-hidden mb-15 mt-15"
      >
        <img
          src={ReleveTerrain}
          alt="Relevé terrain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
      </motion.div>

      {/* CALL TO ACTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="px-6 mb-20 flex flex-col items-center gap-4 text-center"
      >
        <div className="bg-blue-100 p-12 rounded-2xl flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold text-bluegeo">
            Un projet, un besoin, une mise à jour de vos plans ?
          </h2>
          <p className="text-gray-700 max-w-xl">
            Contactez Mano Consulting pour échanger sur votre projet et
            bénéficier d’un accompagnement technique adapté à vos enjeux.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-bluegeo text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Nous contacter
          </a>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;
