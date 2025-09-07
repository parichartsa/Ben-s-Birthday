import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // หน้าแรก
import NextPage from "./NextPage"; // หน้า PIN
import Page2 from "./Page2"; // หน้าต่อไป
import Page3 from "./Page3";
import Page4 from "./Page4"
import Page5 from "./Page5";
import Page6 from "./Page6";

export default function App() {
  return (
<Router basename="/Ben-s-Birthday/">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/next" element={<NextPage />} />
    <Route path="/next2" element={<Page2 />} />
    <Route path="/page3" element={<Page3 />} />
    <Route path="/page4" element={<Page4 />} />
    <Route path="/page5" element={<Page5 />} />
    <Route path="/page6" element={<Page6 />} />
  </Routes>
</Router>

  );
}
