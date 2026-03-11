import homepageVideo from "../assets/demo/Homepage Video.MOV";
import actionDetails1 from "../assets/demo/action_details1.png";
import actionDetails3 from "../assets/demo/action_details3.png";
import actionDetails5 from "../assets/demo/action_details5.png";
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
        <section id="demo" className="relative bg-white text-[#064942] pt-8 lg:pt-12 pb-16 lg:pb-20 overflow-hidden min-h-screen flex items-start">
      
      {/* Details around center demo block */}
      <img 
        ref={leftClocksRef}
        src={actionDetails1} 
        alt="" 
        className={`hidden lg:block absolute left-[18%] top-[27%] w-[30px] xl:w-[36px] h-auto z-10 animate-float ${
          leftClocksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        } transition-all duration-1000`}
        style={{animationDelay: '0s'}}
      />
      
      <img 
        ref={rightClocksRef}
        src={actionDetails3} 
        alt="" 
        className={`hidden lg:block absolute right-[19%] bottom-[17%] w-[14px] xl:w-[18px] h-auto z-10 animate-float ${
          rightClocksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        } transition-all duration-1000`}
        style={{animationDelay: '0.5s'}}
      />
      <img
        src={actionDetails5}
        alt=""
        className="hidden lg:block absolute left-[16%] bottom-[18%] w-[26px] xl:w-[32px] h-auto z-10 animate-float"
        style={{ animationDelay: "0.9s" }}
      />
      <img
        src={actionDetails1}
        alt=""
        className="hidden lg:block absolute right-[16%] top-[26%] w-[24px] xl:w-[30px] h-auto z-10 animate-float"
        style={{ animationDelay: "1.2s" }}
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
          <p className="text-[#7F9F76] text-lg sm:text-xl max-w-2xl mx-auto">
            Answer questions, get instant AI feedback, track progress
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="relative flex justify-center items-center">
          
          {/* Main Action Video */}
          <div 
            ref={photoRef}
            className={`relative z-20 transition-all duration-800 overflow-hidden ${
              photoVisible ? 'animate-fadeInScale' : 'opacity-0 scale-90'
            }`}
          >
            <video 
              ref={videoRef}
              src={homepageVideo}
              className="w-full max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] h-auto mx-auto block rounded-lg"
              style={{ 
                display: 'block', 
                marginTop: '-3px',
                boxShadow: '0 25px 80px -10px rgba(0, 0, 0, 0.95), 0 15px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(0, 0, 0, 0.3)'
              }}
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
