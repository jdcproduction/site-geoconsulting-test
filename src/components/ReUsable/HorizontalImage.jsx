import { motion } from "framer-motion"


const MotionFadeIn = {
  initial:'hidden',
  whileInView:'visible',
  viewport:{ once: true, amount: 0.2 },
  transition:{ duration: 0.8 }
};


const HorizontalImage = ({HorizontalImg,params}) => {
  return (
    <>
     {/* IMAGE FULL-WIDTH */}
      <motion.div
        variants={params}
       {...MotionFadeIn}
        className="relative h-[500px] rounded-4xl sm:h-[600px] w-full overflow-hidden mb-15 mt-15"
      >
        <img
          src={HorizontalImg}
          alt="Relevé terrain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
      </motion.div>
    </>
  )
}

export default HorizontalImage;