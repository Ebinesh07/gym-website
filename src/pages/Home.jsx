import Hero from "../components/Hero/Hero";
import About from "./About/About";
import Stats from "../components/StatsBar/Stats";
import Programs from "../components/Programs/Programs";
import SportsAcademy from "../components/SportsAcademy/SportsAcademy";
import Membership from "../components/Membership/Membership";


import Contact from "./Contact/Contact";
import CTA from "../components/CTA/CTA";
import Fees from "./Fees/Fees";



function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Fees />
      <Stats />
      <Programs />
      <SportsAcademy />
      <Membership />
      
    
      <CTA />
    </>
  );
}

export default Home;