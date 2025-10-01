// FinalCTA.tsx — uses LEFT rainbow on both sides, original size, centered on the card

import goToLogo from "../assets/shared/go_to_logo.png";
import startPhoto from "../assets/final-cta/start_photo.png";
import startLeftRainbow from "../assets/final-cta/start_left_rainbow.png"; // same asset for both sides
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function FinalCTA() {
  const [contentRef, contentVisible] = useScrollAnimation();
  const [ellipseRef, ellipseVisible] = useScrollAnimation();
  const [photoRef, photoVisible] = useScrollAnimation();

  return (
    <section className="relative bg-[#151A36] text-white py-8 lg:py-12 overflow-hidden min-h-screen flex items-center">
      {/* Left Rainbow */}
      <img
        src={startLeftRainbow}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute
                   top-1/2 -translate-y-1/2
                   z-0 max-w-none"
        style={{ left: 'calc(50% - 582.5px - 100px)' }}
      />
      {/* Right Rainbow (mirrored left) */}
      <img
        src={startLeftRainbow}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute
                   top-1/2 -translate-y-1/2
                   z-0 max-w-none transform-gpu scale-x-[-1]"
        style={{ right: 'calc(50% - 582.5px - 100px)' }}
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {/* Card */}
        <div
          ref={contentRef}
          className={`relative bg-[#1F2846] rounded-[20px] p-8 lg:p-12 
                      flex flex-col lg:flex-row items-center gap-8 lg:gap-12 
                      transition-all duration-700 ${
                        contentVisible ? "animate-fadeInScale" : "opacity-0 scale-90"
                      }`}
        >

          {/* Text content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <h2 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-[1.3] font-[Outfit]">
                Start practicing smarter today
              </h2>
              <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[1.4] font-[Outfit]">
                Join thousands of IB students using AceDiploma to boost their scores
              </p>
            </div>

            <button className="inline-flex items-center gap-2 bg-[#8980F5] rounded-2xl px-6 py-3 text-white font-[Outfit] font-medium hover:bg-[#7a70e8] transition-colors">
              <span className="text-sm">Start Practicing</span>
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <img src={goToLogo} alt="Go" className="w-3 h-3 brightness-0" />
              </div>
            </button>
          </div>

          {/* Illustration */}
          <div className="relative z-10 w-[320px] h-[320px] flex-shrink-0">
            <div 
              ref={ellipseRef}
              className={`absolute inset-0 bg-gradient-to-b from-[#8980F5] to-[#4133EF] rounded-full transition-all duration-1000 ${
                ellipseVisible ? 'animate-pulse' : 'opacity-0 scale-90'
              }`}
              style={{animationDelay: '0.3s', animationDuration: '6s'}}
            />
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