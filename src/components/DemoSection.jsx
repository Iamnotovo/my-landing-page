import homepageVideo from "../assets/demo/Homepage Video.MOV";
import leftClocks from "../assets/demo/left_clocks.png";
import rightClocks from "../assets/demo/right_clocks.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useRef } from "react";

function DemoSection() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [photoRef, photoVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px 200px 0px' });
  const [leftClocksRef, leftClocksVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px 0px 0px' });
  const [rightClocksRef, rightClocksVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px 0px 0px' });
  const videoRef = useRef(null);

  // Play video when it becomes visible
  useEffect(() => {
    if (photoVisible && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [photoVisible]);

  return (
        <section id="demo" className="relative bg-[#151A36] text-white pt-8 lg:pt-12 pb-16 lg:pb-20 overflow-hidden min-h-screen flex items-start">
      
      {/* Left Clocks - Touch screen edge */}
      <img 
        ref={leftClocksRef}
        src={leftClocks} 
        alt="Left decorative clocks" 
        className={`hidden lg:block absolute left-0 top-[45%] -translate-y-1/2 w-[150px] xl:w-[180px] h-auto z-10 animate-float ${
          leftClocksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        } transition-all duration-1000`}
        style={{animationDelay: '0s'}}
      />
      
      {/* Right Clocks - Touch screen edge */}
      <img 
        ref={rightClocksRef}
        src={rightClocks} 
        alt="Right decorative clocks" 
        className={`hidden lg:block absolute right-0 top-[45%] -translate-y-1/2 w-[150px] xl:w-[180px] h-auto z-10 animate-float ${
          rightClocksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        } transition-all duration-1000`}
        style={{animationDelay: '0.5s'}}
      />

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${
            headerVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] mb-4">
            See Ace Diploma in action
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Answer questions, get instant AI feedback, track progress
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="relative flex justify-center items-center">
          
          {/* Main Action Video */}
          <div 
            ref={photoRef}
            className={`relative z-20 transition-all duration-800 ${
              photoVisible ? 'animate-fadeInScale' : 'opacity-0 scale-90'
            }`}
          >
            <video 
              ref={videoRef}
              src={homepageVideo}
              className="w-full max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] h-auto mx-auto shadow-2xl"
              muted
              playsInline
              loop
              preload="auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default DemoSection;
