import { ItemSize } from "../ItemSize/ItemSize";
import "./ItemSizesList.scss";

export const ItemSizesList = ({ itemsName, selectedSize, onSizeChange, className }) => {
    
    const sizes = {
        drinks: ["S", "M", "L"],
        beans: ["250g", "500g", "1000g"],
    };

    const currentSizes = sizes[itemsName] || [];

    const handleSizeClick = (size) => {
        onSizeChange(size);
    }
      
    return (
        <div className={`${className} item-size-list`}>
            {currentSizes.length > 0 ? (
                currentSizes.map((size) => (
                    <ItemSize
                        key={size}
                        size={size}
                        className={itemsName === "beans" ? "item-size-beans" : ""}
                        isSelected={size === selectedSize}
                        onClick={() => handleSizeClick(size)}
                    />
                ))
            ) : (
                <p>No sizes</p>
            )}
        </div>
    );
};
