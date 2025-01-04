import { useFetch } from "../../hooks/useFetch";
import { ButtonMain } from "../../shared/UI/Buttons/ButtonMain";
import { CartMultiItemCard } from "./components/CartMultiItemCard";
import { CartSingleItemCard } from "./components/CartSingleItemCard";
import { ItemPrice } from "../../shared/UI/ItemPrice/ItemPrice";

import "./Cart.scss";

export const Cart = () => {
  const { data: items, loading, error } = useFetch("cart");

  const totalPrice = items.reduce((total, i) => total + i.price, 0);

  console.log("useeffect");

  if (loading) return <p>Loading item data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cart-container">
      <div className="cards-container">
        {items.map((item) => (
          <CartSingleItemCard key={ item.id } item={ item } />
        ))}
      </div>
      <div className="payment-info">
        <div className="total-price">
          <p className="price-title">Total Price</p>
          <div className="price-amount">
            <ItemPrice priceValue={totalPrice} />
          </div>
        </div>
        <ButtonMain type="submit" variant="primary" className="cart-pay-btn">Pay</ButtonMain>
      </div>
    </div>
  )
}
