import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import LazIcon from "./assets/Lazicon.png";
import Soilder from "./assets/เข้ากรม.png"
import Kaoyai from "./assets/เขาใหญ่ให้แหวน.jpg"
import Valentine  from "./assets/Valentine.jpg"
import Series from "./assets/สงกรานต์.jpg"
export default function Page3() {
  const navigate = useNavigate();

  const initialEvents = [
    { id: "1", text: "เขาใหญ่ 16/08" ,img: Kaoyai },
    { id: "2", text: "วาเลนไทน์" , img: Valentine},
    { id: "3", text: "เข้ากรม" , img: Soilder},
    { id: "4", text: "สงกรานต์" , img: Series },
    { id: "5", text: "LazIcon", img: LazIcon },
  ];

  const correctOrder = ["5", "3", "1", "2", "4"];

  const [events, setEvents] = useState(initialEvents);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  // Move up / down
  const moveUp = (index) => {
    if (index === 0) return;
    const newEvents = [...events];
    [newEvents[index - 1], newEvents[index]] = [
      newEvents[index],
      newEvents[index - 1],
    ];
    setEvents(newEvents);
  };

  const moveDown = (index) => {
    if (index === events.length - 1) return;
    const newEvents = [...events];
    [newEvents[index], newEvents[index + 1]] = [
      newEvents[index + 1],
      newEvents[index],
    ];
    setEvents(newEvents);
  };

  const handleCheck = () => {
    const currentOrder = events.map((e) => e.id);
    if (currentOrder.join() === correctOrder.join()) {
      setPopupText("🎉 ถูกต้องนะคร้าบ! 🎉");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/page4");
      }, 4000);
    } else {
      setPopupText("❌ ลำดับผิด ลองใหม่!");
      setShowPopup(true);
    }
  };

  return (
    <div className="page3-container">
      <h1 className="page3-title">🎬 เรียงลำดับเหตุการณ์ให้ถูกต้อง! 🎬</h1>

      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={event.id} className="timeline-card">
            <img src={event.img} alt={event.text} className="event-img" />
            <p>{event.text}</p>
            <div className="move-buttons">
              <button onClick={() => moveUp(index)}>⬆️</button>
              <button onClick={() => moveDown(index)}>⬇️</button>
            </div>
          </div>
        ))}
      </div>

      <button className="check-btn" onClick={handleCheck}>
        Check ✅
      </button>

      {showPopup && (
        <div className="popup-glass">
          <button className="popup-close" onClick={() => setShowPopup(false)}>
            ❌
          </button>
          <p>{popupText}</p>
        </div>
      )}
    </div>
  );
}
