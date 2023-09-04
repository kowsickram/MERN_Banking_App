import "./pagestyle.css";

import logo from "./bgnobg.png";
import "./Animate.css";

export default function Home() {
  return (
    <div className="Home-page">
      <center>
        <svg viewBox="0 0 920 200">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Bad Bank
          </text>
        </svg>
        <img src={logo} alt="#" style={{ maxWidth: "100%" }} />
      
      </center>
      <footer>
        <p>&copy; BAD BANK 2023 | All Rights Reserved.</p>
        <center>
          <p>Contact Us - 0421 2323 4322</p>
        </center>
      </footer>
    </div>
  );
}
