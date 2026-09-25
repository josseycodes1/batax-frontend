import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SearchExchange from "@/components/home/SearchExchange";
import CategorySection from "@/components/home/CategorySection";
import FeaturedItems from "@/components/home/FeaturedItems";
import ExchangeBanner from "@/components/home/ExchangeBanner";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import TrustSection from "@/components/home/TrustSection";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFBF4] font-[family-name:var(--font-geist-sans)] text-[#063F35]">
      <Navbar />

      <HeroSection />

      <SearchExchange />

      <CategorySection />

      <FeaturedItems />

      <ExchangeBanner />

      <HowItWorks />

      <Testimonials />

      <TrustSection />

      <FinalCTA />

      <Footer />
    </main>
  );
}
