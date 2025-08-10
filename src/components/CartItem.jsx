import { useSelector } from "react-redux";
import CartPageStyles from "../styles/CartPage.module.css";
import { AsyncImage } from "loadable-image";
import ItemCounter from "./ItemCounter";
import rupeeSymbol from "../assets/images/rupee.svg";

export default function CartItem({ id }) {
  const item = useSelector((state) =>
    state.cart.items.find((itm) => itm.id === id)
  );

  return (
    <tr>
      <td>
        <div className={CartPageStyles["item-det"]}>
          <div className={CartPageStyles["img-cont"]}>
            <AsyncImage
              className={CartPageStyles["item-img"]}
              loader={<div style={{ background: "#888" }}>Loading...</div>}
              error={<div style={{ background: "#eee" }} />}
              src={item.image}
            />
          </div>
          <div className={CartPageStyles["item-det-desc"]}>
            <p className={CartPageStyles["item-title"]}>{item.name}</p>
            <p className={CartPageStyles["item-desc"]}>{item.description}</p>
          </div>
        </div>
      </td>
      <td>
        <div className={CartPageStyles["item-counter"]}>
          <ItemCounter id={item.id} />
        </div>
      </td>
      <td className={CartPageStyles["item-qty"]}><embed src={rupeeSymbol} type="text/svg" /> {item.quantity * item.price}</td>
    </tr>
  );
}
