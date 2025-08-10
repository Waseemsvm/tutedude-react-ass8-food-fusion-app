import HeaderStyles from "../styles/Header.module.css";
import logo from "../assets/images/food_fusion_logo.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Header() {
  const menu = [
    {
      id: "",
      text: "Home",
    },
    {
      id: "menu",
      text: "Menu",
    },
    {
      id: "aboutus",
      text: "About Us",
    },
    {
      id: "contactus",
      text: "Contact Us",
    },
  ];

  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((o, e) => {
    o += e.quantity;
    return o;
  }, 0);

  // useEffect(e => {
  //   let el = document.querySelector(`.${HeaderStyles["cart-btn-items-avl"]}`);
  //   if(el) el
  // }, [count])

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
          {menu.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.id}
                style={({ isActive }) => {
                  if (!isActive) return;
                  return {
                    backgroundColor: "black",
                    color: "white",
                  };
                }}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <span
          className={`${HeaderStyles["cart-btn"]} ${
            count && HeaderStyles["cart-btn-items-avl"]
          }`}
          onClick={(e) => {
            navigate("cart");
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
      </div>
    </nav>
  );
}
