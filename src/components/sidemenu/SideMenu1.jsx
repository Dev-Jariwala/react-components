import React, { useState } from "react";
import "./style.css";
// Other styled components can be defined similarly...

// Create your functional component
const SideMenu1 = () => {
  const [sidebar, setSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`body ${darkMode ? "dark" : ""}`}>
      <nav className={`sidebar ${sidebar ? "" : "close"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Codinglab</span>
              <span className="profession">Web developer</span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle"
            onClick={() => setSidebar((prev) => !prev)}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search Ganes..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Likes</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li
              className="mode"
              onClick={() => {
                setDarkMode((prev) => !prev);
              }}
            >
              <div className="sun-moon">
                {darkMode ? (
                  <i className="bx bx-sun icon sun"></i>
                ) : (
                  <i className="bx bx-moon icon moon"></i>
                )}
              </div>
              <span className="mode-text text">
                {darkMode ? "Light mode" : "Dark mode"}
              </span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      <section className="home">
        <div className="text">Dashboard Sidebar</div>
      </section>
    </div>
  );
};

export default SideMenu1;
