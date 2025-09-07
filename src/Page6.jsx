import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import slide1 from "./assets/IMG_6156.jpg";
import slide2 from "./assets/IMG_6157.jpg";
import slide3 from "./assets/IMG_6158.jpg";
import slide4 from "./assets/IMG_6159.jpg";
import slide5 from "./assets/IMG_6160.jpg";

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
        background:
          "linear-gradient(135deg, #f9e1e7 0%, #e6f0ff 100%)", // soft gradient
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
        wind={0}
      />

      {/* Glass Card Container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
          borderRadius: "30px",
          padding: "35px 30px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "450px",
          width: "95%",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
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
            marginBottom: "30px",
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
            gap: "15px",
          }}
        >
          <button
            onClick={prevSlide}
            style={{
              padding: "12px 16px",
              borderRadius: "50%",
              border: "none",
              background:
                "linear-gradient(135deg, #ff6f91, #ff9671)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.2rem",
              transition: "all 0.3s",
              boxShadow: "0 4px 15px rgba(255,111,145,0.4)",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            ◀
          </button>

          <div
            style={{
              width: "220px",
              height: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
              perspective: "1000px",
              background: "#fff",
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
              padding: "12px 16px",
              borderRadius: "50%",
              border: "none",
              background:
                "linear-gradient(135deg, #6a11cb, #2575fc)",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.2rem",
              transition: "all 0.3s",
              boxShadow: "0 4px 15px rgba(106,17,203,0.4)",
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
