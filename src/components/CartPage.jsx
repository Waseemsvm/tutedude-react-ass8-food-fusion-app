import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartPageStyles from "../styles/CartPage.module.css";
import rupeeSymbol from "../assets/images/rupee.svg";
import { useNavigate } from "react-router";
import emptyCartImg from "../assets/images/empty-cart.svg";

export default function CartPage() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = cartItems.reduce((acc, itm) => {
    acc += itm.quantity * itm.price;
    return acc;
  }, 0);
  const shipCharge = 250;
  const discount = 10;
  const tax = 7;
  const total = subTotal - subTotal * 0.1 + subTotal * 0.1 * (tax / 100);
  const grandTotal = (total + shipCharge).toFixed(2);
  return (
    <div className={CartPageStyles["cart-page"]}>
      <h3>MyCart</h3>
      {cartItems.length ? (
        <table className={CartPageStyles.table}>
          <thead>
            <tr>
              <th>Item</th>
              <th className={CartPageStyles["tbl-hdr"]}>Qty</th>
              <th className={CartPageStyles["tbl-hdr"]}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem id={item.id} key={item.id} />
            ))}
            <tr>
              <td>SubTotal</td>
              <td></td>
              <td>
                <embed
                  src={rupeeSymbol}
                  className={CartPageStyles["rup-sym"]}
                />{" "}
                {subTotal ?? 0}
              </td>
            </tr>
            <tr>
              <td>Shipping Charge</td>
              <td></td>
              <td>
                <embed
                  src={rupeeSymbol}
                  className={CartPageStyles["rup-sym"]}
                />
                {shipCharge}
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td></td>
              <td>
                <embed
                  src={rupeeSymbol}
                  className={CartPageStyles["rup-sym"]}
                />
                {discount}%
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td></td>
              <td>
                <embed
                  src={rupeeSymbol}
                  className={CartPageStyles["rup-sym"]}
                />
                {tax}%
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td>
                <embed
                  src={rupeeSymbol}
                  className={CartPageStyles["rup-sym"]}
                />
                {grandTotal}
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className={CartPageStyles["chk-btn-cont"]}>
                <button>Checkout</button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>
          <div className={CartPageStyles["empty-cart-img-cont"]}>
            <h2>Cart is Empty!!</h2>
            <img src={emptyCartImg} alt="cart-empty" />
            <button
              onClick={(e) => {
                navigate("/menu");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
