import { useState } from "react";
import $ from "jquery";

import "./Menu.css";
import logo from "../../assets/logo.png";
import ModalLogout from "../Modals/ModalLogout/ModalLogout";

export default function Menu() {
  const [active, setActive] = useState();

  function myfunction() {
    $(".navbar .max-width .menu").toggleClass("active");
    $(".btn-menu i").toggleClass("active");
  }
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <img src={logo} style={{ width: 100 }} alt="logo" />
          </div>
          <ul className="menu">
            <li onClick={() => setActive(true)}>
              <span>Logout</span>
            </li>
          </ul>
          <div className="btn-menu" onClick={() => myfunction()}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      {active === true ? (
        <ModalLogout setActive={setActive} active={active} />
      ) : null}
    </div>
  );
}
