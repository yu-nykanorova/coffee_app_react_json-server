import "./ItemPrice.scss";

export const ItemPrice = ({ priceValue, className }) => {
  return (
    <p className={`price-value ${className}`}><span>$ </span>{ Number(priceValue).toFixed(2) }</p>
  )
}
