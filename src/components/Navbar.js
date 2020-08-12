import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ currentPage }) {
  const allCSS = `nav-item mx-2 ${currentPage === "All" ? "active" : ""}`;
  const searchCSS = `nav-item mx-2 ${currentPage === "Search" ? "active" : ""}`;

  return (
    <nav class="navbar navbar-expand navbar-light border w-75 mx-auto mb-5">
      <ul class="navbar-nav mx-auto">
        <li class={allCSS}>
          <Link to="/" className="nav-link">
            All
          </Link>
        </li>
        <li class={searchCSS}>
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}
