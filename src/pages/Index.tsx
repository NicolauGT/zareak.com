
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Therapist from "../components/Therapist";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Therapist />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
