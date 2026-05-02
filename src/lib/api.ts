import { services, categories } from "@/data/landing";

export const api = {
  services: {
    getAll: async () => {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => resolve(services), 500);
      });
    },
    getById: async (id: string) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(services.find(s => s.id === id)), 300);
      });
    }
  },
  categories: {
    getAll: async () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(categories), 300);
      });
    }
  },
  bookings: {
    create: async (bookingData: any) => {
      console.log("Creating booking:", bookingData);
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, id: Math.random().toString(36).substr(2, 9) }), 1000);
      });
    },
    getUserBookings: async (userId: string) => {
      console.log("Fetching bookings for user:", userId);
      return new Promise((resolve) => {
        setTimeout(() => resolve([]), 500);
      });
    }
  },
  users: {
    getProfile: async (userId: string) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id: userId, name: "Rahul Verma", email: "rahul@example.in" }), 400);
      });
    },
    updateProfile: async (userId: string, data: any) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, ...data }), 800);
      });
    }
  }
};
