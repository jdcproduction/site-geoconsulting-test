const CTA = ({ className }) => {
  return (
    <button
      className={`transition-all duration-300 ease-in-out mt-8 px-5 py-3 rounded-full ${className}`}
    >
      <a href='/contact'>Contactez nous</a>
    </button>
  );
};

export default CTA;
