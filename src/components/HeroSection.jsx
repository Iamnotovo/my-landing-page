import mascot from "../assets/hero/mascot.png";
import books from "../assets/hero/books_icon.png";
import notebook from "../assets/hero/notebook_icon.png";
import pen from "../assets/hero/pen_icon.png";
import ruler from "../assets/hero/ruler_icon.png";
import rainbow from "../assets/hero/right_rainbow.png";
import circle from "../assets/hero/violet_circle.png";
import leftRainbow from "../assets/hero/left_rainbow.png";
import goToLogo from "../assets/shared/go_to_logo.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useState } from "react";

function HeroSection() {
  const [mainTextRef, mainTextVisible] = useScrollAnimation();
  const [mascotRef, mascotVisible] = useScrollAnimation();
  const [rainbowsVisible, setRainbowsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if we're on mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Check if hero section is in view on mount
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      const rect = heroElement.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        // If hero is in view, show rainbows with animation
        setRainbowsVisible(true);
      } else {
        // If hero is not in view, show rainbows immediately (animation already "done")
        setRainbowsVisible(true);
      }
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-[#151A36] text-white overflow-hidden">
      {/* Mobile/Tablet Layout */}
      <div className="xl:hidden relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden">
        {/* Floating Icons - Responsive sizing */}
        <img 
          src={pen} 
          alt="pen" 
          className="absolute w-[36px] sm:w-[44px] md:w-[48px] lg:w-[52px] h-auto z-10 animate-float opacity-80" 
          style={{
            top: 'calc(50% - 60px)',
            left: 'calc(50% - 140px)',
            animationDelay: '0.5s'
          }} 
        />
        <img 
          src={ruler} 
          alt="ruler" 
          className="absolute w-[36px] sm:w-[44px] md:w-[48px] lg:w-[52px] h-auto z-10 animate-float opacity-80" 
          style={{
            top: 'calc(50% - 60px)',
            left: 'calc(50% + 100px)',
            animationDelay: '1s'
          }} 
        />
        <img 
          src={notebook} 
          alt="notebook" 
          className="absolute w-[36px] sm:w-[44px] md:w-[48px] lg:w-[52px] h-auto z-10 animate-float opacity-80" 
          style={{
            top: 'calc(50% + 140px)',
            left: 'calc(50% - 140px)',
            animationDelay: '1.5s'
          }} 
        />
        <img 
          src={books} 
          alt="books" 
          className="absolute w-[36px] sm:w-[44px] md:w-[48px] lg:w-[52px] h-auto z-10 animate-float opacity-80" 
          style={{
            top: 'calc(50% + 140px)',
            left: 'calc(50% + 100px)',
            animationDelay: '2s'
          }} 
        />

        {/* Main Text - Mobile */}
        <div 
          ref={mainTextRef}
          className={`text-center mb-8 z-20 transition-all duration-700 ${
            isMobile || mainTextVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-semibold leading-[1.2] text-[28px] sm:text-[40px] mb-6">
            Study the patterns, beat
            <br />
            the system - AceDiploma,
            <br />
            <span className="text-[#FF6878]">play your cards right!</span>
          </h1>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-[#8980F5] px-6 py-3 h-12 text-white font-medium hover:brightness-110 transition">
            Start Practicing
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <img src={goToLogo} alt="Go" className="w-4 h-4 brightness-0" />
            </div>
          </button>
        </div>

        {/* Mascot - Mobile/Tablet */}
        <img 
          ref={mascotRef}
          src={mascot} 
          alt="AceDiploma Mascot" 
          className={`w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto z-20 transition-all duration-800 ${
            isMobile || mascotVisible ? 'animate-fadeInScale animate-floatBig' : 'opacity-0 scale-90'
          }`} 
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:block relative mx-auto min-h-[900px] px-6 sm:px-10 lg:px-16 xl:px-0 w-full max-w-[1440px]">
        {/* Left Rainbow - Hidden on smaller desktop screens */}
        <img 
          src={leftRainbow} 
          alt="left rainbow" 
          className={`hidden xl:block absolute top-[340px] left-[-70px] transition-all duration-1000 ${
            rainbowsVisible ? 'animate-slideInLeft animate-pulseSoft' : 'opacity-0 -translate-x-full'
          }`} 
        />

        {/* Main Text - Bigger when rainbows hidden */}
        <div 
          ref={mainTextRef}
          className={`absolute left-2 sm:left-8 lg:left-[48px] xl:left-[151px] top-[180px] sm:top-[240px] xl:top-[290px] w-full max-w-[700px] lg:max-w-[800px] xl:max-w-[604px] z-20 transition-all duration-700 ${
            mainTextVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-semibold leading-[1.2] text-[36px] sm:text-[44px] lg:text-[48px] xl:text-[52px]">
            Study the patterns, beat
            <br className="hidden sm:block" />
            the system - AceDiploma,
            <br />
            <span className="text-[#FF6878]">play your cards right!</span>
          </h1>
          <button className="mt-6 sm:mt-8 xl:mt-[42px] inline-flex items-center gap-2 rounded-2xl bg-[#8980F5] px-5 py-2.5 h-12 text-white font-medium hover:brightness-110 transition">
            Start Practicing
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <img src={goToLogo} alt="Go" className="w-4 h-4 brightness-0" />
            </div>
          </button>
        </div>

        {/* Bee and Background Elements - All move together */}
        <div className="absolute right-6 sm:right-12 lg:right-[60px] xl:left-[853px] xl:right-auto top-[80px] sm:top-[120px] xl:top-[140px] w-[240px] sm:w-[300px] lg:w-[340px] xl:w-[386px] h-auto">
          {/* Violet Circle - Behind the bee, above the right rainbow */}
          <img 
            src={circle} 
            alt="background circle" 
            className="absolute top-[110px] sm:top-[110px] lg:top-[95px] xl:top-[110px] left-[25px] sm:left-[25px] lg:left-[15px] xl:left-[25px] w-[240px] sm:w-[280px] lg:w-[300px] xl:w-[322px] h-auto z-20 animate-pulsePop" 
          />

          {/* Big and Small Border Circles - Behind right rainbow and icons */}
          <div className="absolute top-[20px] left-[-63px] w-[350px] sm:w-[400px] lg:w-[450px] xl:w-[505px] h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[505px] rounded-full border border-white/20 animate-rotateSlow z-0" />
          <div className="absolute top-[60px] left-[-20px] w-[280px] sm:w-[320px] lg:w-[370px] xl:w-[411px] h-[280px] sm:h-[320px] lg:h-[370px] xl:h-[411px] rounded-full border border-white/20 animate-rotateSlow z-0" />

          {/* Mascot - Front (make positioned so z-index applies) */}
          <img 
            ref={mascotRef}
            src={mascot} 
            alt="AceDiploma Mascot" 
            className={`relative w-full h-auto z-50 will-change-transform transition-all duration-800 ${
              mascotVisible ? 'animate-fadeInScale animate-floatBig' : 'opacity-0 scale-90'
            }`} 
          />

          {/* Icons */}
          <img src={pen} alt="pen" className="absolute top-[340px] left-[-66px] w-[40px] sm:w-[48px] lg:w-[56px] xl:w-[66px] h-auto z-30 animate-float" style={{animationDelay: '0.2s'}} />
          <img src={ruler} alt="ruler" className="absolute top-[60px] left-[-17px] w-[40px] sm:w-[48px] lg:w-[56px] xl:w-[66px] h-auto z-30 animate-float" style={{animationDelay: '0.6s'}} />
          <img src={notebook} alt="notebook" className="absolute top-[40px] left-[341px] w-[40px] sm:w-[48px] lg:w-[56px] xl:w-[66px] h-auto z-30 animate-float" style={{animationDelay: '1s'}} />
          <img src={books} alt="books" className="absolute top-[440px] left-[298px] w-[40px] sm:w-[48px] lg:w-[56px] xl:w-[66px] h-auto z-30 animate-float" style={{animationDelay: '1.4s'}} />
        </div>

        {/* Right Rainbow - Behind violet circle, above grey circles */}
        <img 
          src={rainbow} 
          alt="rainbow" 
          className={`hidden xl:block absolute top-[310px] left-[1166px] w-[508px] h-[218px] z-10 transition-all duration-1000 ${
            rainbowsVisible ? 'animate-slideInRight animate-pulseSoft' : 'opacity-0 translate-x-full'
          }`} 
        />
      </div>
    </section>
  );
}

export default HeroSection;