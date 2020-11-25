import React, { Component } from "react";
import styles from "./navbar.module.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <img src={logo} />
        Food Corner
      </a>
    </div>
  );
};

export default Navbar;
