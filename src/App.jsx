import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/shared-components/Navbar";
import Footer from "./pages/shared-components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-100">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
