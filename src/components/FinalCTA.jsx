// FinalCTA.tsx — uses hero rainbows and circle, centered on the card

import goToLogo from "../assets/shared/go_to_logo.png";
import startPhoto from "../assets/final-cta/start_photo.png";
import leftRainbow from "../assets/hero/left_rainbow.svg";
import rightRainbow from "../assets/hero/right_rainbow.svg";
import violetCircle from "../assets/hero/violet_circle.svg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function FinalCTA() {
  const [contentRef, contentVisible] = useScrollAnimation();
  const [ellipseRef, ellipseVisible] = useScrollAnimation();
  const [photoRef, photoVisible] = useScrollAnimation();

  return (
    <section className="relative bg-white text-[#064942] py-4 lg:py-8 xl:py-12 2xl:py-16 overflow-hidden min-h-screen flex items-center">
      {/* Left Rainbow */}
      <img
        src={leftRainbow}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute
                   top-1/2 -translate-y-1/2
                   z-0 max-w-none"
        style={{ left: '0' }}
      />
      {/* Right Rainbow */}
      <img
        src={rightRainbow}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute
                   top-1/2 -translate-y-1/2
                   z-0 max-w-none"
        style={{ right: '0' }}
      />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-[110rem] px-6 sm:px-8 lg:px-12">
        {/* Card */}
        <div
          ref={contentRef}
          className={`relative bg-[#E5ECE4] rounded-[20px] p-8 lg:p-12 
                      flex flex-col lg:flex-row items-center gap-8 lg:gap-12 
                      transition-all duration-700 ${
                        contentVisible ? "animate-fadeInScale" : "opacity-0 scale-90"
                      }`}
        >

          {/* Text content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <h2 className="text-[#064942] text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-semibold leading-[1.3] font-[Outfit]">
                Start practicing smarter today
              </h2>
              <p className="text-[#7F9F76] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-normal leading-[1.4] font-[Outfit]">
                Join thousands of IB students using AceDiploma to boost their scores
              </p>
            </div>

            <a href="https://adv01.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#064942] rounded-2xl px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 text-white font-[Outfit] font-medium hover:bg-[#7F9F76] transition-colors">
              <span className="text-sm">Start Practicing</span>
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <img src={goToLogo} alt="Go" className="w-3 h-3 brightness-0" />
              </div>
            </a>
          </div>

          {/* Illustration */}
          <div className="relative z-10 w-[320px] h-[320px] xl:w-[400px] xl:h-[400px] 2xl:w-[480px] 2xl:h-[480px] flex-shrink-0">
            <div 
              ref={ellipseRef}
              className={`absolute inset-0 transition-all duration-1000 ${
                ellipseVisible ? 'animate-pulse' : 'opacity-0 scale-90'
              }`}
              style={{animationDelay: '0.3s', animationDuration: '6s'}}
            >
              <img src={violetCircle} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                ref={photoRef}
                src={startPhoto}
                alt="Start practicing illustration"
                className={`w-[280px] h-[280px] object-contain transition-all duration-1000 ${
                  photoVisible ? 'animate-fadeInScale animate-float' : 'opacity-0 scale-90'
                }`}
                style={{animationDelay: '0.5s'}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;