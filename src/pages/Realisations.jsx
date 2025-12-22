import IMG_egout from '../assets/images/egouts.webp'
import IMG_BassinRetention from '../assets/images/Bassin_de_retention_pluviale_Paris.jpg'
import Plan_Reseau from '../assets/images/plan_reseau_Audit.jpg'
import NavigationPath from '../components/NavigationPath';
import CTA from '../components/CTA';


const Realisations = () => {
  const projets = [
    {
      id: 1,
      titre: 'Vectorisation d’un réseau d’égouts séparatif',
      description:
        'Numérisation complète des plans d’égouts, levés terrain des regards, modélisation SIG des tronçons et des nœuds.',
      imageUrl: IMG_egout, 
    },
    {
      id: 2,
      titre: 'Cartographie d’un bassin de rétention pluvial',
      description:
        'Relevé topographique du bassin, modélisation des volumes, simulation du comportement hydrologique et intégration dans un SIG.',
      imageUrl: IMG_BassinRetention,
    },
    {
      id: 3,
      titre: 'Audit et mise à jour SIG pour une collectivité',
      description:
        'Mise à jour des bases SIG d’assainissement : création d’un modèle de données conforme aux standards métier, saisie des objets (regards, collecteurs, ouvrages hydrauliques).',
      imageUrl:Plan_Reseau,
    },
  ];

  return (
    <div className=' mb-20'>
       <div className='h-28'></div>


      {/* FIL D’ARIANE */}
      <NavigationPath CurrentPage="Services" className="px-4 max-w-6xl mx-auto gap-2 items-center " />
      <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className='text-3xl sm:text-4xl font-bold text-bluemarine mb-8 text-center'>
        Nos Réalisations
      </h1>
      <p className='text-gray-600 text-center mb-12 max-w-2xl'>
        Depuis notre création, nous avons accompagné de nombreux projets dans le
        domaine de l’assainissement : de la vectorisation de plans à la
        modélisation hydraulique, en passant par les relevés terrain et la
        cartographie SIG. Découvrez quelques exemples de réalisations
        ci-dessous.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4'>
        {projets.map((proj) => (
          <div
            key={proj.id}
            className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col '
          >
            {proj.imageUrl && (
              <div className='h-48 bg-gray-200 overflow-hidden'>
                <img
                  src={proj.imageUrl}
                  alt={proj.titre}
                  className='w-full h-full object-cover'
                />
              </div>
            )}
            <div className='p-6 flex-1 flex flex-col'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                {proj.titre}
              </h2>
              <p className='text-gray-600 flex-1'>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      </div>
      

      
      <div className='mt-16 text-center'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Vous avez un projet ?
        </h2>
        <p className='text-gray-600 mb-6 max-w-md mx-auto'>
          Que ce soit pour un audit SIG, un relevé terrain ou la modélisation
          d’un bassin, nous pouvons vous accompagner de A à Z.
        </p>
       <CTA className='bg-bluegeo text-white  hover:opacity-90'/>
      </div>
    </div>
  );
};

export default Realisations;
