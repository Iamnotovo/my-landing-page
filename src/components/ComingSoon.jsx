import planner from "../assets/coming-soon/comingsoon1.png";
import heatmap from "../assets/coming-soon/comingsoon2.png";
import answers from "../assets/coming-soon/comingsoon3.png";
import mobile from "../assets/coming-soon/comingsoon4.png";
import actionDetails1 from "../assets/demo/action_details1.png";
import actionDetails3 from "../assets/demo/action_details3.png";
import actionDetails5 from "../assets/demo/action_details5.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ComingCard({ icon, title, desc, showBackground = false }) {
  return (
    <div className="group relative overflow-hidden bg-white rounded-[14px] px-6 py-6 md:px-8 md:py-8 border border-[#E3E3E3] backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
      {/* per-card ambient glow */}
      <div className="pointer-events-none absolute -z-0">
        <div className="absolute -top-[120px] -left-[80px] w-[260px] h-[260px] bg-[#7BBDC9] opacity-[0.12] blur-[80px] rounded-full" />
        <div className="absolute -bottom-[120px] -right-[80px] w-[260px] h-[260px] bg-[#F48D05] opacity-[0.12] blur-[80px] rounded-full" />
      </div>

      <div className="relative flex items-center gap-5 z-10">
        <div className="relative w-[72px] h-[72px] md:w-[90px] md:h-[90px] flex-shrink-0">
          {showBackground && <div className="absolute inset-0 rounded-full bg-[#7F9F76]" />}
          <img src={icon} alt="" className="absolute inset-0 w-full h-full object-contain" />
        </div>
        <div>
          <h4 className="text-[#064942] text-lg md:text-xl font-medium">{title}</h4>
          {desc && (
            <p className="text-[#7F9F76] text-sm md:text-[15px] leading-6 mt-1">
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
  const [detTopLeftRef, detTopLeftVisible] = useScrollAnimation();
  const [detBottomRightRef, detBottomRightVisible] = useScrollAnimation();
  const [detTopRightRef, detTopRightVisible] = useScrollAnimation();
  const [detBottomLeftRef, detBottomLeftVisible] = useScrollAnimation();

  const items = [
    { icon: planner, title: "Automatic Study Planner", desc: "Build study schedules automatically from your goals and deadlines.", showBackground: false },
    { icon: heatmap, title: "Progress Heatmaps", desc: "Visualize strengths and gaps over time with per-topic heatmaps.", showBackground: true },
    { icon: answers, title: "Sample Answers", desc: "Explore model responses and examiner-style notes for tough questions.", showBackground: true },
    { icon: mobile, title: "Mobile App", desc: "Practice on the go with offline support and daily streaks.", showBackground: false },
  ];

  return (
        <section id="coming-soon" className="relative bg-[#E5ECE4] text-[#064942] py-4 lg:py-8 overflow-hidden min-h-screen flex items-center">
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div 
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-center font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] mb-4">Coming Soon</h2>
          <p className="text-center text-[#7F9F76] max-w-2xl mx-auto mb-10">This is just the beginning. We're constantly improving – and here's what's next.</p>
        </div>

        <div 
          ref={cardsRef}
          className={`relative rounded-2xl border border-[#E3E3E3] p-4 md:p-6 bg-[#E5ECE4] overflow-hidden transition-all duration-800 ${
            cardsVisible ? 'animate-fadeInScale' : 'opacity-0 scale-90'
          }`}
        >
          {/* container soft glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-[180px] -left-[120px] w-[420px] h-[380px] bg-[#F48D05] opacity-[0.12] blur-[110px] rounded-full" />
            <div className="absolute -bottom-[180px] -right-[120px] w-[420px] h-[380px] bg-[#7BBDC9] opacity-[0.12] blur-[110px] rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {items.map(({ icon, title, desc, showBackground }) => (
              <ComingCard key={title} icon={icon} title={title} desc={desc} showBackground={showBackground} />
            ))}
          </div>
        </div>
      </div>
      {/* Section-level decorative details positioned OUTSIDE the card container */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img 
          ref={detTopLeftRef}
          src={actionDetails1} 
          alt="" 
          className={`absolute top-[142px] left-[130px] w-[30px] opacity-80 transition-all duration-1000 ${
            detTopLeftVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{animationDelay: '0.4s'}}
        />
        <img 
          ref={detBottomRightRef}
          src={actionDetails3} 
          alt="" 
          className={`absolute bottom-[52px] right-[130px] w-[16px] opacity-80 transition-all duration-1000 ${
            detBottomRightVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{animationDelay: '0.6s'}}
        />
        <img
          ref={detTopRightRef}
          src={actionDetails5}
          alt=""
          className={`absolute top-[146px] right-[120px] w-[24px] opacity-80 transition-all duration-1000 ${
            detTopRightVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{ animationDelay: "0.9s" }}
        />
        <img
          ref={detBottomLeftRef}
          src={actionDetails1}
          alt=""
          className={`absolute bottom-[56px] left-[124px] w-[22px] opacity-80 transition-all duration-1000 ${
            detBottomLeftVisible ? 'animate-float' : 'opacity-0'
          }`}
          style={{ animationDelay: "1.2s" }}
        />
      </div>
    </section>
  );
}


