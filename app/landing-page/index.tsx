import PricingSection from "./pricing-section";
import Hero from "./hero";
import FeaturesSection from "./features-selection";
import CustomizerSection from "./customizer-section";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CustomizerSection />
      <PricingSection />
    </div>
  );
};

export default LandingPage;
