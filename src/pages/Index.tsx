import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Values from "@/components/landing/Values";
import Testimonial from "@/components/landing/Testimonial";
import Stats from "@/components/landing/Stats";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Values />
      <Testimonial />
      <Stats />
      <Footer />
    </main>
  );
};

export default Index;
