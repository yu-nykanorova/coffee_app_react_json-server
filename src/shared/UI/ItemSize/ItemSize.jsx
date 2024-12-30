import { useState } from "react";


export const ItemSize = ({ itemsName, className }) => {
    
    const [selectedSize, setSelectedSize] = useState(0);

    const sizes = {
        drinks: ["S", "M", "L"],
        beans: ["250g", "500g", "1000g"],
    };

    const currentSizes = sizes[itemsName] || [];

    const handleSizeClick = (index) => {
        setSelectedSize(index);
    }
      
    return (
        <div className={`${className} item-size-list`}>
            {currentSizes.length > 0 ? (
                currentSizes.map((size, index) => (
                    <div
                        key={index}    
                        className={`size-container item-size ${
                            index === selectedSize ? "selected" : ""
                        }`}
                        onClick={() => handleSizeClick(index)}
                    >
                        <p className="size">{ size }</p>
                    </div>
                ))
            ) : (
                <p>No sizes</p>
            )}
        </div>
    );
}
