import { ButtonAddRemove } from "../../../shared/UI/Buttons/ButtonAddRemove"


export const CartMultiItemCard = () => {
  return (
    <div className="card-container multi-item-card">
        <div className="multi-item-card__main-info">
            <div className="multi-item-card__image">
                <img src="" alt="" />
            </div>
            <div className="multi-item-card__info">
                <div className="multi-item-card__info-title"></div>
                <div className="multi-item-card__info-desc"></div>
                <div className="multi-item-card__info-roast"></div>
            </div>
        </div>
        <div className="multi-item-card__buy-info">
            <div className="multi-item-card__buy-info-size">S</div>
            <div className="multi-item-card__buy-info-price">$ 4.20</div>
            <div className="multi-item-card__buy-info-amount">
                <ButtonAddRemove form="minus" />
                Amount
                <ButtonAddRemove form="plus" />
            </div>
        </div>
    </div>
  )
}
