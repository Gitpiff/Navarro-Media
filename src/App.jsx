import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/shared-components/Navbar";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-100">
        <Navbar />
        <div className="flex items-center justify-center p-8 font-instrument-serif text-5xl text-white">
          Navarro Media
        </div>
        <div className="flex items-center justify-center p-8 font-instrument-serif text-3xl text-white">
          Tu lo imaginas, nosotros lo creamos!
        </div>
      </div>
    </>
  );
};

export default App;
