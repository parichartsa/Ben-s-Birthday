import { useEffect, useState } from "react";
import "./App.css";
import backgroundMusic from "./assets/รักคุณเข้าอีกแล้ว (mp3cut.net).mp3";

export default function CountdownPage() {
  // โค้ด countdown ของคุณเหมือนเดิม
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 10);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    let time = {};
    if (difference > 0) {
      time = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      time = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="body-gradient">
      {/* เพลง Background */}
      <audio autoPlay loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Title */}
      <h1 className="countdown-title">
        อีกไม่นานก็จะได้เจอกันแล้ววว 💖
      </h1>

      {/* Countdown Grid */}
      <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", zIndex: 10 }}>
        {["months","days","hours","minutes","seconds"].map((unit) => (
          <div key={unit} className="glass-card">
            <p className="countdown-number">{timeLeft[unit]}</p>
            <p className="countdown-unit">
              {unit === "months" ? "เดือน" : unit === "days" ? "วัน" : unit === "hours" ? "ชั่วโมง" : unit === "minutes" ? "นาที" : "วินาที"}
            </p>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="countdown-footer">
        อีก {timeLeft.months} เดือน {timeLeft.days} วัน เจอกันนะ ✨
      </p>

      {/* Overlay */}
      <div className="gradient-overlay"></div>
    </div>
  );
}
