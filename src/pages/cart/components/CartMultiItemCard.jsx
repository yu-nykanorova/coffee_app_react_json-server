import { ButtonAddRemove } from "../../../shared/UI/Buttons/ButtonAddRemove"
import { ItemAmount } from "../../../shared/UI/ItemAmount/ItemAmount"
import { ItemPrice } from "../../../shared/UI/ItemPrice/ItemPrice";
import { ItemSize } from "../../../shared/UI/ItemSize/ItemSize";
import "./CartMultiItemCard.scss";

export const CartMultiItemCard = () => {
  return (
    <div className="card-container multi-item-card">
        <div className="multi-item-card__main-info">
            <div className="multi-item-card__image">
                <img src="public/assets/img/cappuccino_1.jpg" alt="cappuccino" />
            </div>
            <div className="multi-item-card__info">
                <div className="multi-item-card__info-title">Cappuccino</div>
                <div className="multi-item-card__info-desc">With Steamed Milk</div>
                <div className="multi-item-card__info-roast">Medium Roasted</div>
            </div>
        </div>
        <div className="multi-item-card__buy-info">
            <div className="multi-item-card__buy-info-size">
                <ItemSize className="cart-multi-item-size" size="?" />
            </div>
            <div className="multi-item-card__buy-info-price">
                <ItemPrice className="cart-multi-item-price" priceValue="10" />
            </div>
            <div className="multi-item-card__buy-info-amount">
                <ButtonAddRemove form="minus" />
                <ItemAmount />
                <ButtonAddRemove form="plus" />
            </div>
        </div>
    </div>
  )
}
