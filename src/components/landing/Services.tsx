import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, MapPin, X, CheckCircle2 } from "lucide-react";
import { services } from "@/data/landing";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      setSelectedService(null);
      setIsBooked(false);
    }, 2000);
  };

  return (
    <section id="services" className="py-24 bg-ayu-light/50">
      <div className="container mx-auto px-4">
        {/* ... Header remains same ... */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-ayu-green font-bold">Recommended for you</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ayu-dark text-balance">
              Top Rated Wellness <span className="text-ayu-saffron italic">Services</span>
            </h2>
          </div>
          <Button variant="outline" className="rounded-full border-ayu-green text-ayu-green hover:bg-ayu-green hover:text-white transition-all">
            View All Services
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-ayu-green/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-ayu-dark shadow-sm">
                  <Star className="h-3 w-3 text-ayu-saffron fill-ayu-saffron" />
                  {s.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-ayu-green text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {s.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-ayu-dark mb-3 group-hover:text-ayu-green transition-colors">{s.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-ayu-dark/60 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {s.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {s.location}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-ayu-green/10">
                  <div className="text-2xl font-bold text-ayu-dark">
                    ₹{s.price}
                  </div>
                  <Button 
                    onClick={() => setSelectedService(s)}
                    className="rounded-full bg-ayu-green hover:bg-ayu-green/90 text-white px-6"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-ayu-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 text-ayu-dark/40 hover:text-ayu-dark transition-colors"
              >
                <X />
              </button>

              <div className="p-8 md:p-12">
                {isBooked ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-ayu-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-ayu-green" />
                    </div>
                    <h3 className="text-3xl font-bold text-ayu-dark mb-2">Booking Confirmed!</h3>
                    <p className="text-ayu-dark/60">We've sent the details to your email and phone.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <span className="text-xs font-bold text-ayu-green uppercase tracking-widest">Booking Service</span>
                      <h3 className="text-2xl font-bold text-ayu-dark mt-1">{selectedService.title}</h3>
                    </div>

                    <form className="space-y-6" onSubmit={handleBook}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" required className="rounded-xl border-ayu-green/10" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Time</Label>
                          <Input id="time" type="time" required className="rounded-xl border-ayu-green/10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Service Address (India)</Label>
                        <Input id="address" placeholder="Apartment, Street, Area, City" required className="rounded-xl border-ayu-green/10" />
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-ayu-green/5">
                        <div>
                          <div className="text-sm text-ayu-dark/40">Total Amount</div>
                          <div className="text-2xl font-bold text-ayu-dark">₹{selectedService.price}</div>
                        </div>
                        <Button type="submit" className="bg-ayu-green hover:bg-ayu-green/90 text-white rounded-full px-10 h-12">
                          Confirm Booking
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
