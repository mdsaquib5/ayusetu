import { Instagram, Youtube, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { brand } from "@/data/landing";

export default function Footer() {
  return (
    <footer className="bg-ayu-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-ayu-green rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                {brand.name}<span className="text-ayu-saffron">.</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India's premium wellness sanctuary. Connecting traditional Ayurvedic wisdom with modern lifestyle needs.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-ayu-green hover:text-white flex items-center justify-center transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-[0.15em] text-ayu-saffron">Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {["Yoga & Meditation", "Ayurveda Treatments", "Home Spa & Massage", "Diet & Nutrition", "Mental Wellness"].map((l) => (
                <li key={l}><a href="#" className="hover:text-ayu-green transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-[0.15em] text-ayu-saffron">Company</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {["About Us", "Expert Partners", "Careers", "Press", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-ayu-green transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-[0.15em] text-ayu-saffron">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-ayu-green shrink-0" />
                <span>Sector 44, Gurgaon,<br />Haryana, India 122003</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-ayu-green shrink-0" />
                <span>+91 1800-AYU-SETU</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-ayu-green shrink-0" />
                <span>hello@ayusetu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
          <div>© {new Date().getFullYear()} {brand.name} Wellness Pvt Ltd. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
