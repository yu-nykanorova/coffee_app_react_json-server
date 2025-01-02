
export const ItemSize = ({ itemsName, selectedSize, onSizeChange, className }) => {
    
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
                currentSizes.map(size => (
                    <div
                        key={size}    
                        className={`size-container item-size ${
                            size === selectedSize ? "selected" : ""
                        }`}
                        onClick={() => handleSizeClick(size)}
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
