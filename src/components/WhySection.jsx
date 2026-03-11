import actionDetails1 from "../assets/demo/action_details1.png";
import actionDetails3 from "../assets/demo/action_details3.png";
import actionDetails5 from "../assets/demo/action_details5.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import pastPaperIcon from "../assets/why/past_paper_icon.png";
import aiIcon from "../assets/why/AI_icon.png";
import examinerIcon from "../assets/why/examiner_icon.png";
import verifiedIcon from "../assets/why/verified_icon.png";

function WhySection() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
        <section id="why" className="relative bg-[#E5ECE4] text-[#064942] py-4 lg:py-8 overflow-hidden min-h-screen flex items-center">
      {/* Container */}
      <div className="relative mx-auto max-w-[68rem] px-6 sm:px-8 lg:px-12">
        
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
            <div className="bg-white rounded-xl p-8 border border-[#E3E3E3] h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#F48D05] flex items-center justify-center flex-shrink-0">
                  <img src={pastPaperIcon} alt="Past papers icon" className="w-[74px] h-[74px] object-contain" />
                </div>
                <div className="flex-1" style={{ maxWidth: '75%' }}>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#064942]">
                    Past Paper Style Questions
                  </h3>
                  <p className="text-[#7F9F76] leading-relaxed text-xs md:text-sm text-justify">
                    Practice with authentic exam questions that match IB style, difficulty, and wording, so nothing feels unfamiliar on test day.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - AI Assisted Auto-grading */}
            <div className="bg-white rounded-xl p-8 border border-[#E3E3E3] h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#7BBDC9] flex items-center justify-center flex-shrink-0">
                  <img src={aiIcon} alt="AI icon" className="w-[69px] h-[68px] object-contain" />
                </div>
                <div className="flex-1" style={{ maxWidth: '75%' }}>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#064942]">
                    AI Assisted Auto-grading
                  </h3>
                  <p className="text-[#7F9F76] leading-relaxed text-xs md:text-sm text-justify">
                    Instant evaluation with actionable, mark-focused guidance, highlighting gaps, suggesting corrections, and whithout having to wait for anyone
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid gap-6">
            
            {/* Top Row - Examiner Mode */}
            <div className="bg-white rounded-xl p-8 border border-[#E3E3E3] h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#7BBDC9] flex items-center justify-center flex-shrink-0">
                  <img src={examinerIcon} alt="Examiner mode icon" className="w-[74px] h-[74px] object-contain" />
                </div>
                <div className="flex-1" style={{ maxWidth: '75%' }}>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#064942]">
                    Examiner Mode
                  </h3>
                  <p className="text-[#7F9F76] leading-relaxed text-xs md:text-sm text-justify">
                    Train under real exam conditions: timed sessions, mark distribution, and performance summaries that reveal pacing and weak topics.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - Verified by IB Teachers */}
            <div className="bg-white rounded-xl p-8 border border-[#E3E3E3] h-[184px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-6 h-full">
                <div className="w-[84px] h-[84px] p-[5px] rounded-full bg-[#7F9F76] flex items-center justify-center flex-shrink-0">
                  <img src={verifiedIcon} alt="Verified by teachers icon" className="w-[74px] h-[74px] object-contain" />
                </div>
                <div className="flex-1" style={{ maxWidth: '75%' }}>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-[#064942]">
                    Verified by IB Teachers
                  </h3>
                  <p className="text-[#7F9F76] leading-relaxed text-xs md:text-sm text-justify">
                    Content reviewed for accuracy and relevance, aligned with IB expectations, so you can trust what you're studying and how you're being assessed.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Decorative Details Around Grid - NO MAIN PHOTO */}
        <div className="absolute inset-0 pointer-events-none">
          
          <img 
            src={actionDetails1} 
            alt="" 
            className="hidden lg:block absolute top-[4%] left-[-2%] w-[30px] xl:w-[36px] h-auto animate-float z-30"
            style={{animationDelay: '0.2s'}}
          />
          <img 
            src={actionDetails3} 
            alt="" 
            className="hidden lg:block absolute bottom-[2%] right-[-2%] w-[14px] xl:w-[18px] h-auto animate-float z-30"
            style={{animationDelay: '0.8s'}}
          />
          <img
            src={actionDetails5}
            alt=""
            className="hidden lg:block absolute top-[8%] right-[-1%] w-[24px] xl:w-[30px] h-auto animate-float z-30"
            style={{ animationDelay: "1.1s" }}
          />
          <img
            src={actionDetails1}
            alt=""
            className="hidden lg:block absolute bottom-[1%] left-[1%] w-[22px] xl:w-[28px] h-auto animate-float z-30"
            style={{ animationDelay: "1.4s" }}
          />
          
        </div>
        
      </div>
    </section>
  );
}

export default WhySection;