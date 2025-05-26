"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setTime(now);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-white border-t border-neutral-200 px-6 py-6 text-lg sm:text-xl text-neutral-500">
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-start text-left gap-y-4 sm:gap-y-0">
        
        <div className="flex-1">
          <p>New York, NY 📍 (ET)</p>
          <p>{time}</p>
        </div>

        <div className="flex-1 sm:text-right">
          <p>Copyright &copy; {new Date().getFullYear()} Akshat Karwa</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
