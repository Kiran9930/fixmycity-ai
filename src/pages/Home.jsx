import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Features />
      <HowItWorks />
    </>
  );
}

export default Home;