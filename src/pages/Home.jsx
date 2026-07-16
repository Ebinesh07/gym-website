import TopBar from "../components/TopBar/TopBar";

import Hero from "../components/Hero/Hero";
import Stats from "../components/StatsBar/Stats";
import Programs from "../components/Programs/Programs";
import SportsAcademy from "../components/SportsAcademy/SportsAcademy";
import Membership from "../components/Membership/Membership";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Counter from "../components/Counter/Counter";
// import Achievements from "../components/Achievements/Achievements";
import CTA from "../components/CTA/CTA";


function Home() {
  return (
    <>
      <TopBar />
      
      <Hero />
      <Stats />
      <Programs />
      <SportsAcademy />
      <Membership />
      <Testimonials />
      <Gallery />
      <Counter />
      {/* <Achievements /> */}
      <CTA />
      
    </>
  );
}

export default Home;