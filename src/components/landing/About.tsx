import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-ayu-green/5 rounded-[2rem] blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1200"
            alt="Ayurvedic treatment"
            loading="lazy"
            width={1200}
            height={1400}
            className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-ayu-green font-bold">About AyuSetu</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ayu-dark leading-[1.1] text-balance">
            Bridging Traditional Wisdom with <span className="text-ayu-saffron italic">Modern Living</span>.
          </h2>
          <p className="mt-6 text-lg text-ayu-dark/60 leading-relaxed">
            AyuSetu (meaning "Bridge to Health") was born from a desire to make India's profound wellness traditions accessible, professional, and convenient for the modern generation.
          </p>
          <p className="mt-4 text-lg text-ayu-dark/60 leading-relaxed">
            We connect you with certified Ayurveda practitioners, Yoga gurus, and Wellness experts who bring premium treatments directly to your doorstep.
          </p>
          <Button className="mt-10 group rounded-full bg-ayu-green hover:bg-ayu-green/90 text-white px-8 h-12 text-base shadow-lg shadow-ayu-green/20">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
