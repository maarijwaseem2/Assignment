import React, {useState} from "react";
import { Search } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <svg
          width="42"
          height="39"
          viewBox="0 0 42 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.2435 0.803527C36.8887 2.41541 37.7919 6.04216 36.2435 8.79579L23.4697 31.2951C21.9214 34.0486 18.4378 34.989 15.7926 33.3771C13.1475 31.7652 12.2443 28.1383 13.7927 25.3847L26.5664 2.88555C28.1146 0.0647459 31.534 -0.808357 34.2435 0.803527Z"
            fill="#01274E"
          />
          <path
            d="M3.78355 34.8787C7.42863 39.4615 15.2489 39.528 23.0031 35.6758C16.9058 38.2661 11.0074 38.0003 8.15763 34.4137C4.31374 29.5653 7.62744 20.4663 15.6466 14.0237C23.6659 7.58118 33.2755 6.31925 37.1857 11.1677C38.9751 13.4259 39.24 16.5475 38.1797 19.9348C40.0354 15.352 39.9693 10.902 37.5171 7.84684C32.9441 2.06854 21.6113 3.4633 12.3329 10.9685C2.98827 18.3407 -0.855623 29.1004 3.78355 34.8787Z"
            fill="#0154AA"
          />
          <path
            d="M37.7659 21.3668C37.7659 21.3668 40.4716 17.8283 41.1896 14.5337C41.1896 14.5337 40.4716 15.8149 39.312 16.3641C39.312 16.3641 38.1524 20.6348 37.7659 21.3668Z"
            fill="#0154AA"
          />
          <path
            d="M4.95434 16.2407C6.80554 13.8339 9.06808 11.4938 11.6734 9.48817C12.3591 8.9533 13.1132 8.41846 13.7989 7.95047L11.262 3.73853C9.54805 0.930577 5.91422 0.0614539 3.03459 1.66599C0.223527 3.27053 -0.736354 6.88076 0.909153 9.62187L4.95434 16.2407Z"
            fill="#0154AA"
          />
          <path
            d="M13.749 32.1378C14.2581 33.0137 14.8944 33.6873 15.7217 34.2261C18.3308 35.8428 21.7671 34.9671 23.2944 32.1378L23.4218 31.8686L27.4946 24.5263C27.0492 25.2671 24.6945 28.3658 22.5308 24.9304L18.4581 17.6554L17.6945 16.2409C17.5671 16.3757 17.4399 16.443 17.3126 16.5776C14.0036 19.4069 11.5216 22.9095 10.3762 26.1428L13.749 32.1378Z"
            fill="#0154AA"
          />
        </svg>

        <div className="logo">Find Job</div>
        <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#">Top Companies</a>
          <a href="#" className="icon-link">Documents</a>
          <a href="#" className="icon-link">My Calendar</a>
          <a href="#" className="icon-link">Messages</a>
          <a href="#" className="icon-link">Notifications</a>
        </nav>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <button className="resume-button">Resume Builder</button>
        <div className="profile-image">
          <img
            src="profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
}
