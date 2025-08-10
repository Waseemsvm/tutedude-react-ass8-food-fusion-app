import MenuPageStyles from "../styles/MenuPage.module.css";
// import image from "../assets/items/aloo_paratha.jpeg";
import { AsyncImage } from "loadable-image";
import vegSymbol from "../assets/images/Veg_symbol.svg";
import NonVegSymbol from "../assets/images/Non_veg_symbol.svg";
import rupeeSymbol from '../assets/images/rupee.svg';

export default function MenuItem({ item }) {
  // let src = image;
  const { name, description, price, image, veg, rating } = item;
  return (
    <div className={`${MenuPageStyles["menu-item"]}`} title={description}>
      <div className={MenuPageStyles["img-cont"]}>
        <AsyncImage
          className={MenuPageStyles["item-img"]}
          loader={<div style={{ background: "#888" }}>Loading...</div>}
          error={<div style={{ background: "#eee" }} />}
          // src={"https://picsum.photos/200/300"}
          src={image}
        />
      </div>
      <img
        src={veg ? vegSymbol : NonVegSymbol}
        alt="veg-item"
        className={MenuPageStyles["veg-item-symbol"]}
      />
      <div className={MenuPageStyles["item-details-cont"]}>
        <p className={MenuPageStyles["item-title"]}>{name}</p>
        <p className={MenuPageStyles["item-desc"]}>{description}</p>
        <div className={MenuPageStyles["item-price-cont"]}>
          <p><img className={MenuPageStyles['rupee-symbol']} src={rupeeSymbol} alt="" /> {price}</p>
          <button className={MenuPageStyles["add-to-cart-btn"]}>+</button>
        </div>
      </div>
    </div>
  );
}
