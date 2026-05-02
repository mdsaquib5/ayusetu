import { motion } from "framer-motion";
import { stats } from "@/data/landing";

export default function Stats() {
  return (
    <section className="py-24 md:py-32 bg-ayu-green text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--ayu-saffron)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--ayu-saffron)) 0%, transparent 50%)"
      }} />
      <div className="container mx-auto relative px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-3 text-white">{s.value}</div>
              <div className="text-white/70 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
