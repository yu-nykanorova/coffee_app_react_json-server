import { useFetch } from "../../../hooks/useFetch";
import { ButtonAddRemove } from "../../../shared/UI/Buttons/ButtonAddRemove"
import { ItemAmount } from "../../../shared/UI/ItemAmount/ItemAmount";
import { ItemPrice } from "../../../shared/UI/ItemPrice/ItemPrice";
import { ItemSize } from "../../../shared/UI/ItemSize/ItemSize";
import "./CartSingleItemCard.scss";

export const CartSingleItemCard = ({ item }) => {
  const { data: initialCartItems } = useFetch("cart", "GET");
  const { loadData: deleteCartItem } = useFetch(null, "DELETE");
  const { loadData: updatedCartItem } = useFetch(null, "PUT");

  const handleDelete = () => {
    deleteCartItem(item.id);
  };

  const handleAdd = () => {
    const updatedAmount = item.amount + 1;
    updatedCartItem(item.id, { ...item, amount: updatedAmount });
    alert("Item updated");
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
              <ItemSize className="cart-single-item-size" size={ item.size } />
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
