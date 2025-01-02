import { ButtonMain } from "../../shared/UI/Buttons/ButtonMain"
import { CartMultiItemCard } from "./components/CartMultiItemCard"
import { CartSingleItemCard } from "./components/CartSingleItemCard"
import "./Cart.scss";

export const Cart = () => {

  return (
    <div className="cart-container">
      <div className="cards-container">
        <CartSingleItemCard />
        <CartMultiItemCard />
      </div>
      <div className="payment-info">
        <div className="total-price">
          <p className="price-title">Total Price</p>
          <div className="price-amount">$ 10.40</div>
        </div>
        <ButtonMain type="submit" variant="primary" className="cart-pay-btn">Pay</ButtonMain>
      </div>
    </div>
  )
}
