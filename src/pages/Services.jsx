import ServicesCard from '../components/ServicesCard';
import HeroPage from "../components/ReUsable/HeroPage";
import NavigationPath from '../components/NavigationPath';
import { Award, PencilRuler, Pickaxe, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const firstText =
    "Geo Consulting accompagne les collectivités, bureaux d’études et exploitants dans la gestion technique des réseaux d’assainissement. Nos interventions visent à fiabiliser les données terrain, sécuriser les projets et garantir des plans conformes aux exigences réglementaires et opérationnelles.";

  return (
    <div className="">
            <div className='h-28'></div>


      {/* FIL D’ARIANE */}
      <NavigationPath CurrentPage="Services" className="px-4 max-w-6xl mx-auto gap-2 items-center " />

      {/* HERO */}
      <HeroPage
        className="px-4 md:mb-25"
        title="Nos services"
        punchline="Expertise technique au service des réseaux d’assainissement"
        paragraph={firstText}
        imgName="NosServices.webp"
      />

      {/* Conteneur central pour les sections */}
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:gap-25">

        {/* CONTEXTE & ENJEUX */}
        <section className="bg-white flex flex-col gap-6">
          <motion.h2 className="text-3xl font-extrabold text-[var(--color-bluemarine)] flex items-center gap-2"
          initial='hidden'
          whileInView='visible'
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          >
            <Pickaxe size={28}/> Les enjeux
          </motion.h2>

          <p className="text-gray-700 text-base">
            Les réseaux d’assainissement constituent des infrastructures critiques.
            Leur exploitation repose sur des données fiables, à jour et correctement
            structurées. Des plans imprécis ou obsolètes peuvent engendrer des erreurs
            d’intervention, des surcoûts de travaux, voire des non-conformités
            réglementaires.
          </p>

          <p className="text-gray-700 text-base">
            Geo Consulting intervient pour sécuriser ces enjeux en assurant la
            continuité entre la réalité du terrain et les outils numériques utilisés
            par les acteurs de l’assainissement.
          </p>
        </section>

        {/* SERVICES DETAILLES */}
        <div className="w-full">
          <ServicesCard />
        </div>

       
        {/* CADRE RÉGLEMENTAIRE */}
        <section className="bg-white p-8 flex flex-col gap-6">
          <motion.h2 className="text-3xl font-extrabold text-[var(--color-bluemarine)] flex items-center gap-2"
          initial='hidden'
          whileInView='visible'
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}>
            <Scale size={28 }/> Le cadre réglementaire
          </motion.h2>

          <p className="text-gray-700 text-base">
            Nos prestations s’inscrivent dans le respect des obligations liées
            à l’assainissement collectif, aux diagnostics de raccordement et aux
            exigences des services publics d’assainissement.
          </p>

          <p className="text-gray-700 text-base">
            Nous travaillons en cohérence avec les normes et pratiques en vigueur
            afin de produire des documents utilisables dans le cadre de contrôles,
            d’études, de travaux ou de mises en conformité.
          </p>
        </section>

        {/* LIVRABLES */}
        {/* LIVRABLES */}
<section className="bg-white p-8 flex flex-col gap-6">
  <motion.h2
    className="text-3xl font-extrabold text-[var(--color-bluemarine)] flex items-center gap-2"
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <PencilRuler size={28} />
    Des livrables fiables, lisibles et immédiatement exploitables
  </motion.h2>

  <ul className="text-sm text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4 leading-relaxed">
    <li>
      <strong>Plans DAO et SIG structurés</strong>, conformes aux standards métiers
      et intégrables dans vos outils existants.
    </li>
    <li>
      <strong>Plans PDF géoréférencés</strong>, clairs et précis, facilitant
      l’exploitation terrain et la communication entre acteurs.
    </li>
    <li>
      <strong>Bases de données réseaux mises à jour</strong>, fiables et cohérentes,
      pour une vision exhaustive de vos infrastructures.
    </li>
    <li>
      <strong>Dossiers techniques complets</strong>, pensés pour le suivi,
      la maintenance et l’évolution de vos réseaux.
    </li>
  </ul>
</section>


       {/* BÉNÉFICES */}
<section className="bg-white p-8 flex flex-col gap-6">
  <motion.h2
    className="text-3xl font-extrabold text-[var(--color-bluemarine)] flex items-center gap-2"
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <Award size={28} />
    Des bénéfices concrets pour la réussite de vos projets
  </motion.h2>

  <ul className="text-sm text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4 leading-relaxed">
    <li>
      <strong>Réduction significative des risques</strong> d’erreur,
      d’endommagement de réseaux et de reprises de travaux.
    </li>
    <li>
      <strong>Maîtrise accrue de l’existant</strong>, essentielle pour anticiper,
      planifier et sécuriser les interventions.
    </li>
    <li>
      <strong>Aide à la décision fiable</strong>, grâce à des données précises
      pour les études, les travaux et l’aménagement.
    </li>
    <li>
      <strong>Conformité réglementaire renforcée</strong>, répondant aux exigences
      DT/DICT et aux obligations des gestionnaires de réseaux.
    </li>
  </ul>
</section>


      </div>

      {/* CTA FINAL */}
      <section className="w-full px-6 py-16 bg-bluegeo text-white flex flex-col items-center gap-4 text-center mt-12">
        <h2 className="text-3xl font-bold">
          Besoin d’un accompagnement technique ?
        </h2>

        <p className="text-sm max-w-xl">
          Eric Di Carlo vous accompagne dans la fiabilisation et la mise à jour de vos réseaux
        </p>
        <CTA className='bg-white text-bluegeo  hover:opacity-90'/>
      </section>

    </div>
  );
};

export default Services;
