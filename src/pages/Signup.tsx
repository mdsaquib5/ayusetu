import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { brand } from "@/data/landing";
import { ArrowLeft, User, Mail, Lock, ShieldCheck } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"customer" | "provider">("customer");

  return (
    <div className="min-h-screen bg-ayu-light flex items-center justify-center p-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-xl shadow-ayu-green/5 p-8 md:p-12 relative"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-ayu-dark/60 hover:text-ayu-green text-sm mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-ayu-dark">Create Account</h1>
          <p className="text-ayu-dark/60 mt-2">Join India's trusted wellness platform</p>
        </div>

        <div className="flex p-1 bg-ayu-light rounded-2xl mb-10">
          <button 
            onClick={() => setRole("customer")}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${role === "customer" ? "bg-white text-ayu-green shadow-sm" : "text-ayu-dark/50"}`}
          >
            As Customer
          </button>
          <button 
            onClick={() => setRole("provider")}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${role === "provider" ? "bg-white text-ayu-green shadow-sm" : "text-ayu-dark/50"}`}
          >
            As Provider
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
          <div className="space-y-2">
            <Label htmlFor="fullname">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-ayu-dark/30" />
              <Input id="fullname" placeholder="John Doe" className="pl-11 rounded-xl h-12 border-ayu-green/10" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-ayu-dark/30" />
              <Input id="email" type="email" placeholder="john@example.com" className="pl-11 rounded-xl h-12 border-ayu-green/10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Create Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-ayu-dark/30" />
              <Input id="password" type="password" placeholder="••••••••" className="pl-11 rounded-xl h-12 border-ayu-green/10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+91 00000 00000" className="rounded-xl h-12 border-ayu-green/10" />
          </div>

          {role === "provider" && (
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="specialty">Your Specialty</Label>
              <select className="w-full rounded-xl h-12 border-ayu-green/10 px-4 bg-ayu-light/30 focus:outline-ayu-green">
                <option>Ayurveda Therapist</option>
                <option>Yoga Instructor</option>
                <option>Dietician</option>
                <option>Personal Trainer</option>
              </select>
            </div>
          )}

          <div className="md:col-span-2 flex items-start gap-3 mt-4">
            <ShieldCheck className="h-5 w-5 text-ayu-green shrink-0" />
            <p className="text-xs text-ayu-dark/60 leading-relaxed">
              By signing up, you agree to AyuSetu's <a href="#" className="text-ayu-green font-bold">Terms of Service</a> and <a href="#" className="text-ayu-green font-bold">Privacy Policy</a>.
            </p>
          </div>

          <Button type="submit" className="md:col-span-2 h-12 bg-ayu-green hover:bg-ayu-green/90 text-white rounded-xl text-base font-bold mt-4">
            Create {role === "customer" ? "Account" : "Provider Profile"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-ayu-dark/60">
          Already have an account? <Link to="/login" className="text-ayu-green font-bold hover:underline">Log in</Link>
        </div>
      </motion.div>
    </div>
  );
}
