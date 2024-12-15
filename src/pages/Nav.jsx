import React from "react";
import { NavLink } from "react-router-dom";

function Themebtn() {
  return (
    <div className="dropdown mr-10">
      <div tabIndex={0} role="button" className="btn m-1 text-xs">
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            // value="default"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="retro"
            value="retro"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="halloween"
            value="halloween"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="lofi"
            value="lofi"
          />
        </li>

        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="dracula"
            value="dracula"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="fantasy"
            value="fantasy"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="black"
            value="black"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="acid"
            value="acid"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="winter"
            value="winter"
          />
        </li>
      </ul>
    </div>
  );
}

const Nav = () => {
  return (
    <div className="navbar bg-base-300 fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/Health-Metrics-Hub">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/Health-Metrics-Hub/bmi">BMI Cal.</NavLink>
            </li>
            <li>
              <NavLink to="/Health-Metrics-Hub/age">AGE Cal.</NavLink>
            </li>
            <li>
              <NavLink to="/Health-Metrics-Hub/water">
                Water Intake Cal.
              </NavLink>
            </li>
            <li>
              <NavLink to="/Health-Metrics-Hub/sleep">Sleep Cal.</NavLink>
            </li>
            <li>
              <NavLink to="/Health-Metrics-Hub/ideal-weight">
                Ideal Weight Cal.
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <NavLink to="/Health-Metrics-Hub/" className="btn btn-ghost text-xl">
          Health Metrics Hub
        </NavLink>
        <Themebtn />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Nav;
