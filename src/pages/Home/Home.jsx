import ImageCarousel from "./ImageCarousel";

const Home = () => {
  return (
    <div className="flex items-center h-[90%] px-40 pt-20 pb-48 bg-gradient-to-b from-black to-[#666666]">
      <div className="flex flex-col items-center pr-4 font-kantum text-2xl text-white">
        <div className="text-5xl ">
          Lleva tu negocio al siguiente nivel con diseño Web, apps, marketing y
          branding a tu medida. creamos soluciones digitales que generan
          resultados reales.
        </div>
        <div className="text-6xl m-8 font-bold">¡Tú lo imaginas, nosotros lo creamos!</div>
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
