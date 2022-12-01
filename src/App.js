import { Route, Routes } from "react-router-dom";
import "./App.css";
import Exercise1 from "./Exercise1";
import Tutorial from "./Tutorial";
import Home from "./Home";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Exercise1" element={<Exercise1 />} />
          <Route path="Tutorial" element={<Tutorial />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
