import HeroPage from '../components/ReUsable/HeroPage';
import NavigationPath from '../components/NavigationPath';
import ParagraphScroll from '../components/ParagraphScroll';
import WordScroll from '../components/WordScroll';
import CTA from '../components/CTA';

const About = () => {
  const firstText =
    "Créée en 2003, Geoconsulting est un bureau d’études et d’ingénierie indépendant spécialisé dans l’assainissement collectif, la gestion des eaux usées et pluviales et l’urbanisme opérationnel. L’entreprise intervient depuis plus de vingt ans auprès des collectivités territoriales, établissements publics, aménageurs et bureaux d’études pour accompagner la conception, la structuration et la fiabilisation des réseaux d’assainissement, dans le respect des cadres réglementaires et environnementaux en vigueur.";

  const secondText =
    "Geoconsulting s’appuie sur l’expertise de son fondateur, Manu Chao, expert en assainissement et techniques alternatives, maître d’œuvre et assistant à maîtrise d’ouvrage. Fort de plus de trente années d’expérience dans l’ingénierie publique, il a piloté ou accompagné des projets de grande ampleur portant sur la cartographie des réseaux, la gestion patrimoniale des infrastructures, la mise en conformité réglementaire et l’optimisation des systèmes d’assainissement. Son parcours lui confère une parfaite maîtrise des marchés publics, des procédures administratives et des contraintes opérationnelles propres aux territoires.";

  const thirdText =
    "Les missions de Geoconsulting couvrent l’ensemble du cycle de vie des réseaux d’assainissement : diagnostics techniques et fonctionnels, contrôles et relevés terrain, conception et mise à jour de plans en CAO / DAO, structuration et exploitation de bases de données SIG, assistance à la maîtrise d’ouvrage, maîtrise d’œuvre et accompagnement stratégique des maîtres d’ouvrage. L’entreprise intervient également sur les techniques alternatives de gestion des eaux pluviales, dans une logique de réduction des rejets, de protection des milieux aquatiques et de sécurisation durable des ouvrages.";

  const fourthText =
    "L’approche de Geoconsulting repose sur des principes forts : indépendance technique, fiabilité des données, conformité réglementaire et compréhension fine des enjeux locaux. Chaque projet est mené avec une exigence élevée de qualité, de traçabilité et de cohérence entre les études, le terrain et les outils cartographiques. Cette rigueur permet aux maîtres d’ouvrage de disposer de bases techniques solides pour décider, programmer et piloter leurs investissements en matière d’assainissement.";

  return (
    <div>
      <NavigationPath CurrentPage={'À propos'} className='px-4' />

      <HeroPage
        className='px-4'
        punchline='Bureau d’études en assainissement et ingénierie territoriale'
        title='Qui sommes-nous ?'
        paragraph={firstText}
        imgName='Fiche 23-1.JPG'
      />

      <WordScroll text={secondText} className='mt-12 mb-12 px-4 text-lg' />

      <div className='overflow-clip mx-4 rounded-2xl shadow-xl'>
        <img
          src='/images/DSC08610.JPG'
          alt='Geoconsulting – ingénierie et expertise en assainissement'
        />
      </div>

      <ParagraphScroll
        text={`${thirdText}\n\n${fourthText}`}
        className='mt-12 px-4 text-sm mb-20'
        startRatio={0.35}
        endRatio={0.85}
      />

      <div className='flex justify-center mb-20'>
        <CTA />
      </div>
    </div>
  );
};

export default About;
