import { motion } from "framer-motion";
import { categories } from "@/data/landing";

export default function Features() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-ayu-dark">Our Wellness Categories</h2>
          <p className="text-ayu-dark/60 text-lg">Choose from a wide range of traditional and modern wellness services tailored for your lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-ayu-light hover:bg-ayu-green hover:text-white transition-all duration-300 group cursor-pointer border border-ayu-green/5 shadow-sm hover:shadow-xl hover:shadow-ayu-green/20"
            >
              <div className="w-14 h-14 bg-ayu-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <cat.icon className="h-7 w-7 text-ayu-green group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Experience premium {cat.name.toLowerCase()} services delivered by certified professionals at the comfort of your home.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
