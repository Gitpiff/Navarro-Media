import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/shared-components/Navbar";
import Footer from "./pages/shared-components/Footer";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* <div className="min-h-screen bg-gradient-to-b from-black to-[#666666]">
        </div> */}
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
