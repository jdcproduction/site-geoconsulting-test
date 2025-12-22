import { ChevronRight } from 'lucide-react';

const NavigationPath = ({CurrentPage,className}) => {
  return (
     <div className={`text-xs flex flex-row  items-center gap-2 mb-4 mt-3 ${className} md:mt-4 `}>
        <a href="/">Accueil</a>
        <span>
          
          < ChevronRight size={12} />
        </span>
        <span>{CurrentPage}</span>
      </div>
  )
}

export default NavigationPath