import { useState } from "react";
import HeroPage from "../components/ReUsable/HeroPage";
import NavigationPath from "../components/NavigationPath";
import NotreMetier from "../../src/assets/images/NotreMetier.webp";
import PhotoFondateur from "../../src/assets/images/PhotoFondateur.webp";
import CTA from "../components/CTA";
import {
  Map,
  Droplets,
  Database,
  DraftingCompass,
  ShieldCheck,
  Users,
  Landmark,
  HardHat
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-montserrat text-gray-800">
      <div className="h-28" />
      <NavigationPath
        CurrentPage={"À propos"}
        className="px-4 max-w-6xl mx-auto gap-2 items-center"
      />

      {/* HERO */}
      <HeroPage
        className="px-4"
        punchline="Bureau d’études en assainissement depuis 2003"
        title="À propos"
        paragraph="GEO Consulting est un bureau d’études et d’ingénierie indépendant, spécialisé dans l’assainissement. Depuis plus de vingt ans, nous accompagnons les collectivités territoriales, aménageurs et bureaux d’études dans la conception, l’analyse et la mise en conformité des ouvrages."
        imgName="Fiche 23-1.webp"
      />

      {/* NOTRE METIER */}
      <section className="px-4 mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={NotreMetier}
          alt="Travaux et diagnostic terrain"
          className="rounded-xl shadow-md h-120"
        />
        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold mb-4 text-[var(--color-bluemarine)] flex items-center gap-2"
          >
            <HardHat size={28} /> Notre métier
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-base leading-relaxed"
          >
            GEO Consulting intervient sur l’ensemble du cycle de vie des réseaux
            d’assainissement, depuis le diagnostic technique et réglementaire
            jusqu’à la production de données cartographiques fiables et
            exploitables. L’entreprise apporte une expertise indépendante au
            service des maîtres d’ouvrage publics et privés.
          </motion.p>
        </div>
      </section>

      {/* DOMAINES D'EXPERTISE */}
      <section className="px-4 mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-[var(--color-bluegeo)]">
          Domaines d’expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExpertiseCard
            icon={<Droplets className="text-[var(--color-blueciel)]" />}
            title="Assainissement EU / EP"
            text="Études, diagnostics et conception des réseaux d’eaux usées et pluviales."
          />
          <ExpertiseCard
            icon={<Map className="text-[var(--color-bluegeo)]" />}
            title="Techniques alternatives"
            text="Gestion durable des eaux pluviales et réduction des rejets."
          />
          <ExpertiseCard
            icon={<DraftingCompass className="text-[var(--color-bluemarine)]" />}
            title="CAO / DAO"
            text="Production et mise à jour de plans techniques fiables et exploitables."
          />
          <ExpertiseCard
            icon={<Database className="text-[var(--color-yellowmars)]" />}
            title="SIG & données"
            text="Structuration, fiabilisation et exploitation des données patrimoniales."
          />
        </div>
      </section>

      {/* EXPERTISE TERRAIN */}
      <section className="px-4 mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={PhotoFondateur}
          alt="Réunion technique et ingénierie"
          className="rounded-xl shadow-md"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        />
        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold mb-4 text-[var(--color-bluemarine)] flex items-center gap-2"
          >
            <Landmark size={28} /> Une expertise issue du terrain
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-base leading-relaxed"
          >
            GEO Consulting s’appuie sur l’expérience de son fondateur, <br />
            Eric Di Carlo, expert en assainissement et techniques alternatives,
            maître d’œuvre et assistant à maîtrise d’ouvrage. Fort de plus de
            trente ans d’expérience, il a accompagné des collectivités
            territoriales, départements et opérateurs publics sur des projets
            structurants d’assainissement et de gestion patrimoniale.
          </motion.p>
          <button
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-bluemarine)] text-white hover:bg-opacity-90 transition"
          >
            Voir le CV
          </button>
        </div>
      </section>

      {/* VALEURS */}
      <section className="px-4 mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-[var(--color-bluegeo)]">
          Méthodologie & engagements
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            icon={<ShieldCheck className="text-[var(--color-bluemarine)]" />}
            title="Rigueur & conformité"
            text="Respect strict des normes, cadres réglementaires et exigences environnementales."
          />
          <ValueCard
            icon={<Users className="text-[var(--color-bluegeo)]" />}
            title="Accompagnement MOA"
            text="Appui technique et stratégique tout au long des projets."
          />
          <ValueCard
            icon={<Map className="text-[var(--color-bluemarine)]" />}
            title="Vision territoriale"
            text="Compréhension fine des enjeux locaux et opérationnels."
          />
        </div>
      </section>

      {/* CTA */}
      <div className="flex justify-center my-24">
        <CTA className="border rounded-full hover:bg-bluegeo hover:text-white" />
      </div>

      {/* MODAL CV */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 bg-white rounded-full px-3 py-1 shadow"
            >
              ✕
            </button>
            <iframe
              src="/pdf/testCV.pdf"
              className="w-full h-full"
              title="CV Eric Di Carlo"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Composants réutilisables
const ExpertiseCard = ({ icon, title, text }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
    className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
  >
    <div className="mb-4 text-2xl">{icon}</div>
    <h3 className="font-bold mb-2 text-[var(--color-bluemarine)]">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </motion.div>
);

const ValueCard = ({ icon, title, text }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeUp}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
    className="p-6 bg-[var(--color-blueciel)] rounded-xl text-center"
  >
    <div className="mb-4 text-2xl">{icon}</div>
    <h3 className="font-bold mb-2 text-[var(--color-bluemarine)]">{title}</h3>
    <p className="text-sm text-gray-700">{text}</p>
  </motion.div>
);

export default About;
