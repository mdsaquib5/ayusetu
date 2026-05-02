import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  Heart, 
  LogOut, 
  Search, 
  Bell, 
  Clock, 
  MapPin, 
  Settings
} from "lucide-react";
import { brand, services } from "@/data/landing";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"bookings" | "saved" | "profile">("bookings");

  const myBookings = [
    {
      id: "b1",
      service: services[0],
      date: "Oct 24, 2023",
      time: "10:30 AM",
      status: "Upcoming",
    },
    {
      id: "b2",
      service: services[1],
      date: "Oct 20, 2023",
      time: "07:00 AM",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-ayu-light/50 flex">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-white border-r border-ayu-green/10 flex flex-col items-center lg:items-start py-8 transition-all">
        <Link to="/" className="px-6 mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-ayu-green rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0">
            A
          </div>
          <span className="hidden lg:block font-display text-xl font-bold text-ayu-dark tracking-tight">
            {brand.name}
          </span>
        </Link>

        <nav className="flex-1 w-full px-4 space-y-2">
          {[
            { id: "bookings", icon: Calendar, label: "My Bookings" },
            { id: "saved", icon: Heart, label: "Saved Services" },
            { id: "profile", icon: User, label: "Profile" },
            { id: "explore", icon: Search, label: "Explore Services" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl transition-all ${activeTab === item.id ? "bg-ayu-green text-white shadow-lg shadow-ayu-green/20" : "text-ayu-dark/50 hover:bg-ayu-green/5 hover:text-ayu-green"}`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="hidden lg:block font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-4 w-full mt-auto">
          <Link to="/" className="w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-all">
            <LogOut className="h-5 w-5" />
            <span className="hidden lg:block font-bold text-sm">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-10 max-h-screen overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-ayu-dark">Welcome, Rahul!</h1>
            <p className="text-ayu-dark/60 text-sm mt-1">Check your wellness journey progress.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center border border-ayu-green/10 text-ayu-dark/60 relative">
              <Bell className="h-5 w-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-ayu-saffron rounded-full border-2 border-white" />
            </button>
            <div className="h-10 w-10 rounded-full bg-ayu-green/10 flex items-center justify-center overflow-hidden border border-ayu-green/10">
              <img src="https://i.pravatar.cc/150?u=rahul" alt="User" />
            </div>
          </div>
        </header>

        {activeTab === "bookings" && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-ayu-dark">Recent Bookings</h2>
              <button className="text-ayu-green text-sm font-bold hover:underline">View History</button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {myBookings.map((b) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={b.id}
                  className="bg-white p-6 rounded-[2rem] border border-ayu-green/10 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-all"
                >
                  <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-ayu-light">
                    <img src={b.service.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${b.status === "Upcoming" ? "bg-ayu-green/10 text-ayu-green" : "bg-ayu-dark/10 text-ayu-dark/60"}`}>
                        {b.status}
                      </span>
                      <button className="text-ayu-dark/20 hover:text-ayu-dark"><Settings className="h-4 w-4" /></button>
                    </div>
                    <h3 className="font-bold text-ayu-dark text-lg mb-4">{b.service.title}</h3>
                    <div className="grid grid-cols-2 gap-4 text-xs text-ayu-dark/60">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-ayu-green" />
                        {b.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-ayu-green" />
                        {b.time}
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin className="h-4 w-4 text-ayu-green" />
                        Your Home Address
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-ayu-green/5 p-8 rounded-[2.5rem] border border-ayu-green/10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-ayu-dark mb-2">Looking for something else?</h3>
                <p className="text-ayu-dark/60 text-sm">Explore our Ayurvedic and Mental Wellness sessions tailored for your needs.</p>
              </div>
              <Button className="bg-ayu-green text-white rounded-full px-10 h-12">
                Explore Services
              </Button>
            </div>
          </div>
        )}

        {activeTab === "saved" && (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-ayu-green/20">
            <Heart className="h-16 w-16 text-ayu-green/10 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-ayu-dark mb-2">No saved services yet</h2>
            <p className="text-ayu-dark/60 mb-8 max-w-xs mx-auto">Like a service to see it here for quick access later.</p>
            <Button variant="outline" className="rounded-full border-ayu-green text-ayu-green hover:bg-ayu-green hover:text-white px-8">
              Discover Services
            </Button>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] border border-ayu-green/10">
            <div className="flex flex-col items-center mb-10">
              <div className="h-32 w-32 rounded-full border-4 border-ayu-green/10 p-1 relative mb-6">
                <img src="https://i.pravatar.cc/150?u=rahul" className="w-full h-full rounded-full object-cover" alt="" />
                <button className="absolute bottom-1 right-1 h-8 w-8 bg-ayu-green text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-2xl font-bold text-ayu-dark">Rahul Verma</h2>
              <p className="text-ayu-dark/60">Verified Customer Since Oct 2023</p>
            </div>

            <div className="space-y-6">
              {[
                { label: "Phone Number", value: "+91 98765 43210" },
                { label: "Email Address", value: "rahul.verma@example.in" },
                { label: "Default Address", value: "Apartment 402, Green Valley Towers, Gurgaon" },
              ].map((info) => (
                <div key={info.label} className="flex justify-between items-start py-4 border-b border-ayu-green/5">
                  <div className="text-sm font-bold text-ayu-dark/50">{info.label}</div>
                  <div className="text-sm font-bold text-ayu-dark max-w-[200px] text-right">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
