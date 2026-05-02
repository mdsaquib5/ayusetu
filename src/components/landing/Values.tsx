import { motion } from "framer-motion";
import { values } from "@/data/landing";

export default function Values() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-ayu-green font-bold">Why AyuSetu</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ayu-dark text-balance">
            Our Commitment to Your <span className="text-ayu-saffron italic">Holistic</span> Health.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-8 rounded-3xl bg-ayu-light/30 border border-ayu-green/10 hover:bg-white hover:shadow-xl hover:shadow-ayu-green/10 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-ayu-green/10 flex items-center justify-center mb-6 group-hover:bg-ayu-green group-hover:scale-110 transition-all duration-500">
                <v.icon className="h-6 w-6 text-ayu-green group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-ayu-dark mb-3">{v.title}</h3>
              <p className="text-ayu-dark/60 leading-relaxed text-sm">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
