import "./Menu.css";
import $ from "jquery";
import logo from "../../logo.png";
export default function Menu() {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  function myfunction() {
    $(".navbar .max-width .menu").toggleClass("active");
    $(".btn-menu i").toggleClass("active");
  }
  return (
    <div>
      <nav class="navbar">
        <div class="max-width">
          <div class="logo">
            <img src={logo} style={{ width: 100 }} alt="logo" />
          </div>
          <ul class="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre mi</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#Proyects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contactos</a>
            </li>
          </ul>
          <div class="btn-menu" onClick={() => myfunction()}>
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
