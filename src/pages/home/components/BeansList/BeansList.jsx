import { Link } from "react-router-dom";
import { ButtonAdd } from "../../../../shared/UI/ButtonAdd/ButtonAdd";
import { useFetch } from "../../../../hooks/useFetch";
import "./BeansList.scss";

export const BeansList = () => {
  const { data: beans, loading, error } = useFetch("beans");

  if (loading) {
    return <p>Loading drinks list...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className="p30 chapter-title">Coffee beans</h2>
      <div className="coffee-beans-list">
        {beans.map(bean => (
          <div key={bean.id}>
            <Link to={`/beans/${bean.id}`} className="item-container coffee-beans-list__item">
              <div className="coffee-beans-list__img"> 
                  <img src={bean.imgUrl} alt={bean.title} />
              </div>
              <h3 className="item-title coffee-beans-list__title">{bean.title}</h3>
              <p className="coffee-beans-list__roast">{bean.roast}</p>
              <div className="coffee-beans-list__bye-info">
                <p className="price-value"><span>$ </span>{bean.price}</p>
                <ButtonAdd />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
