import HeaderStyles from "../styles/Header.module.css";
import logo from "../assets/images/food_fusion_logo.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <nav className={HeaderStyles.header}>
      <div className={HeaderStyles.logo}>
        <span className={HeaderStyles.menu}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <img src={logo} alt="" />
      </div>
      <div className={HeaderStyles["nav-cont"]}>
        <ul className={HeaderStyles["nav-items"]}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <span className={HeaderStyles["cart-btn"]}>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
      </div>
    </nav>
  );
}
