const Navbar = () => {
  return (
    <nav className="flex justify-around py-8 items-center font-kantum text-3xl font-bold text-white bg-black h-30 border-b-2">
      <div className="w-40">
        <img src="assets/logo.png" />
      </div>
      <button className="hover:text-red-700 hover:border-b-2">Home</button>
      <button className="hover:text-red-700 hover:border-b-2">Servicios</button>
      <button className="hover:text-red-700 hover:border-b-2">Nosotros</button>
      <button className="hover:text-red-700 hover:border-b-2">Contacto</button>

      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
};

export default Navbar;
