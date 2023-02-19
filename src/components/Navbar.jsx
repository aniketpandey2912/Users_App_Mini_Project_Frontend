import React from "react";
import { NavLink } from "react-router-dom";
import { prodUrl } from "./utilities";

let token = localStorage.getItem("token") || undefined;
let displayName = localStorage.getItem("displayName") || undefined;

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("displayName");
    window.location.href = prodUrl + "login";
  };

  return (
    <div id="navbar" style={navbarStyle}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        end
      >
        About
      </NavLink>

      {!token && !displayName ? (
        <NavLink
          to="/signup"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          end
        >
          SignUp
        </NavLink>
      ) : null}

      {!token && !displayName ? (
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          end
        >
          Login
        </NavLink>
      ) : null}

      {token && displayName ? (
        <h3 style={displayNameStyle}>{displayName}</h3>
      ) : null}

      {token && displayName ? (
        <button style={btnStyle} onClick={handleLogout}>
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;

const activeStyle = {
  color: "yellow",
  textDecoration: "none",
};

const inactiveStyle = {
  color: "white",
  textDecoration: "none",
};

const btnStyle = {
  padding: "5px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

const displayNameStyle = {
  color: "orange",
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "black",
  color: "white",
  position: "sticky",
  top: 0,
  zIndex: 1,
  //   border: "2px solid red",
};
