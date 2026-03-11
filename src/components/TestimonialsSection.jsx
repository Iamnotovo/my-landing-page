import actionDetails1 from "../assets/demo/action_details1.png";
import actionDetails3 from "../assets/demo/action_details3.png";
import actionDetails5 from "../assets/demo/action_details5.png";
import nicolasBalzamo from "../assets/testimonials/nicolas-balzamo.jpeg";
import russellHoward from "../assets/testimonials/russell-howard.jpeg";
import yunhan from "../assets/testimonials/yunhan.JPG";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#F48D05]" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ avatar, name, text }) {
  return (
    <div className="group bg-white rounded-[10px] w-[286px] min-h-[340px] px-5 py-[30px] border border-[#E3E3E3] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Avatar with colored circle background */}
        <div className="relative w-[110px] h-[110px] overflow-hidden rounded-[70px]">
          <div className="absolute inset-0 rounded-full bg-[#7BBDC9]" />
          <img src={avatar} alt="" className="absolute inset-0 w-[110px] h-[110px] object-cover" />
        </div>
        <StarRow />
        <h4 className="text-[#064942] font-medium text-[20px] tracking-[0.2px]">{name}</h4>
        <p className="text-[#7F9F76] text-[16px] leading-6 tracking-[0.16px]">
          {text}
        </p>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  const cards = [
    {
      avatar: nicolasBalzamo,
      name: "Nicolas Balzamo",
      text:
        "Past-paper style questions are actually past-paper style. The wording and difficulty feel real, so when I practice it doesn't feel like I'm guessing what the exam will be like.",
    },
    {
      avatar: russellHoward,
      name: "Russell Howard",
      text:
        "The AI auto-grading is a game changer. I get feedback instantly and it tells me exactly where I'm losing marks, so I can fix it straight away instead of repeating the same mistakes.",
    },
    {
      avatar: yunhan,
      name: "Yunhan Zhu",
      text:
        "Examiner Mode made me way better under time pressure. It feels like a proper exam setup, and I like that the content is teacher-verified because I don't trust random notes online anymore.",
    },
  ];

  return (
        <section id="testimonials" className="relative bg-white text-[#064942] py-4 lg:py-8 overflow-hidden min-h-screen flex items-center">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 
          ref={headerRef}
          className={`text-center font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] mb-12 transition-all duration-700 ${
            headerVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          Testimonials
        </h2>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 gap-4 md:gap-5 justify-center md:[grid-template-columns:repeat(3,286px)] transition-all duration-800 ${
            cardsVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          {cards.map((c) => (
            <TestimonialCard key={c.name} {...c} />
          ))}
        </div>

        {/* Decorative details around the center cards */}
        <img src={actionDetails1} alt="" className="hidden lg:block absolute top-[6%] left-[2%] w-[30px] xl:w-[36px] h-auto animate-float z-30" />
        <img src={actionDetails3} alt="" className="hidden lg:block absolute bottom-[2%] right-[2%] w-[14px] xl:w-[18px] h-auto animate-float z-30" style={{ animationDelay: "0.6s" }} />
        <img src={actionDetails5} alt="" className="hidden lg:block absolute top-[8%] right-[1%] w-[24px] xl:w-[30px] h-auto animate-float z-30" style={{ animationDelay: "1s" }} />
        <img src={actionDetails1} alt="" className="hidden lg:block absolute bottom-[1%] left-[4%] w-[22px] xl:w-[28px] h-auto animate-float z-30" style={{ animationDelay: "1.3s" }} />
      </div>
    </section>
  );
}

export default TestimonialsSection;


