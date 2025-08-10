import { useNavigate } from "react-router";
import CheckoutPageStyle from "../styles/CheckoutPage.module.css";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect((e) => {
    let total = parseFloat(localStorage.getItem("grandTotal"));
    setGrandTotal(isNaN(total) ? 0 : total);
  }, []);

  const [formData, setFormData] = useState({
    ["paymentMode"]: "cod",
    ["credit-name"]: "",
    ["credit-no"]: "",
    ["credit-expdate"]: "",
    ["credit-cvv"]: "",
  });

  const isCCNameValid = () => formData["credit-name"]?.length >= 3;
  const isCCNoValid = () => formData["credit-no"]?.length == 12;
  const isExpDateValid = () => formData["credit-expdate"]?.length == 5;
  const isCvvValid = () => formData["credit-cvv"]?.length == 3;

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>{grandTotal}</div>

      <form
        action=""
        className={CheckoutPageStyle.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
          // dispatch(resetCart());
          // dispatch(filterItems());
          // navigate("/catalogue");
          // showMessageToast(true);
        }}
      >
        <div className={CheckoutPageStyle["form-body"]}>
          <div className={CheckoutPageStyle["form-payment-opts"]}>
            <div>
              <label htmlFor="cod">Cash on Delivery</label>
              <input
                id="cod"
                type="radio"
                name="payment-mode"
                checked={formData.paymentMode == "cod"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    paymentMode: "cod",
                  });
                }}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="cc">Credit Card</label>
              <input
                id="cc"
                type="radio"
                checked={formData.paymentMode == "cc"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    paymentMode: "cc",
                  });
                }}
                name="payment-mode"
                required
              ></input>
            </div>
          </div>

          {formData.paymentMode === "cc" && (
            <div
              className={`${CheckoutPageStyle["credit-card-form"]} ${
                formData.paymentMode == "cc" ? "" : CheckoutPageStyle.hide
              }`}
            >
              <div className="form-item">
                <input
                  id="credit-name"
                  placeholder="Enter your full name"
                  value={formData["credit-name"]}
                  type="text"
                  required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      ["credit-name"]: e.target.value,
                    });
                  }}
                />
                <p className={CheckoutPageStyle.error}>
                  {isCCNameValid()
                    ? null
                    : "Please Enter you Full Name. Name should be atleast 3 characters"}
                </p>
              </div>
              <div className="form-item">
                <input
                  id="credit-no"
                  placeholder="Enter your Credit card number"
                  value={formData["credit-no"]}
                  required
                  minLength={12}
                  maxLength={12}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      ["credit-no"]: e.target.value,
                    });
                  }}
                />
                <p className={CheckoutPageStyle.error}>
                  {isCCNoValid()
                    ? null
                    : "Please Enter you Credit Card No. Expected atleast 12 digits"}
                </p>
              </div>
              <div className="form-item">
                <input
                  id="credit-expdate"
                  placeholder="Enter expiry date. MM/YY"
                  value={formData["credit-expdate"]}
                  required
                  type="text"
                  minLength={5}
                  maxLength={5}
                  pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      ["credit-expdate"]: e.target.value,
                    });
                  }}
                />
                <p className={CheckoutPageStyle.error}>
                  {isExpDateValid()
                    ? null
                    : "Please Enter you Credit Card Expiry Date. Valid format is MM/YY"}
                </p>
              </div>
              <div className="form-item">
                <input
                  id="credit-cvv"
                  placeholder="Enter CVV"
                  value={formData["credit-cvv"]}
                  required
                  minLength={3}
                  maxLength={3}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      ["credit-cvv"]: e.target.value,
                    });
                  }}
                />
                <p className={CheckoutPageStyle.error}>
                  {isCvvValid()
                    ? null
                    : "Please Enter you Credit Card CVV. Expected 3 digits"}
                </p>
              </div>
            </div>
          )}

          <button className={CheckoutPageStyle["order-btn"]} type="submit">
            Order Now
          </button>
          <button
            className={CheckoutPageStyle["order-btn"]}
            type="reset"
            onClick={(e) => {
              navigate("/cart");
            }}
          >
            Keep Shopping
          </button>
        </div>
      </form>

      {/* <button
        onClick={(e) => {
          navigate("/cart");
        }}
      >
        Keep Shopping
      </button> */}
    </div>
  );
}
