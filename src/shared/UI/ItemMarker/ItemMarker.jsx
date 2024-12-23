
export const ItemMarker = ({ itemsName, className, milk, region }) => {
  
  const renderMarkerContent = () => {
    switch(itemsName) {
        case "drinks":
            return (
                <div className="markers">
                  <div className="marker marker_coffee_2">
                    <span className="icon-coffee_2"></span>
                    <p>Coffee</p>
                  </div>
                  <div className="marker">
                      <span className="icon-water"></span>
                      { milk ? <p>Milk</p> : <p>No milk</p> }
                  </div>
                </div>
            );
        case "beans":
          return (
            <div className="markers">
              <div className="marker">
                <span className="icon-coffee"></span>
                <p>Bean</p>
              </div>
              <div className="marker">
                <span className="icon-location"></span>
                <p>{ region }</p>
              </div>
            </div>
        );
        default:
            return (
                <div className="markers">
                    <p>No markers</p>
                </div>
            );
    }
  }
  
  return (
    <div className={className}>{renderMarkerContent()}</div>
  )
}
