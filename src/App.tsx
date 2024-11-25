import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Page-components/HomePage";
import AboutPage from "./Page-components/AboutPage";
import Lecture1 from "./Page-components/Lecture1";
import Lecture2 from "./Page-components/Lecture2";
import Lecture3 from "./Page-components/Lecture3";
import Lecture4 from "./Page-components/Lecture4";
import Lecture5 from "./Page-components/Lecture5";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Ch1/Lecture1" element={<Lecture1 />} />
          <Route path="/Ch1/Lecture2" element={<Lecture2 />} />
          <Route path="/Ch1/Lecture3" element={<Lecture3 />} />
          <Route path="/Ch1/Lecture4" element={<Lecture4 />} />
          <Route path="/Ch1/Lecture5" element={<Lecture5 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
