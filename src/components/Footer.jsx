import aceDiplomaLogo from '../assets/header/ace-diploma-logo.svg';
import instagramIcon from '../assets/footer/instagram_icon.svg';
import facebookIcon from '../assets/footer/facebook_icon.svg';
import linkedinIcon from '../assets/footer/linkedin_icon.svg';
import twitterIcon from '../assets/footer/twitter_icon.svg';

function Footer() {
  return (
    <footer className="relative bg-[#151A36] border-t border-white/20">
      {/* Separator line */}
      <div className="absolute left-[70px] top-[320.5px] w-[1300px] h-px bg-[#265267]"></div>
      
      {/* Main content container */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Column - Branding and Contact */}
          <div className="flex flex-col gap-12">
            {/* Logo and tagline */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={aceDiplomaLogo} alt="AceDiploma" className="h-8 w-auto" />
              </div>
              <p className="text-white text-base font-[Outfit] font-normal">
                Built by IB educators. Powered by AI. Designed for students like you.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C5.2 0 3 2.2 3 5C3 9 8 16 8 16S13 9 13 5C13 2.2 10.8 0 8 0ZM8 7C6.9 7 6 6.1 6 5C6 3.9 6.9 3 8 3C9.1 3 10 3.9 10 5C10 6.1 9.1 7 8 7Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-white text-base font-[Outfit] font-medium">Address</span>
                <span className="text-white text-sm font-[Outfit] font-light leading-6">
                  El garage de patrick
                </span>
              </div>
              
              {/* Contact */}
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3H2C1.45 3 1 3.45 1 4V12C1 12.55 1.45 13 2 13H14C14.55 13 15 12.55 15 12V4C15 3.45 14.55 3 14 3ZM14 12H2V6L8 9L14 6V12ZM8 7L2 4H14L8 7Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-white text-base font-[Outfit] font-medium">Contact Us</span>
                <span className="text-white text-sm font-[Outfit] font-light leading-6">
                  contact@acediploma.com
                </span>
              </div>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-xl font-[Outfit] font-medium capitalize">
              Quick Links
            </h3>
            <div className="flex flex-col gap-4 opacity-70">
              <a href="#" className="text-white text-sm font-[Outfit] font-light capitalize hover:text-white/80 transition-colors">
                About
              </a>
              <a href="#" className="text-white text-sm font-[Outfit] font-light capitalize hover:text-white/80 transition-colors">
                Blog
              </a>
              <a href="#" className="text-white text-sm font-[Outfit] font-light capitalize hover:text-white/80 transition-colors">
                FAQ
              </a>
              <a href="#" className="text-white text-sm font-[Outfit] font-light capitalize hover:text-white/80 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Right Column - Terms and Conditions */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-xl font-[Outfit] font-medium capitalize">
              Terms and Conditions
            </h3>
            <div className="flex flex-col gap-4 opacity-70">
              <a href="#" className="text-white text-sm font-[Outfit] font-light capitalize hover:text-white/80 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-white text-sm font-[Outfit] font-light capitalize hover:text-white/80 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/20">
          <div className="text-white text-base font-[Outfit] font-normal">
            © All Rights Reserved
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[#75919E] text-base font-[Outfit] font-normal">Legal Notice</span>
            <span className="text-[#75919E] text-base font-[Outfit] font-normal">Languages</span>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="#" className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            
            {/* Facebook */}
            <a href="#" className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/acediploma/about/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            
            {/* Twitter */}
            <a href="#" className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
