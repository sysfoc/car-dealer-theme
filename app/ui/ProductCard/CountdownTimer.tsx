"use client";
import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

export const CountdownTimer = ({targetTime}: { targetTime: string}) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date(targetTime).getTime();
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = targetDate - currentTime;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const targetDate = new Date(targetTime);
  const totalDuration = targetDate.getTime() - new Date().getTime();
  const progress = totalDuration > 0 ? (timeRemaining / totalDuration) * 100 : 0;

  return (
    <div className="flex items-center justify-start gap-3 w-full relative">
      {/* Progress Bar Container */}
      <div className="w-1/2 bg-gray-300 h-1 rounded-full ml-2 relative">
        {/* Progress Bar */}
        <div
          className="h-full bg-orange-500  rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Moving Icon */}
        {timeRemaining > 0 && (
          <FaClock
            className="absolute bottom-[-5px] bg-gray-50 transition-all text-orange-500 duration-1000"
            style={{
              left: `${progress}%`,
              transform: "translateX(-50%)", // Centering the icon
            }}
          />
        )}
      </div>

      {/* Time Display */}
      <div className="flex items-center font-bold text-xs text-gray-600">
        {timeRemaining > 24 * 60 * 60 * 1000 && (
          <span>{days.toString().padStart(2, "0")}:</span>
        )}
        <span>{hours.toString().padStart(2, "0")}:</span>
        <span>{minutes.toString().padStart(2, "0")}:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>
    </div>
  );
};
