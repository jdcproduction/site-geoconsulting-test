import IMG_ficheTerrain from '../assets/images/Fiche terrain.webp'
import IMG_BassinRetention from '../assets/images/Bassin_de_retention_pluviale_Paris.jpg'
import ExtraitSIG from '../assets/images/ExtraitSIG.webp'
import NavigationPath from '../components/NavigationPath';
import CTA from '../components/CTA';
import { div, img, text } from 'framer-motion/client';
import { ArrowRight } from 'lucide-react';


const Realisations = () => {
  const SolutionsLink = [{text:'Villes et les Collectivités',link:''},{text:'Industriels',link:''},{text:'Gestionnaires de bâtiments',link:''}]
  const VignetteImageV2 = [{title:'Titre 1',link:'',img:IMG_ficheTerrain},{title:'Titre 2',link:'',img:IMG_BassinRetention},{title:'Titre 3',link:'',img:ExtraitSIG}]
  const projets = [
    {
      id: 1,
      description:
        ' Intégration géographique globale, recensement des informations (documents techniques, recherche dans les dossiers d’archives, minutes "terrain", plans papiers, etc…)',
      imageUrl: IMG_ficheTerrain, 
      Tailwindclass:'w-800'
    },
    {
      id: 2,
      description:
        'Relevé topographique, création et mise en forme des informations graphiques essentielles à des fins techniques ou de communication.',
      imageUrl: IMG_BassinRetention,
            Tailwindclass:'w-800'

    },
    {
      id: 3,
      description:
        'Audit et mise à jour des bases SIG d’assainissement - Saisie des objets graphiques (regards, collecteurs, ouvrages hydrauliques, etc ...) et des données littérales associées.',
      imageUrl:ExtraitSIG,
            Tailwindclass:'w-800'

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
  
  
  
  {/* Vignettes V1 */}
    <h1>Version Vignette V1</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4'>
      {projets.map((proj) => (
        <div
          key={proj.id}
          className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col '>
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

    {/*Version vignette V2 */}
    <h1 className='mt-20'>Vignettes V2 (Version Véolia)</h1>
    <div className='px-8 h-auto py-25 bg-blue-100 w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4'>
      <div className='max-w-auto max-h-75  px-4 flex flex-col gap-8'>
        <h2 className='text-4xl'>Solutions à la une</h2>
        <h4 className='text-lg max-w-125'>Découvrez comment nos solutions vous accompagnent dans votre transformation écologique :</h4>
        <ul className='flex flex-col gap-2'>
          {SolutionsLink.map((e,index)=>{
            return (
                <>

                <li key={index} className='underline'><a href={e.link}>{e.text}</a></li>
                </>
                
            )
          })
          }
        </ul>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-6 md:gap-4 overflow-hidden">
  {VignetteImageV2.map((e, index) => (
    <div
      key={index}
      className="relative min-w-70 max-w-80 h-90 overflow-hidden rounded-lg group"
    >
      {/* Image */}
      <img
        src={e.img}
        alt=''
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Texte */}
    <div className="absolute bottom-4 right-4 flex flex-row gap-2 text-white">
  <ArrowRight size={30}/>
  <h3 className="text-xl font-semibold">{e.title}</h3>
</div>
    </div>
  ))}
</div>
    </div>



  </div>
  <div className='mt-16 text-center'>
    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Vous avez un projet ?</h2>
    <CTA className='bg-bluegeo text-white  hover:opacity-90'/>
  </div>
</div>
  );
};

export default Realisations;
