import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import confettiImg from './assets/เขาใหญ่ให้แหวน.jpg'; // <-- ใส่ไฟล์ confetti

export default function Page4() {
  const navigate = useNavigate();

  const correctSequence = ["1", "2", "3", "4"];
  const [userSequence, setUserSequence] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  const handleTap = (id) => {
    const newSequence = [...userSequence, id];
    setUserSequence(newSequence);

    for (let i = 0; i < newSequence.length; i++) {
      if (newSequence[i] !== correctSequence[i]) {
        setPopupText("❌ ผิด ลองใหม่!");
        setShowPopup(true);
        setUserSequence([]);
        return;
      }
    }

    if (newSequence.length === correctSequence.length) {
      setPopupText("🎉 ถูกต้องนะคร้าบ! 🎉");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/page5");
      }, 2000);
    }
  };

  return (
    <div className="page4-container">
      <h1 className="page4-title">🔥 Tap Challenge 🔥</h1>
      <p>แตะปุ่มตามลำดับที่ถูกต้อง!</p>

      <div className="tap-buttons">
        <button className="tap-btn yellow" onClick={() => handleTap("4")}>
          4
        </button>
        <button className="tap-btn red" onClick={() => handleTap("1")}>
          1
        </button>
        <button className="tap-btn blue" onClick={() => handleTap("3")}>
          3
        </button>
        <button className="tap-btn green" onClick={() => handleTap("2")}>
          2
        </button>
      </div>

      {showPopup && (
        <div className="popup-glass">
          <img src={confettiImg} alt="Celebration" className="popup-img" />
          <p>{popupText}</p>
        </div>
      )}
    </div>
  );
}
