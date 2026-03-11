import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import DemoSection from "./components/DemoSection";
import WhySection from "./components/WhySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ComingSoon from "./components/ComingSoon";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative bg-white text-[#151A36] min-h-screen font-[Outfit] scroll-smooth overflow-x-hidden">
      <Header />
      <HeroSection />
      <DemoSection />
      <WhySection />
      <TestimonialsSection />
      <ComingSoon />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;