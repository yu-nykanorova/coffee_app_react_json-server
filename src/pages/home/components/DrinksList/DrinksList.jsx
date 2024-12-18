import { Link } from "react-router-dom";
import { ButtonAdd } from "../../../../shared/UI/ButtonAdd/ButtonAdd";
import { useFetch } from "../../../../hooks/useFetch";
import "./DrinksList.scss";

export const DrinksList = () => {
  const { data: drinks, loading, error } = useFetch("drinks");

  if (loading) {
    return <p>Loading drinks list...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="coffee-drinks">
      {drinks.map(drink => (
        <div key={drink.id}>
          <Link to={`/drinks/${drink.id}`} className="item-container coffee-drinks__item">
            <div className="coffee-drinks__img">
              <img src={drink.imgUrl} alt={drink.title} />
              <div className="coffee-drinks__rating">
                <span className="icon-star"></span>
                <p className="rating_value">{ drink.rating }</p>
              </div>
            </div>
            <h3 className="item-title coffee-drinks__title">{drink.title}</h3>
            <p className="coffee-drinks__desc">{drink.comment}</p>
            <div className="coffee-drinks__bye-info">
              <p className="price-value"><span>$ </span>{drink.price}</p>
              <ButtonAdd />
            </div>
            </Link>
        </div>
      ))}
    </div>
  )
}


