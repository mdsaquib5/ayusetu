import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/landing";

export default function Testimonial() {
  return (
    <section className="py-24 bg-ayu-light/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-ayu-dark">What Our Users Say</h2>
          <p className="text-ayu-dark/60 text-lg">Real stories from people who transformed their lives with AyuSetu.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-ayu-green/5 relative"
            >
              <Quote className="h-10 w-10 text-ayu-green/10 absolute top-6 right-8" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-ayu-saffron fill-ayu-saffron" />
                ))}
              </div>
              <blockquote className="text-ayu-dark/80 italic mb-8 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-ayu-dark">{t.author}</div>
                <div className="text-ayu-dark/60 text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
