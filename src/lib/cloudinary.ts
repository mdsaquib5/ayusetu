/**
 * Cloudinary utility for AyuSetu
 * Handles image transformations and URL generation
 */

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "demo";

export const getCloudinaryUrl = (path: string, transformations: string = "f_auto,q_auto,w_800") => {
  // If it's already a full URL (like Unsplash), return as is
  if (path.startsWith("http")) return path;
  
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/ayusetu/${path}`;
};

export const cloudinaryFolders = {
  services: "services",
  users: "users",
};
