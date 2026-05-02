import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-ayu-green/10"
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-ayu-green rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-ayu-saffron transition-colors duration-300">
            A
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-ayu-dark">
            AyuSetu<span className="text-ayu-saffron">.</span>
          </span>
        </Link>
        
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-ayu-dark/80">
          {links.map((l) => (
            <li key={l.name}>
              {l.href.startsWith("#") ? (
                <a href={l.href} className="hover:text-ayu-green transition-colors">{l.name}</a>
              ) : (
                <Link to={l.href} className="hover:text-ayu-green transition-colors">{l.name}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/login" className="hidden sm:block">
            <Button variant="ghost" className="text-ayu-dark/70 hover:text-ayu-green">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="default" className="rounded-full bg-ayu-green hover:bg-ayu-green/90 text-white px-6">
              Join
            </Button>
          </Link>
          <button 
            className="md:hidden p-2 text-ayu-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-ayu-green/10 overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {links.map((l) => (
                <li key={l.name}>
                  {l.href.startsWith("#") ? (
                    <a 
                      href={l.href} 
                      className="block text-lg font-medium text-ayu-dark py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {l.name}
                    </a>
                  ) : (
                    <Link 
                      to={l.href} 
                      className="block text-lg font-medium text-ayu-dark py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {l.name}
                    </Link>
                  )}
                </li>
              ))}
              <hr className="border-ayu-green/5" />
              <li>
                <Link to="/login" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-ayu-green py-2">Login</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
