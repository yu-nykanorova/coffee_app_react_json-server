import { ButtonAddRemove } from "../../../shared/UI/Buttons/ButtonAddRemove"
import "./CartSingleItemCard.scss";

export const CartSingleItemCard = () => {
  return (
    <div className="card-container single-item-card">
        <div className="single-item-card__image">
            <img src="public/assets/img/cappuccino_1.jpg" alt="cappuccino" />
        </div>
        <div className="single-item-card__info">
            <div className="single-item-card__info-title">Cappuccino</div>
            <div className="single-item-card__info-desc">With Steamed Milk</div>
            <div className="single-item-card__info-size-price">size-price</div>
            <div className="single-item-card__info-amount">
                <ButtonAddRemove form="minus"/>
                Amount
                <ButtonAddRemove form="plus"/>
            </div>
        </div>
    </div>
  )
}
