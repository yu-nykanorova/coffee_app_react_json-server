import { useParams } from "react-router-dom"
import { useFetch } from "../../../hooks/useFetch";
import { BackArrow } from "../BackArrow/BackArrow";
import { LikeHeart } from "../LikeHeart/LikeHeart";
import { ButtonMain } from "../Buttons/ButtonMain";
import { ItemMarker } from "../ItemMarker/ItemMarker";
import { ItemSize } from "../ItemSize/ItemSize";
import "./Item.scss";
import { ItemPrice } from "../ItemPrice/ItemPrice";

export const Item = ({ itemsName }) => {
    const { id } = useParams();
    const { data: item, loading, error } = useFetch(`${itemsName}/${id}`);

    if (loading) return <p>Loading item data...</p>;
  
    if (error) return <p>Error: {error}</p>;

    if (!item) return <h1>Selected item not found!</h1>;

    return (
      <div>
        <div className="item-image-container">
          <img src={ item.imgUrl } alt={ item.title } />
          <div className="back-and-like">
            <BackArrow />
            <LikeHeart />
          </div>
          <div className="item-title-bg item-title">
            <div className="item-title__info">
              <h3 className="item-title__name">{ item.title }</h3>
              <p className="item-title__comment">{ item.comment }</p>
              <div className="item-title__rating">
                <span className="icon-star"></span>
                <p className="rating">{ item.rating }</p>
                <p className="votes">({ item.votes })</p>
              </div>
            </div>
            <div className="item-title__markers">
              <ItemMarker itemsName={itemsName} milk={item.milk} region={item.region}/>
              <div className="roast">{ item.roast }</div>
            </div>
          </div>
        </div>
        <div className="item-info-container">
          <p className="desc">Description</p>
          <p className="item-desc item-info-desc">{ item.desc }</p>
          <p className="desc">Size</p>
          <ItemSize itemsName={itemsName}/>  
        <div className="item-info-buy">
          <div className="item-price">
            <p className="item-price-title">Price</p>
            <ItemPrice className="price-value-large" priceValue={item.price} />
          </div>
          <ButtonMain type="submit" variant="primary">Add to Cart</ButtonMain>
        </div>
        </div>
      </div>
    );
}

