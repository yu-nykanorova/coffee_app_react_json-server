import { Link } from "react-router-dom";
import { ButtonAdd } from "../../../../shared/UI/ButtonAdd/ButtonAdd";
import { useFetch } from "../../../../hooks/useFetch";

import "./ItemsList.scss";

export const ItemsList = ({ itemsName }) => {
  const { data: items, loading, error } = useFetch(itemsName);

  if (loading) return <p>Loading items list...</p>;
  
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="coffee-drinks">
      {items.map(item => (
        <div key={item.id}>
          <div className="item-container coffee-drinks__item">
            <Link to={`/${itemsName}/${item.id}`} className="coffee-drinks__img">
              <img src={ item.imgUrl } alt={ item.title } />
              {
                itemsName === "drinks" && 
                  <div className="coffee-drinks__rating">
                    <span className="icon-star"></span>
                    <p className="rating_value">{ item.rating }</p>
                  </div>
              }
            </Link>
            <Link to={`/drinks/${item.id}`}>
              <h3 className="item-title coffee-drinks__title">{ item.title }</h3>
            </Link>
            <p className="coffee-drinks__desc">{ item.comment }</p>
            <div className="coffee-drinks__bye-info">
              <p className="price-value"><span>$ </span>{ Number(item.price).toFixed(2) }</p>
              <ButtonAdd />
            </div>
            </div>
        </div>
      ))}
    </div>
  )
}


