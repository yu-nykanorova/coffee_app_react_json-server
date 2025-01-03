import "./ItemSize.scss";

export const ItemSize = ({ size, isSelected, onClick, className }) => {
  return (
    <div
        className={`item-size ${isSelected ? "selected" : ""} ${className}`}
        onClick={onClick}
    >
        <p className="size">{ size }</p>
    </div>
  );
};
