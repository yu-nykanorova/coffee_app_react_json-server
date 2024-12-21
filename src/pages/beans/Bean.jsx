import { useParams } from "react-router-dom"
import { BackArrow } from "../../shared/UI/BackArrow/BackArrow";
import { LikeHeart } from "../../shared/UI/LikeHeart/LikeHeart";
import { Button } from "../../shared/UI/Button/Button";
import { useFetch } from "../../hooks/useFetch";
import "./BeanPage.scss";

export const Bean = () => {
    const { id } = useParams();
    const { data: bean, loading, error } = useFetch(`beans/${id}`);

    if (loading) return <p>Loading drink...</p>;
  
    if (error) return <p>Error: {error}</p>;

    if (!bean) return <h1>Drink not found!</h1>;
    
    return (
      <div>
        <div className="item-image-container">
          <img src={bean.imgUrl} alt={bean.title} />
          <div className="back-and-like">
            <BackArrow />
            <LikeHeart />
          </div>
          <div className="item-title-bg item-title">
            <div className="item-title__info">
              <h3 className="item-title__name">{ bean.title }</h3>
              <p className="item-title__region">From { bean.region }</p>
              <div className="item-title__rating">
                <span className="icon-star"></span>
                <p className="rating">{ bean.rating }</p>
                <p className="votes">({ bean.votes })</p>
              </div>
            </div>
            <div className="item-title__markers">
              <div className="markers">
                <div className="marker-bean">
                  <span className="icon-coffee"></span>
                  <p>Bean</p>
                </div>
                <div className="marker-location">
                  <span className="icon-location"></span>
                  <p>{ bean.region }</p>
                </div>
              </div>
              <div className="roast">{ bean.roast }</div>
            </div>
          </div>
        </div>

        <div className="item-info-container">
          <p className="desc">Description</p>
          <p className="item-desc item-info-desc">{ bean.desc }</p>
          <p className="desc">Size</p>
          <div className="item-size-list">
            <div className="size-container item-size">
              <p className="size">250 gm</p>
            </div>
            <div className="size-container item-size">
              <p className="size">500 gm</p>
            </div>
            <div className="size-container item-size">
              <p className="size">1000 gm</p>
            </div>
          </div>
        <div className="item-info-buy">
          <div className="price">
            <p className="price-title">Price</p>
            <p className="price-value"><span>$ </span>10.50</p>
          </div>
          <Button type="submit" variant="primary">Add to Cart</Button>
        </div>
        </div>
      </div>
    );
}

