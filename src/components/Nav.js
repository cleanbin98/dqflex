import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="DQflex logo"
        src="https://i.ibb.co/svtr2tD/dqflex-logo.png"
        className="nav__logo"
      />
      <img
        alt="User logged"
        src="https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png"
        className="nav__avatar"
      />
    </nav>
  );
};

export default Nav;
