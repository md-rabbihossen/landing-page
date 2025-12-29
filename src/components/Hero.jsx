import BackgroundPattern from "./BackgroundPattern";
import CTAButton from "./CTAButton";
import Features from "./Features";
import FeaturesCard from "./FeaturesCard";
import HeroHeading from "./HeroHeading";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

export default function Hero() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
      <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {/* Hero heading */}
        <HeroHeading />
      </div>
      {/* CTA Button */}
      <CTAButton />
      {/* Background Pattern */}
      <BackgroundPattern />

      <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
        {/* Left Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template" />
          </div>
        </div>
        {/* Feature Cards */}
        <FeaturesCard />
        {/* Right Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template-2" />
          </div>
        </div>
      </div>
      {/* Social Proof Section with Testimonial */}
      <Testimonials />
      {/* Features Section */}
      <Features />
      {/* Pricing Section */}
      <Pricing />
      {/* Footer Section */}
    </div>
  );
}
