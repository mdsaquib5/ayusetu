import { Sparkles, Leaf, Heart, Sunrise, MapPin, Phone, Mail, Instagram, Youtube, Twitter, Brain, Activity, UserCheck } from "lucide-react";

export const brand = {
  name: "AyuSetu",
  tagline: "India's Trusted Wellness Platform",
};

export const categories = [
  { id: "yoga", name: "Yoga & Meditation", icon: Sunrise },
  { id: "ayurveda", name: "Ayurveda Treatments", icon: Leaf },
  { id: "spa", name: "Home Spa & Massage", icon: Heart },
  { id: "diet", name: "Diet & Nutrition", icon: Sparkles },
  { id: "fitness", name: "Fitness Training", icon: Activity },
  { id: "mental", name: "Mental Wellness", icon: Brain },
];

export const values = [
  { icon: Leaf, title: "Authentic Ayurveda", description: "Traditional wisdom combined with modern convenience." },
  { icon: UserCheck, title: "Expert Practitioners", description: "Vetted and certified wellness experts at your service." },
  { icon: MapPin, title: "At Your Doorstep", description: "Premium wellness services in the comfort of your home." },
  { icon: Heart, title: "Holistic Health", description: "Addressing physical, mental, and emotional well-being." },
];

export const locations = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune"
];

export const services = [
  {
    id: "1",
    title: "Ayurvedic Full Body Massage",
    category: "Home Spa & Massage",
    price: "2499",
    duration: "90 min",
    location: "Mumbai",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "Home Yoga Trainer",
    category: "Yoga & Meditation",
    price: "1500",
    duration: "60 min",
    location: "Delhi",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Panchakarma Therapy",
    category: "Ayurveda Treatments",
    price: "3999",
    duration: "120 min",
    location: "Bangalore",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    title: "Online Diet Consultation",
    category: "Diet & Nutrition",
    price: "999",
    duration: "45 min",
    location: "All India",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    title: "Stress Relief Meditation",
    category: "Mental Wellness",
    price: "799",
    duration: "30 min",
    location: "Hyderabad",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    title: "Personal Fitness Training",
    category: "Fitness Training",
    price: "1800",
    duration: "60 min",
    location: "Pune",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  },
];

export const stats = [
  { value: "50K+", label: "Happy Users" },
  { value: "1.2K+", label: "Expert Partners" },
  { value: "15+", label: "Indian Cities" },
  { value: "4.9", label: "Average Rating" },
];

export const testimonials = [
  {
    quote: "The Ayurvedic massage at home was exceptional. The therapist was professional and the experience was deeply relaxing.",
    author: "Aditi Sharma",
    role: "Bangalore Resident",
  },
  {
    quote: "AyuSetu's yoga trainers are top-notch. I've seen a significant improvement in my flexibility and mental peace.",
    author: "Rahul Verma",
    role: "Mumbai Professional",
  },
  {
    quote: "The diet consultation was very practical. They didn't just give a chart but explained the 'why' behind everything.",
    author: "Priya Iyer",
    role: "Delhi Entrepreneur",
  },
];
