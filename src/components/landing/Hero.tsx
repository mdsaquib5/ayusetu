import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ayu-light">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545208393-21602d13b53b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white" />

      <div className="relative container mx-auto flex min-h-[100svh] flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ayu-green/10 text-ayu-green text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            Traditional Wisdom · Modern Convenience
          </span>
          <h1 className="font-display text-ayu-dark text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-balance">
            Reclaim your <span className="text-ayu-green italic">well-being</span>,<br />
            right at <span className="text-ayu-saffron italic">home</span>.
          </h1>
          <p className="mt-8 max-w-xl text-ayu-dark/70 text-lg md:text-xl leading-relaxed">
            India's most trusted platform for authentic Ayurveda, Yoga, and Holistic Wellness services. Verified experts delivered to your doorstep.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button
              size="lg"
              className="group rounded-full bg-ayu-green text-white hover:bg-ayu-green/90 px-8 h-14 text-base shadow-lg shadow-ayu-green/20"
            >
              Book a Service
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-ayu-green/10 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-ayu-dark/80 text-sm">
                <div className="font-bold">50,000+</div>
                <div className="text-xs">Satisfied customers across India</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
