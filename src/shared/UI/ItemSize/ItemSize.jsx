
export const ItemSize = ({ itemName, className }) => {
    const renderItemSize = () => {
        switch(itemName) {
            case "drinks":
                return (
                    <div className="item-size-list">
                        <div className="size-container item-size selected">
                            <p className="size">S</p>
                        </div>
                        <div className="size-container item-size">
                            <p className="size">M</p>
                        </div>
                        <div className="size-container item-size">
                            <p className="size">L</p>
                        </div>
                    </div>
                );
            case "beans":
              return (
                <div className="item-size-list">
                    <div className="size-container item-size selected">
                        <p className="size">250g</p>
                    </div>
                    <div className="size-container item-size">
                        <p className="size">500g</p>
                    </div>
                    <div className="size-container item-size">
                        <p className="size">1000g</p>
                    </div>
                </div>
            );
            default:
                return (
                    <div className="item-size-list">
                        <p>No sizes</p>
                    </div>
                );
        }
    }
      
    return (
        <div className={className}>{renderItemSize()}</div>
    )
}
