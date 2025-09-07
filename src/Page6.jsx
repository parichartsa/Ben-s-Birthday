import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

// Import รูปแบบ ES Module
import slide1 from './assets/IMG_6156.jpg';
import slide2 from './assets/IMG_6157.jpg';
import slide3 from './assets/IMG_6158.jpg';
import slide4 from './assets/IMG_6159.jpg';
import slide5 from './assets/IMG_6160.jpg';

export default function Page6() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flip, setFlip] = useState(false);

  const slides = [slide1, slide2, slide3, slide4, slide5];

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

      {/* Glass Card Container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderRadius: "30px",
          padding: "40px 35px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "480px",
          width: "95%",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        <h1
          style={{
            fontSize: "2.3rem",
            color: "#ff4d6d",
            marginBottom: "15px",
            textShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          🎉 สุขสันต์วันเกิดนะคะ 🎉
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "#333",
            marginBottom: "35px",
            lineHeight: "1.6",
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
            gap: "20px",
          }}
        >
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            style={{
              padding: "14px 18px",
              borderRadius: "50%",
              border: "none",
              background: "linear-gradient(135deg, #ff6f91, #ff9671)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.3rem",
              transition: "all 0.3s",
              boxShadow: "0 5px 15px rgba(255,111,145,0.4)",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            ◀
          </button>

          {/* Card */}
          <div
            style={{
              width: "240px",
              height: "340px",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
              perspective: "1000px",
              background: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <img
              src={slides[currentSlide]} // ใช้ import image
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

          {/* Next Button */}
          <button
            onClick={nextSlide}
            style={{
              padding: "14px 18px",
              borderRadius: "50%",
              border: "none",
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.3rem",
              transition: "all 0.3s",
              boxShadow: "0 5px 15px rgba(106,17,203,0.4)",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
