import './App.css';
import cakeImg from './assets/cake.png';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1 className="birthday-text">
        Happy Birthday to P'Ben 🎉
      </h1>
      <img src={cakeImg} alt="Cake" className="cake-img" />
      <Link to="/next" className="start-btn">
        Start
      </Link>
    </div>
  );
}
