import { Link } from "react-router-dom";
import { ButtonAddRemove } from "../../../../shared/UI/Buttons/ButtonAddRemove";
import { useFetch } from "../../../../hooks/useFetch";
import { ItemPrice } from "../../../../shared/UI/ItemPrice/ItemPrice";
import { Loader } from "../../../../shared/UI/Loader/Loader";
import "./ItemsList.scss";

export const ItemsList = ({ itemsName, selectedCategory }) => {
  const { data: items, loading, error } = useFetch(itemsName, "GET");

  if (loading) return <Loader />;
  
  if (error) return <p>Error: {error}</p>;

  const filteredItems = selectedCategory ?
    items.filter(item => item.category.includes(selectedCategory))
    : items;

  return (
    <div className="items-list">
      {filteredItems.map(item => (
        <div key={item.id}>
          <div className="item-container items-list__item">
            <Link to={`/${itemsName}/${item.id}`} className="items-list__item-img">
              <img src={ item.imgUrl } alt={ item.title } />
              {
                itemsName === "drinks" && 
                  <div className="items-list__item-rating">
                    <span className="icon-star"></span>
                    <p className="rating_value">{ item.rating }</p>
                  </div>
              }
            </Link>
            <Link to={`/${itemsName}/${item.id}`}>
              <h3 className="item-title">{ item.title }</h3>
            </Link>
            <p className="items-list__item-desc">{ item.comment }</p>
            <div className="items-list__item-buy-info">
              <ItemPrice
                priceValue={
                  itemsName === "drinks" ?
                  item.price["S"] :
                  item.price["250g"]
                }
              />
              <ButtonAddRemove form="plus" />
            </div>
            </div>
        </div>
      ))}
    </div>
  )
}


