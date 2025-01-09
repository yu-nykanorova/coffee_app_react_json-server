import { useFetch } from "../../../hooks/useFetch";
import { ButtonAddRemove } from "../../../shared/UI/Buttons/ButtonAddRemove"
import { ItemAmount } from "../../../shared/UI/ItemAmount/ItemAmount"
import { ItemPrice } from "../../../shared/UI/ItemPrice/ItemPrice";
import { ItemSize } from "../../../shared/UI/ItemSize/ItemSize";
import "./CartMultiItemCard.scss";

export const CartMultiItemCard = ({ items, onUpdateCartItem }) => {
    const { loadData: deleteCartItem } = useFetch(null, "DELETE");
    const { loadData: updateCartItem } = useFetch(null, "PUT");

    const handleDelete = async (item) => {
        if (item.amount > 1) {
            const decreasedAmount = item.amount - 1;
            const updatedItem = await updateCartItem(item.id, { ...item, amount: decreasedAmount });
            onUpdateCartItem(updatedItem);
        } else {
            await deleteCartItem(item.id);
            onUpdateCartItem(null, item.id);
        }
    };

    const handleAdd = async (item) => {
        const increasedAmount = item.amount + 1;
        const updatedItem = await updateCartItem(item.id, { ...item, amount: increasedAmount });
        onUpdateCartItem(updatedItem);
    };
    
    return (
        <div className="card-container multi-item-card">
            <div className="multi-item-card__main-info">
                <div className="multi-item-card__image">
                    <img src={items[0].image} alt={items[0].title} />
                </div>
                <div className="multi-item-card__info">
                    <div className="multi-item-card__info-title">{ items[0].title }</div>
                    <div className="multi-item-card__info-desc">{ items[0].comment }</div>
                    <div className="multi-item-card__info-roast">{ items[0].roast }</div>
                </div>
            </div>
            <div className="multi-item-card__sizes">
                {items.map((item) => (
                    <div key={item.id} className="multi-item-card__buy-info">
                        <div className="multi-item-card__buy-info-size">
                            <ItemSize className="cart-multi-item-size" size={item.size} />
                        </div>
                        <div className="multi-item-card__buy-info-price">
                            <ItemPrice className="cart-multi-item-price" priceValue={item.price} />
                        </div>
                        <div className="multi-item-card__buy-info-amount">
                            <ButtonAddRemove form="minus" onClick={() => handleDelete(item)} />
                            <ItemAmount amountValue={item.amount} />
                            <ButtonAddRemove form="plus" onClick={() => handleAdd(item)} />
                        </div>
                    </div>
                ))}   
            </div>
        </div>
    )
}
