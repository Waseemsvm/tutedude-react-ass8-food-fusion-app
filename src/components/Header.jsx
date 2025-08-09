import HeaderStyles from "../styles/Header.module.css";
import logo from "../assets/images/food_fusion_logo.jpg";
export default function Header() {
  return (
    <nav className={HeaderStyles.header}>
      <div className={HeaderStyles.logo}>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className={HeaderStyles["nav-items"]}>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
