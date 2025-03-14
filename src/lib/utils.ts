import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Sends a heartbeat request to the server's health endpoint every 12 minutes
 * This is needed to prevent Render free tier from spinning down the server due to inactivity
 */
export function setupHeartbeat() {
  const HEARTBEAT_INTERVAL = 12 * 60 * 1000; // 12 minutes in milliseconds
  
  const sendHeartbeat = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/health`);
      if (response.ok) {
        console.log('heartbeat sent successfully');
      } else {
        console.warn('heartbeat failed with status:', response.status);
      }
    } catch (error) {
      console.error('error sending heartbeat:', error);
    }
  };

  sendHeartbeat();
  
  const intervalId = setInterval(sendHeartbeat, HEARTBEAT_INTERVAL);
  
  return () => clearInterval(intervalId);
}
