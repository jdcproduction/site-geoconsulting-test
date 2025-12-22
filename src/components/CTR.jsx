import { ChevronRight } from "lucide-react";

const CTR = ({ className }) => {
  return (
    <button
      className={`group transition-all duration-300 ease-in-out  px-5 py-3 border rounded-full hover:bg-white hover:text-bluegeo ${className}`}
    >
      <a href='/realisations' className="flex items-center gap-2">
      Voir nos Réalisations
      <ChevronRight className="duration-300 ease-in-out group-hover:translate-x-0.5"/>
      </a>
    </button>
  );
};

export default CTR;
