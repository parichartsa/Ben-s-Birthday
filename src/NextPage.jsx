import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import './App.css';
import fireworksImg from './assets/aniversary.png';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';

export default function NextPage() {
  const PIN_LENGTH = 4;
  const [pin, setPin] = useState(Array(PIN_LENGTH).fill(""));
  const [showAnimation, setShowAnimation] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate(); // <-- สร้าง navigate

  const images = [img1, img2, img3, img4, img5, img6];

  const handleChange = (value, idx) => {
    if (/^\d$/.test(value)) {
      const newPin = [...pin];
      newPin[idx] = value;
      setPin(newPin);
      if (idx < PIN_LENGTH - 1) {
        inputsRef.current[idx + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      const newPin = [...pin];
      if (pin[idx] !== "") {
        newPin[idx] = "";
        setPin(newPin);
      } else if (idx > 0) {
        inputsRef.current[idx - 1].focus();
        const prevPin = [...pin];
        prevPin[idx - 1] = "";
        setPin(prevPin);
      }
    } else if (/^\d$/.test(e.key)) {
      handleChange(e.key, idx);
    }
  };

  const handleNumberClick = (num) => {
    const idx = pin.findIndex(p => p === "");
    if (idx !== -1) handleChange(num, idx);
  };

  const handleClear = () => {
    const idx = pin.slice().reverse().findIndex(p => p !== "");
    if (idx !== -1) {
      const realIdx = PIN_LENGTH - 1 - idx;
      const newPin = [...pin];
      newPin[realIdx] = "";
      setPin(newPin);
      inputsRef.current[realIdx].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.join("") === "1608") {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        navigate("/next2"); // <-- เปลี่ยนเป็นหน้าถัดไปของคุณ
      }, 4000);
    } else {
      alert("❌ หึ้ยยย....นึกดูดี ๆ ");
    }
  };

  return (
    <div className="container">
      {showAnimation && (
        <div className="animation-container">
          <img src={fireworksImg} alt="Fireworks" className="animation-img" />
          <p className="animation-text">🎉✨ ถูกต้องนะคร้าบ ✨🎉</p>
        </div>
      )}

      {/* Floating celebrity images */}
      {images.map((img, idx) => (
        <img key={idx} src={img} alt={`celeb-${idx}`} className={`floating-img floating-${idx}`} />
      ))}

      <h1 className="birthday-text">รหัสคือวันครบรอบอู๋โรดดด...🥰</h1>

      <form onSubmit={handleSubmit} className="atm-form">
        <div className="atm-inputs">
          {pin.map((num, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={num}
              ref={el => inputsRef.current[idx] = el}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              onChange={() => {}}
              autoFocus={idx === 0}
            />
          ))}
        </div>

        <div className="keypad">
          {[1,2,3,4,5,6,7,8,9].map(num => (
            <button
              type="button"
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="key-btn"
            >
              {num}
            </button>
          ))}
          <button type="button" onClick={() => handleNumberClick("0")} className="key-btn">
            0
          </button>
          <button type="button" onClick={handleClear} className="key-btn clear-btn">
            Clear
          </button>
        </div>

        <button type="submit" className="submit-btn">Submit ✨</button>
      </form>
    </div>
  );
}
