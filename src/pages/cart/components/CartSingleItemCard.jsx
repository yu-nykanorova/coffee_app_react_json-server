import { useFetch } from "../../../hooks/useFetch";
import { ButtonAddRemove } from "../../../shared/UI/Buttons/ButtonAddRemove"
import { ItemAmount } from "../../../shared/UI/ItemAmount/ItemAmount";
import { ItemPrice } from "../../../shared/UI/ItemPrice/ItemPrice";
import { ItemSize } from "../../../shared/UI/ItemSize/ItemSize";
import "./CartSingleItemCard.scss";

export const CartSingleItemCard = ({ item, onUpdateCartItem }) => {
  const { loadData: deleteCartItem } = useFetch(null, "DELETE");
  const { loadData: updateCartItem } = useFetch(null, "PUT");

  const itemType = item.id.split("-").slice(0, 1).join("");

  const handleDelete = async () => {
    if (item.amount > 1) {
      const decreasedAmount = item.amount - 1;
      const updatedItem = await updateCartItem(item.id, { ...item, amount: decreasedAmount });
      onUpdateCartItem(updatedItem);
    } else {
      await deleteCartItem(item.id);
      onUpdateCartItem(null, item.id);
    }
  };

  const handleAdd = async () => {
    const increasedAmount = item.amount + 1;
    const updatedItem = await updateCartItem(item.id, { ...item, amount: increasedAmount });
    onUpdateCartItem(updatedItem);
  };

  return (
    <div className="card-container single-item-card">
        <div className="single-item-card__image">
            <img src={ item.image } alt={ item.title } />
        </div>
        <div className="single-item-card__info">
            <div className="single-item-card__info-title">{ item.title }</div>
            <div className="single-item-card__info-desc">{ item.comment }</div>
            <div className="single-item-card__info-size-price">
              <ItemSize className={`cart-single-item-size ${itemType === "beans" ? "cart-item-size-beans" : "cart-item-size-drinks"}`} size={ item.size } />
              <ItemPrice className="cart-single-item-price" priceValue={ item.price } />
            </div>
            <div className="single-item-card__info-amount">
                <ButtonAddRemove form="minus" onClick={handleDelete}/>
                <ItemAmount amountValue={ item.amount }/>
                <ButtonAddRemove form="plus" onClick={handleAdd}/>
            </div>
        </div>
    </div>
  )
}
