import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Page5() {
  const navigate = useNavigate();
  const [wish, setWish] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [sendAnimation, setSendAnimation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!wish.trim()) return;

    setSendAnimation(true); // เริ่ม animation ซองจดหมาย
    setTimeout(() => {
      setShowPopup(true); // popup ขอบคุณ
    }, 800);

    setTimeout(() => {
      navigate("/page6");
    }, 3000);
  };

  return (
    <div className="page5-container">
      <div className={`wish-box ${sendAnimation ? "fly-away" : ""}`}>
        <h1 className="wish-title">🎉 อธิษฐานวันเกิด 🎉</h1>
        <p className="wish-subtitle">พรที่พี่เบนอยากปีนี้คือะไรน้าาา 🥰</p>

        <form onSubmit={handleSubmit} className="wish-form">
          <div className="wish-textarea-wrapper">
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="พิมพ์คำอธิษฐานของคุณ..."
              className="wish-textarea"
            />
          </div>
          <button type="submit" className="wish-btn">
            ส่งคำอธิษฐาน ✨
          </button>
        </form>
      </div>

      {sendAnimation && (
        <div className="confetti-wrapper">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`confetti confetti-${i}`}></div>
          ))}
        </div>
      )}

      {showPopup && (
        <div className="popup-glass">
          <p className="popup-text">
            🎉 ขอให้ทุกคำอธิษฐานของพี่เบนเป็นจริงทุกประการด้วยเถิดดด.... 🎉
          </p>
        </div>
      )}
    </div>
  );
}
