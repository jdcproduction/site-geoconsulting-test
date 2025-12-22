import CTR from './CTR';
import BottomToTop from './BottomToTop';
import Bassin from '../assets/images/imgTest_bassin.png';

const Diapositive01 = ({ title, text }) => {
  return (
    <section className="bg-bluegeo py-12">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* GRID PRINCIPALE */}
        <div
          className="
            grid
            grid-cols-1
            gap-y-10
            sm:grid-cols-2 sm:gap-x-16
          "
        >
          {/* TITRE — centré sur les 2 colonnes */}
          <div className="sm:col-span-2 text-center">
            <BottomToTop
              title={title}
              className="
                text-4xl font-bold text-white
                sm:text-5xl
              "
            />
          </div>

          {/* TEXTE */}
          <div
            className="
              flex flex-col
              gap-6
              text-center
              sm:text-left
            "
          >
            <p className="text-xs text-white sm:text-base">
              {text}
            </p>
            <CTR className="max-w-60 bg-white text-bluegeo self-center" />
          </div>

          {/* IMAGE */}
          <div>
            <img
              src={Bassin}
              alt="Image d'un bassin"
              className="h-auto w-full max-w-md mx-auto sm:mx-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Diapositive01;
