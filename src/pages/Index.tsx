import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <WhyChooseSection />
        <SolutionsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
