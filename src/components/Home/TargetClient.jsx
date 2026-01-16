import { motion } from "framer-motion"
import { Circle } from "lucide-react"

const ClientList =[
  
  {client:'Collectivités territoriales'},
  {client:'Bureaux d’études techniques'},
  {client:'Exploitants de réseaux d’assainissement'},
  {client:'Aménageurs et maîtres d’ouvrage'}
];

const MotionFadeIn = {
  initial:'hidden',
  whileInView:'visible',
  viewport:{ once: true, amount: 0.2 },
  transition:{ duration: 0.8 }
};

 const TargetClient = ({params}) => {
  return (
    <>
    {/* CIBLES / SERVICES */}
      <motion.div
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-10 md:gap-25 lg:flex-row justify-around px-8 py-14 ">
          <motion.div className="flex flex-col"
         {...MotionFadeIn}
          variants={params}
          >
            <h2 className="font-bold text-4xl text-bluegeo mb-10">
              À qui s’adressent nos prestations ?
            </h2>
            <ul className="flex flex-col gap-3">
              {ClientList.map((e,index)=>{
                return (
                  <li className="flex items-center gap-3" key={index}>
                    <Circle size={6} className="bg-black rounded-full" /> 
                    {e.client}
                  </li>
                )
              })}
            </ul>
          </motion.div>

          <motion.div 
         {...MotionFadeIn}
          variants={params}
          className="max-w-120">
            <p>
              On accompagne les acteurs publics et privés dans la gestion de leurs réseaux d’assainissement. Grâce à notre expertise terrain et à nos outils numériques, nous assurons la fiabilité de vos données et la mise à jour de vos plans techniques.
            </p>
            <p>___</p>
            <p className="font-bold">Notre objectif : vous garantir des documents précis et exploitable.</p>
          </motion.div>
        </div>

      </motion.div>
    </>
  )
}

export default TargetClient;