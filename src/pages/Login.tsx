import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { brand } from "@/data/landing";
import { ArrowLeft, Mail, Lock, Phone } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [useOtp, setUseOtp] = useState(false);

  return (
    <div className="min-h-screen bg-ayu-light flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] shadow-xl shadow-ayu-green/5 p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-ayu-green/5 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-ayu-saffron/5 rounded-full -ml-12 -mb-12" />

        <Link to="/" className="inline-flex items-center gap-2 text-ayu-dark/60 hover:text-ayu-green text-sm mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="mb-10 text-center">
          <div className="w-12 h-12 bg-ayu-green rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg shadow-ayu-green/20">
            A
          </div>
          <h1 className="text-3xl font-bold text-ayu-dark">Welcome Back</h1>
          <p className="text-ayu-dark/60 mt-2">Log in to your AyuSetu account</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
          <div className="space-y-4">
            {useOtp ? (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-ayu-dark/30" />
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" className="pl-11 rounded-xl h-12 border-ayu-green/10" />
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-ayu-dark/30" />
                    <Input id="email" type="email" placeholder="name@example.com" className="pl-11 rounded-xl h-12 border-ayu-green/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-xs text-ayu-green hover:underline">Forgot?</a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-ayu-dark/30" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-11 rounded-xl h-12 border-ayu-green/10" />
                  </div>
                </div>
              </>
            )}
          </div>

          <Button type="submit" className="w-full h-12 bg-ayu-green hover:bg-ayu-green/90 text-white rounded-xl text-base font-bold shadow-lg shadow-ayu-green/20">
            {useOtp ? "Send OTP" : "Login"}
          </Button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <button 
            onClick={() => setUseOtp(!useOtp)}
            className="text-sm text-ayu-green font-medium hover:underline"
          >
            {useOtp ? "Login with Email instead" : "Login with Phone + OTP"}
          </button>
          <div className="text-sm text-ayu-dark/60">
            Don't have an account? <Link to="/signup" className="text-ayu-green font-bold hover:underline">Sign up</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
