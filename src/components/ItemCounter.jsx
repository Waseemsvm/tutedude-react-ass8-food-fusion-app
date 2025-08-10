import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/CartSlice";
import ItemCounterStyles from "../styles/MenuPage.module.css";

export default function ItemCounter({ id }) {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.items.find((itm) => itm.id === id)
  );
  return (
    <div className={ItemCounterStyles["item-counter"]}>
      <button
        className={ItemCounterStyles["item-counter-btn"]}
        onClick={(e) => {
          dispatch(removeItem(item));
        }}
      >
        -
      </button>
      <span className={ItemCounterStyles["item-counter-disp"]}>
        {item.quantity}
      </span>
      <button
        className={ItemCounterStyles["item-counter-btn"]}
        onClick={(e) => {
          dispatch(addItem(item));
        }}
      >
        +
      </button>
    </div>
  );
}
