import whyDetTopLeft from "../assets/why/why_det_top_left.png";
import whyDetTopRight from "../assets/why/why_det_top_right.png";
import whyDetBottomLeft from "../assets/why/why_det_bottom left.png";
import whyDetDots from "../assets/why/why_det_dots.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import pastPaperIcon from "../assets/why/past_paper_icon.png";
import aiIcon from "../assets/why/AI_icon.png";
import examinerIcon from "../assets/why/examiner_icon.png";
import verifiedIcon from "../assets/why/verified_icon.png";

function WhySection() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
        <section id="why" className="relative bg-[#151A36] text-white py-4 lg:py-8 overflow-hidden min-h-screen flex items-center">
      {/* Container */}
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-semibold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] mb-12">
            Why AceDiploma?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={cardsRef}
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-800 ${
            cardsVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* Left Side - Feature Cards */}
          <div className="grid gap-6">
            
            {/* Top Row - Past Paper Style Questions */}
            <div className="bg-[#1E2440] rounded-xl p-8 border border-white/10 h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#FFC743] flex items-center justify-center flex-shrink-0">
                  <img src={pastPaperIcon} alt="Past papers icon" className="w-[74px] h-[74px] object-contain" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
                    Past Paper Style Questions
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - AI Assisted Auto-grading */}
            <div className="bg-[#1E2440] rounded-xl p-8 border border-white/10 h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#EA69B8] flex items-center justify-center flex-shrink-0">
                  <img src={aiIcon} alt="AI icon" className="w-[69px] h-[68px] object-contain" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
                    AI Assisted Auto-grading
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid gap-6">
            
            {/* Top Row - Examiner Mode */}
            <div className="bg-[#1E2440] rounded-xl p-8 border border-white/10 h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#7979FF] flex items-center justify-center flex-shrink-0">
                  <img src={examinerIcon} alt="Examiner mode icon" className="w-[74px] h-[74px] object-contain" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
                    Examiner Mode
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - Verified by IB Teachers */}
            <div className="bg-[#1E2440] rounded-xl p-8 border border-white/10 h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#69A2FF] flex items-center justify-center flex-shrink-0">
                  <img src={verifiedIcon} alt="Verified by teachers icon" className="w-[74px] h-[74px] object-contain" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
                    Verified by IB Teachers
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Decorative Details Around Grid - NO MAIN PHOTO */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* Top Left Detail - outside top left card */}
          <img 
            src={whyDetTopLeft} 
            alt="Top left decoration" 
            className="hidden lg:block absolute top-[35%] left-[-1%] w-[15px] xl:w-[19px] h-auto animate-float z-30"
            style={{animationDelay: '0s'}}
          />
          
          {/* Top Right Detail - outside top right card */}
          <img 
            src={whyDetTopRight} 
            alt="Top right decoration" 
            className="hidden lg:block absolute top-[10%] right-[-2%] w-[25px] xl:w-[30px] h-auto animate-float z-30"
            style={{animationDelay: '0.5s'}}
          />
          
          {/* Bottom Left Detail - outside bottom left card */}
          <img 
            src={whyDetBottomLeft} 
            alt="Bottom left decoration" 
            className="hidden lg:block absolute bottom-[-10%] left-[20%] w-[25px] xl:w-[30px] h-auto animate-float z-30"
            style={{animationDelay: '1s'}}
          />
          
          {/* Dots - First Instance (top right corner of grid area) */}
          <img 
            src={whyDetDots} 
            alt="Decorative dots top" 
            className="hidden lg:block absolute top-[15%] right-[4%] w-[35px] xl:w-[40px] h-auto animate-float z-30"
            style={{animationDelay: '1.5s'}}
          />
          
          {/* Dots - Second Instance (bottom left corner of grid area) */}
          <img 
            src={whyDetDots} 
            alt="Decorative dots bottom" 
            className="hidden lg:block absolute bottom-[-10%] left-[6%] w-[35px] xl:w-[40px] h-auto animate-float z-30"
            style={{animationDelay: '2s'}}
          />
          
        </div>
        
      </div>
    </section>
  );
}

export default WhySection;