import { Fragment } from "react";
import logo from "../../logo.png";
import styles from "./Launchscreen.module.css";
import Login from "../../components/Login/Login";
import Modal from "../../components/Modal/Modal";
export default function Launchscreen() {
  return (
    <Fragment>
      <header className={styles.Container_logo}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <Login />
      <Modal />
    </Fragment>
  );
}
