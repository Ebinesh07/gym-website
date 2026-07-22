import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Gym from "./pages/Gym";
import SportsAcademy from "./pages/SportsAcademy";

import Contact from "./pages/Contact/Contact";

import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/sports-academy" element={<SportsAcademy />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;