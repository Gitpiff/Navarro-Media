import ImageCarousel from "./ImageCarousel";

const Home = () => {
  return (
    <div className="flex items-center px-40 pt-20">
      <div className="flex flex-col items-center pr-4 font-instrument-serif text-2xl text-white">
        <div className="text-7xl leading-normal">
          Lleva tu negocio al siguiente nivel con diseño Web, apps, marketing y
          branding a tu medida. creamos soluciones digitales que generan
          resultados reales.
        </div>
        <div className="text-6xl m-8">¡Tú lo imaginas, nosotros lo creamos!</div>
        <button className="bg-slate-200 font-bold text-black p-4 rounded-md w-48 mt-28">
          Contáctanos
        </button>
      </div>
      <div className="flex-1">
        <ImageCarousel/>
      </div>
    </div>
  );
};

export default Home;
