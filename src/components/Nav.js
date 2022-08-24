import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.general}>
      <Link to="/home" style={{ color: "white" }}>
        HOME
      </Link>
      <Link to="/form" style={{ color: "white" }}>
        FORM
      </Link>
    </div>
  );
};
export default Nav;
