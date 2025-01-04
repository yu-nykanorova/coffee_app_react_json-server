import "./ItemAmount.scss";

export const ItemAmount = ({ amountValue }) => {
  return (
    <div className="item-amount-container">
        <div className="item-amount-value">{ amountValue }</div>
    </div>
  )
}
