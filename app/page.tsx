import Navbar from "@/components/navbar";
import HeroSection from "@/sections/home/hero-section";
import FeaturedProjects from "@/sections/home/featured-projects";
import AboutSection from "@/sections/home/about-section";
import ContactSection from "@/sections/home/contact-section";
import { featured_products } from "@/constants/products";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
      {/* Projects Section */}

      <FeaturedProjects data={featured_products} />
      {/* About Section */}

      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
