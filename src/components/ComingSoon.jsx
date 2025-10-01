import planner from "../assets/coming-soon/comingsoon1.png";
import heatmap from "../assets/coming-soon/comingsoon2.png";
import answers from "../assets/coming-soon/comingsoon3.png";
import mobile from "../assets/coming-soon/comingsoon4.png";
import dots from "../assets/coming-soon/comingsoon_dots.png";
import detTopLeft from "../assets/coming-soon/comingsoon_det_top_left1.png";
import detTopRight from "../assets/coming-soon/comingsoon_det_top_right.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ComingCard({ icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden bg-[#1F2846]/90 rounded-[14px] px-6 py-6 md:px-8 md:py-8 border border-white/10 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.26)]">
      {/* per-card ambient glow */}
      <div className="pointer-events-none absolute -z-0">
        <div className="absolute -top-[120px] -left-[80px] w-[260px] h-[260px] bg-[#8980F5] opacity-[0.12] blur-[80px] rounded-full" />
        <div className="absolute -bottom-[120px] -right-[80px] w-[260px] h-[260px] bg-[#FF6878] opacity-[0.12] blur-[80px] rounded-full" />
      </div>

      <div className="relative flex items-center gap-5 z-10">
        <div className="relative w-[72px] h-[72px] md:w-[90px] md:h-[90px]">
          <div className="absolute inset-0 rounded-full bg-[#726BF9]" />
          <img src={icon} alt="" className="absolute inset-0 w-full h-full object-contain" />
        </div>
        <div>
          <h4 className="text-white text-lg md:text-xl font-medium">{title}</h4>
          {desc && (
            <p className="text-white/75 text-sm md:text-[15px] leading-6 mt-1">
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ComingSoon() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const [detTopRightRef, detTopRightVisible] = useScrollAnimation();
  const [dotsTopLeftRef, dotsTopLeftVisible] = useScrollAnimation();
  const [dotsBottomLeftRef, dotsBottomLeftVisible] = useScrollAnimation();
  const [detTopLeftRef, detTopLeftVisible] = useScrollAnimation();

  const items = [
    { icon: planner, title: "Automatic Study Planner", desc: "Build study schedules automatically from your goals and deadlines." },
    { icon: heatmap, title: "Progress Heatmaps", desc: "Visualize strengths and gaps over time with per-topic heatmaps." },
    { icon: answers, title: "Sample Answers", desc: "Explore model responses and examiner-style notes for tough questions." },
    { icon: mobile, title: "Mobile App", desc: "Practice on the go with offline support and daily streaks." },
  ];

  return (
        <section id="coming-soon" className="relative bg-[#151A36] text-white py-8 lg:py-12 overflow-hidden min-h-screen flex items-center">
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div 
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-center font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] mb-4">Coming Soon</h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-10">This is just the beginning. We're constantly improving – and here's what's next.</p>
        </div>

        <div 
          ref={cardsRef}
          className={`relative rounded-2xl border border-white/10 p-4 md:p-6 bg-white/5 overflow-hidden transition-all duration-800 ${
            cardsVisible ? 'animate-fadeInScale' : 'opacity-0 scale-90'
          }`}
        >
          {/* container soft glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-[180px] -left-[120px] w-[420px] h-[380px] bg-[#FFC743] opacity-[0.12] blur-[110px] rounded-full" />
            <div className="absolute -bottom-[180px] -right-[120px] w-[420px] h-[380px] bg-[#8980F5] opacity-[0.12] blur-[110px] rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {items.map(({ icon, title, desc }) => (
              <ComingCard key={title} icon={icon} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </div>
      {/* Section-level decorative details positioned OUTSIDE the card container */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* top-right X closer to center */}
        <img 
          ref={detTopRightRef}
          src={detTopRight} 
          alt="" 
          className={`absolute top-[140px] right-[120px] w-[26px] opacity-90 transition-all duration-1000 ${
            detTopRightVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{animationDelay: '0.2s'}}
        />
        {/* dots: top-left and bottom-left (same size) */}
        <img 
          ref={dotsTopLeftRef}
          src={dots} 
          alt="" 
          className={`absolute top-[140px] left-[120px] w-[56px] opacity-80 transition-all duration-1000 ${
            dotsTopLeftVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{animationDelay: '0.4s'}}
        />
        <img 
          ref={dotsBottomLeftRef}
          src={dots} 
          alt="" 
          className={`absolute bottom-[40px] left-[130px] w-[56px] opacity-80 transition-all duration-1000 ${
            dotsBottomLeftVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{animationDelay: '0.6s'}}
        />
        {/* top-left small mark near squares */}
        <img 
          ref={detTopLeftRef}
          src={detTopLeft} 
          alt="" 
          className={`absolute top-[120px] left-[160px] w-[20px] opacity-90 transition-all duration-1000 ${
            detTopLeftVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{animationDelay: '0.8s'}}
        />
      </div>
    </section>
  );
}


