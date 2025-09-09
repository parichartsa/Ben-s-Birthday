import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ⬅ เพิ่มอันนี้
import Confetti from "react-confetti";

// Import รูป
import slide1 from "./assets/IMG_6156.jpg";
import slide2 from "./assets/IMG_6157.jpg";
import slide3 from "./assets/IMG_6158.jpg";
import slide4 from "./assets/IMG_6159.jpg";
import slide5 from "./assets/IMG_6160.jpg";

// Import เพลง
import birthdaySong from "./assets/โลกทั้งใบ.mp3";

export default function Page6() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flip, setFlip] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [slide1, slide2, slide3, slide4, slide5];
  const audioRef = useRef(null);
  const navigate = useNavigate(); // ⬅ ใช้สำหรับเปลี่ยนหน้า

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay เพลง
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch((err) => {
        console.log("Autoplay ถูกบล็อก:", err);
        setIsPlaying(false);
      });
    }
  }, []);

  const nextSlide = () => {
    setFlip(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFlip(false);
    }, 300);
  };

  const prevSlide = () => {
    setFlip(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFlip(false);
    }, 300);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #f9e1e7 0%, #e6f0ff 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Confetti */}
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={300}
        recycle={true}
        gravity={0.2}
      />

      {/* Audio */}
      <audio ref={audioRef} src={birthdaySong} autoPlay loop muted />

      {/* ปุ่มเปิด/ปิดเพลง */}
      <button
        onClick={toggleMusic}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "14px 20px",
          borderRadius: "30px",
          border: "none",
          background: isPlaying
            ? "linear-gradient(135deg, #ff6f91, #ff9671)"
            : "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "#fff",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0 5px 15px rgba(0,0,0,0.25)",
          transition: "all 0.3s ease",
        }}
      >
        {isPlaying ? "⏸ Stop Music" : "▶ Play Music"}
      </button>

      {/* Glass Card Container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(25px) saturate(180%)",
          WebkitBackdropFilter: "blur(25px) saturate(180%)",
          borderRadius: "30px",
          padding: "45px 40px",
          boxShadow: "0 15px 50px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          width: "95%",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.35)",
          transition: "all 0.3s ease",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#ff4d6d",
            marginBottom: "18px",
            textShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          🎉 สุขสันต์วันเกิดนะคะ 🎉
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#333",
            marginBottom: "38px",
            lineHeight: "1.7",
          }}
        >
          ขอให้พี่เบนมีแต่ความสุข ความรัก และความทรงจำดี ๆ
          ที่เติมเต็มทุกวันของชีวิตนะค้าาา~ 🥰
        </p>

        {/* Slider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px", // ปุ่มเหมือนเดิม
          }}
        >
          <button
            onClick={prevSlide}
            style={{
              fontSize: "1.2rem",
              padding: "6px 10px",
              borderRadius: "10px",
              border: "none",
              background: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          >
            ◀
          </button>

          <div
            style={{
              width: "240px",
              height: "340px",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
              perspective: "1000px",
              background: "#fff",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            <img
              src={slides[currentSlide]}
              alt={`slide-${currentSlide}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s ease",
                transformStyle: "preserve-3d",
                transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            />
          </div>

          <button
            onClick={nextSlide}
            style={{
              fontSize: "1.2rem",
              padding: "6px 10px",
              borderRadius: "10px",
              border: "none",
              background: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            }}
          >
            ▶
          </button>
        </div>

        {/* ปุ่มไปหน้า Countdown */}
        <button
          onClick={() => navigate("/page7")}
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(12px) saturate(160%)",
            WebkitBackdropFilter: "blur(12px) saturate(160%)",
            color: "#333",
            fontSize: "1.2rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.color = "#ff4d6d";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.color = "#333";
          }}
        >
          หน้าถัดไปค้าบบ~
        </button>
      </div>
    </div>
  );
}
