import detTopLeft from "../assets/testimonials/testimonials_det_top_left.png";
import detTopRight from "../assets/testimonials/testimonials_det_top_right.png";
import detBottomLeft from "../assets/testimonials/testimonials_det_bottom left.png";
import detDots from "../assets/testimonials/testimonialsdet_dots.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-yellow-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ avatar, name, text }) {
  return (
    <div className="group bg-[#1F2846] rounded-[10px] w-[286px] min-h-[340px] px-5 py-[30px] border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Avatar with colored circle background */}
        <div className="relative w-[110px] h-[110px] overflow-hidden rounded-[70px]">
          <div className="absolute inset-0 rounded-full bg-[#726BF9]" />
          <img src={avatar} alt="" className="absolute inset-0 w-[110px] h-[110px] object-cover" />
        </div>
        <StarRow />
        <h4 className="text-white font-medium text-[20px] tracking-[0.2px]">{name}</h4>
        <p className="text-white/70 text-[16px] leading-6 tracking-[0.16px]">
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
      avatar: "https://dummyimage.com/80x80/3f51b5/ffffff&text=A",
      name: "Alam Iqbal",
      text:
        "This exam material was a life saver for my lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
      avatar: "https://dummyimage.com/80x80/e91e63/ffffff&text=B",
      name: "Aman Lee",
      text:
        "This AI auto grading was a life saver for my lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, metus nec fringilla accumsan.",
    },
    {
      avatar: "https://dummyimage.com/80x80/00bcd4/ffffff&text=C",
      name: "Sarah Cohen",
      text:
        "This exam material was a life saver for my lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus nec fringilla accumsan.",
    },
  ];

  return (
        <section id="testimonials" className="relative bg-[#151A36] text-white py-4 lg:py-8 overflow-hidden min-h-screen flex items-center">
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

        {/* Decorative details (reuse sizes from Why section) */}
        <img src={detTopLeft} alt="" className="hidden lg:block absolute top-[35%] left-[5%] w-[15px] xl:w-[19px] h-auto animate-float z-30" />
        <img src={detTopRight} alt="" className="hidden lg:block absolute top-[10%] right-[3%] w-[25px] xl:w-[30px] h-auto animate-float z-30" />
        <img src={detBottomLeft} alt="" className="hidden lg:block absolute bottom-[-10%] left-[20%] w-[25px] xl:w-[30px] h-auto animate-float z-30" />
        <img src={detDots} alt="" className="hidden lg:block absolute top-[15%] right-[8%] w-[35px] xl:w-[40px] h-auto animate-float z-30" />
        <img src={detDots} alt="" className="hidden lg:block absolute bottom-[-8%] left-[6%] w-[35px] xl:w-[40px] h-auto animate-float z-30" />
      </div>
    </section>
  );
}

export default TestimonialsSection;


