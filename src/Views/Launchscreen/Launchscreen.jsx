import { Fragment } from "react";
import logo from "../../assets/logo.png";
import styles from "./Launchscreen.module.css";
import Login from "../../components/Login/Login";
export default function Launchscreen() {
  return (
    <Fragment>
      <header className={styles.Container_logo}>
        <img src={logo} className={styles.logo} alt="logo" />{" "}
      </header>
      <div className={styles.container_login}>
        <Login />
      </div>
    </Fragment>
  );
}
