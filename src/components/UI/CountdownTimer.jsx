import React from 'react'

import { useEffect, useState } from "react";

const CountdownTimer = ({ expiryDate }) => {
  const calculateTimeLeft = () => {
    const now = Date.now();
    const expiry = new Date(expiryDate).getTime();
    const diff = expiry - now;

    if (diff <= 0) return null;

    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [expiryDate, timeLeft]);

  if (!timeLeft) return null;

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="de_countdown">
      <span className="timer__hours">{pad(timeLeft.hours)}h</span>:
      <span className="timer__minutes">{pad(timeLeft.minutes)}m</span>:
      <span className="timer__seconds">{pad(timeLeft.seconds)}s</span>
    </div>
  );
};

export default CountdownTimer;
