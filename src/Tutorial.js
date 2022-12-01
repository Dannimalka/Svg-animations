import "./App.css";
import "./SVGstylings.css";
import Clock from "./Clock";
import Hills from "./Hills";
import Time from "./Time";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="background">
        <div className="gradient">
          <div className="sun"></div>
          <div className="cloud one"></div>
          <div className="cloud two"></div>
          <div className="cloud three"></div>
          <Time />
          <Clock />
          <Hills />
        </div>
      </div>
      <Link className="button exerciseButton" to="/">
        Back Home
      </Link>
    </>
  );
}

export default App;
