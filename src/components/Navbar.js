import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ currentPage }) {
  const allCSS = `nav-item mx-3 ${currentPage === "All" ? "active" : ""}`;
  const searchCSS = `nav-item mx-3 ${currentPage === "Search" ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand navbar-light border w-75 mx-auto my-5">
      <ul className="navbar-nav mx-auto">
        <li className={allCSS}>
          <Link to="/" className="nav-link">
            All
          </Link>
        </li>
        <li className={searchCSS}>
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}
