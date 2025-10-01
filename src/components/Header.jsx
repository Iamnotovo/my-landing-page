import aceDiplomaLogo from '../assets/header/ace-diploma-logo.svg';

function Header() {
  return (
        <header className="fixed inset-x-0 top-0 h-[70px] bg-[#151A36] z-50 backdrop-blur-sm bg-opacity-95">
      <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="absolute left-4 sm:left-6 lg:left-12 top-[15px]">
          <img src={aceDiplomaLogo} alt="AceDiploma" className="h-[24px] sm:h-[28px] md:h-[32px] lg:h-[35px] w-auto" />
        </div>

            {/* Nav links */}
            <nav className="absolute left-1/2 top-[19px] sm:top-[25px] -translate-x-1/2 inline-flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white">
              <a className="text-[11px] sm:text-xs md:text-sm font-medium leading-[22.4px] font-[Outfit] hover:text-gray-300 transition-colors cursor-pointer" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Home</a>
              <a className="text-[11px] sm:text-xs md:text-sm font-medium leading-[22.4px] font-[Outfit] hover:text-gray-300 transition-colors cursor-pointer" onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}>Features</a>
              <a className="text-[11px] sm:text-xs md:text-sm font-medium leading-[22.4px] font-[Outfit] hover:text-gray-300 transition-colors cursor-pointer" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>Demo</a>
              <a className="text-[11px] sm:text-xs md:text-sm font-medium leading-[22.4px] font-[Outfit] hover:text-gray-300 transition-colors cursor-pointer" onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>Testimonials</a>
              <a className="text-[11px] sm:text-xs md:text-sm font-medium leading-[22.4px] font-[Outfit] hover:text-gray-300 transition-colors cursor-pointer" onClick={() => document.getElementById('coming-soon')?.scrollIntoView({ behavior: 'smooth' })}>Pricing</a>
            </nav>

        {/* CTA Button */}
        <button className="absolute right-4 sm:right-6 lg:right-12 top-[15px] sm:top-[12px] inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 rounded-xl sm:rounded-2xl bg-[#8980F5] px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 text-white font-[Outfit] hover:bg-[#7a70e8] transition-colors">
          <span className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-medium">Get started</span>
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.44 2.22L11.17 7.95L5.44 13.68" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;