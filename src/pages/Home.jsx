import HeroSection from '../components/Home/HeroSection';
import PresentationSection from '../components/Home/PresentationSection';
import ServicesPresentation from '../components/Home/ServicesPresentation';
import ReleveTerrain from '../assets/images/DSC07446.webp';
import HorizontalImage from '../components/ReUsable/HorizontalImage'
import WhySection from '../components/Home/WhySection'
import TargetClient from '../components/Home/TargetClient'
import CtaSection from '../components/Home/CtaSection'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const Home = () => {
  const expertText = "Nous accompagnons les collectivités, bureaux d’études et opérateurs de réseaux dans la gestion et la fiabilité de données techniques. depuis le terrain aux données archivées, nous réalisons complémentairement des relevés topographiques, photographiques, minutes techniques de terrain. jusqu'au bureau, nous digitalisons, vectorisons et mettons à jour vos données dans vos SIG pour garantir des documents exploitables, conformes et à jour (SIG, CAD, PDF géoréférencés).";

  return (
    <div className="flex flex-col">

      {/* HERO */}
       <HeroSection params={fadeUp} />

      {/* EXPERTISE TERRAIN */}
      <PresentationSection title="Une expertise de terrain" text={expertText} params={fadeUp}/>

      {/* CIBLES / SERVICES */}
      <TargetClient params={fadeUp} />
      
      {/* PRESENTATION / SERVICES */}
      <ServicesPresentation mainTitle="Nos services" params={fadeUp} />

      {/* ENJEUX / POURQUOI */}
      <WhySection params={fadeUp}/>

      {/* IMAGE FULL-WIDTH */}
      <HorizontalImage HorizontalImg={ReleveTerrain} params={fadeUp}/>

      {/* CALL TO ACTION */}
      <CtaSection params={fadeUp}/>

    </div>
  );
};

export default Home;
