import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router basename="/Ben-s-Birthday">
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
