import HeaderStyles from "../styles/Header.module.css";
import logo from "../assets/images/food_fusion_logo.jpg";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={HeaderStyles.header}>
      <div className={HeaderStyles.logo}>
        <span
          className={HeaderStyles.menu}
          onClick={(e) => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </span>
        <img src={logo} alt="" />
      </div>
      <div className={`${HeaderStyles["nav-cont"]}`}>
        <ul
          className={`${HeaderStyles["nav-items"]}  ${
            isMenuOpen && HeaderStyles.isOpen
          }`}
        >
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
                onClick={(e) => {
                  setIsMenuOpen(false);
                }}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        {isMenuOpen || (
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
        )}
      </div>
    </nav>
  );
}
