import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

export default function Page2() {
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const choices = [
    { id: "A", text: "Century of Love" },
    { id: "B", text: "404 สุขีนิรันดร์ RUN RUN" },
    { id: "C", text: "รักไม่รู้ภาษา" }, // ถูก
    { id: "D", text: "The Wicked Game" },
  ];

  const handleSelect = (id) => {
    setSelected(id);
    const correct = id === "C";
    setIsCorrect(correct);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      if (correct) {
        navigate("/page3"); // ไปหน้าถัดไปอัตโนมัติ
      }
    }, 2000); // popup แสดง 2 วิ
  };

  return (
    <div className="page2-container">
      <div className="page2-box">
        <h1 className="page2-box-title">🎉 แล้วซีรี่ย์เรื่องแรกหล่ะ 🎉</h1>
        <p className="page2-box-subtitle">เรื่องอะไรน้าาา 🥳</p>

        <div className="choices-container">
          {choices.map((choice) => (
            <button
              key={choice.id}
              className={`choice-btn ${selected === choice.id ? "selected" : ""}`}
              onClick={() => handleSelect(choice.id)}
            >
              {choice.id}. {choice.text}
            </button>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className={`popup ${isCorrect ? "correct" : "wrong"}`}>
          {isCorrect ? "🎉 ถูกต้องนะคร้าบบ! 🎉" : "😅 อ้าววว ไหนบอกว่า FC ❌"}
        </div>
      )}
    </div>
  );
}
