//Purpose: Assembles the page/components .
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import About from "../components/About/About";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        title="Explore Hidden Nature Trails."
        subtitle="Travel Smarter."
        taglineHeading="Powered by AI."
        description="Plan eco-friendly adventures with AI-generated itineraries, live weather updates, interactive maps, and personalized travel recommendations."
        primaryButton="Start Exploring"
        secondaryButton="Learn More"
      />
      <Features />
      <About />
    </>
  );
}

export default Home;