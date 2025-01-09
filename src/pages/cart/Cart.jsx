import { useState, useEffect, useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ButtonMain } from "../../shared/UI/Buttons/ButtonMain";
import { CartMultiItemCard } from "./components/CartMultiItemCard";
import { CartSingleItemCard } from "./components/CartSingleItemCard";
import { ItemPrice } from "../../shared/UI/ItemPrice/ItemPrice";

import "./Cart.scss";

export const Cart = () => {
  const { data: initialCartItems, loading, error, loadData } = useFetch("cart", "GET");

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(initialCartItems || []);
  }, [initialCartItems]);

  const groupedItemsById = useMemo(() => {
    return cartItems.reduce((groups, item) => {
      const baseId = item.id.split("-").slice(0, 2).join("-");
      if (!groups[baseId]) {
        groups[baseId] = [];
      }
      groups[baseId].push(item);
      return groups;
    }, {});
  }, [cartItems]);

  const handleUpdateCartItem = async (updatedItem, itemId = null) => {
    setCartItems((prevItems) => {
      if (updatedItem) {
        return prevItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      } else {
        return prevItems.filter((item) => item.id !== itemId);
      }
    });
    await loadData();
  };

  const totalPrice = useMemo(
    () => cartItems.reduce((total, i) => total + i.price * i.amount, 0),
    [cartItems]
  );

  if (loading) return <p>Loading item data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="cart-container">
      <div className="cards-container">
        {Object.entries(groupedItemsById).map(([baseId, items]) =>
          items.length === 1 ? (
            <CartSingleItemCard
              key={items[0].id}
              item={items[0]}
              onUpdateCartItem={handleUpdateCartItem}
            />
          ) : (
            <CartMultiItemCard
              key={baseId}
              items={items}
              onUpdateCartItem={handleUpdateCartItem}
            />
          )
        )}        
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
