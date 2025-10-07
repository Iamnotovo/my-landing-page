import actionPhoto from "../assets/demo/action_photo.png";
import actionDetails1 from "../assets/demo/action_details1.png";
import actionDetails2 from "../assets/demo/action_detalis2.png";
import actionDetails3 from "../assets/demo/action_details3.png";
import actionDetails5 from "../assets/demo/action_details5.png";
import leftClocks from "../assets/demo/left_clocks.png";
import rightClocks from "../assets/demo/right_clocks.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function DemoSection() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [photoRef, photoVisible] = useScrollAnimation();
  const [leftClocksRef, leftClocksVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px 0px 0px' });
  const [rightClocksRef, rightClocksVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px 0px 0px' });

  return (
        <section id="demo" className="relative bg-[#151A36] text-white py-2 lg:py-4 overflow-hidden min-h-screen flex items-center">
      
      {/* Left Clocks - Touch screen edge */}
      <img 
        ref={leftClocksRef}
        src={leftClocks} 
        alt="Left decorative clocks" 
        className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[150px] xl:w-[180px] h-auto z-10 animate-float ${
          leftClocksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        } transition-all duration-1000`}
        style={{animationDelay: '0s'}}
      />
      
      {/* Right Clocks - Touch screen edge */}
      <img 
        ref={rightClocksRef}
        src={rightClocks} 
        alt="Right decorative clocks" 
        className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[150px] xl:w-[180px] h-auto z-10 animate-float ${
          rightClocksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        } transition-all duration-1000`}
        style={{animationDelay: '0.5s'}}
      />

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
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
          
          {/* Main Action Photo */}
          <div 
            ref={photoRef}
            className={`relative z-20 transition-all duration-800 ${
              photoVisible ? 'animate-fadeInScale' : 'opacity-0 scale-90'
            }`}
          >
            <img 
              src={actionPhoto} 
              alt="Ace Diploma demo interface" 
              className="w-full max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto mx-auto shadow-2xl"
            />
          </div>
          
          {/* Action Details 1 - Top Right */}
          <img 
            src={actionDetails1} 
            alt="Action detail 1" 
            className="hidden lg:block absolute right-[5%] top-[2%] w-[35px] xl:w-[45px] h-auto animate-float z-40"
            style={{animationDelay: '1s'}}
          />
          
          {/* Action Details 2 - Bottom Left */}
          <img 
            src={actionDetails2} 
            alt="Action detail 2" 
            className="hidden lg:block absolute left-[5%] bottom-[2%] w-[35px] xl:w-[45px] h-auto animate-float z-40"
            style={{animationDelay: '1.5s'}}
          />
          
          {/* Action Details 3 - Bottom Left (lower) */}
          <img 
            src={actionDetails3} 
            alt="Action detail 3" 
            className="hidden lg:block absolute left-[8%] bottom-[10%] w-[25px] xl:w-[30px] h-auto animate-float z-40"
            style={{animationDelay: '2s'}}
          />
          
          {/* Action Details 5 - Top Right (higher) */}
          <img 
            src={actionDetails5} 
            alt="Action detail 5" 
            className="hidden lg:block absolute right-[8%] top-[10%] w-[25px] xl:w-[30px] h-auto animate-float z-40"
            style={{animationDelay: '2.5s'}}
          />
          
        </div>
        
      </div>
    </section>
  );
}

export default DemoSection;
