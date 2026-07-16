import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Programs from "../components/Programs/Programs";
import SportsAcademy from "../components/SportsAcademy/SportsAcademy";
import Membership from "../components/Membership/Membership";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Counter from "../components/Counter/Counter";
import Achievements from "../components/Achievements/Achievements";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <SportsAcademy />
      <Membership />
      <Testimonials />
      <Gallery />
      <Counter />
      <Achievements />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;