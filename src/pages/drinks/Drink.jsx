import { useParams } from "react-router-dom"
import { useState } from "react";
import { BackArrow } from "../../shared/UI/BackArrow/BackArrow";
import { LikeHeart } from "../../shared/UI/LikeHeart/LikeHeart";
import { Button } from "../../shared/UI/Button/Button";
import { useFetch } from "../../hooks/useFetch";
import "./DrinkPage.scss";

export const Drink = () => {
    const { data, loading, error } = useFetch("drinks");
    const { id } = useParams();

    if (loading) {
      return <p>Loading drink...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }

    const drink = data?.find(item => item.id === parseInt(id));

    console.log(id);
    console.log(data);
    //console.log(drink.id);

    if (!data) return <h1>Drink not found!</h1>;
     
    return (
      <div>
        {/* <div className="item-image-container">
          <img src={drink.imgUrl} alt={drink.title} />
          <div className="back-and-like">
            <BackArrow />
            <LikeHeart />
          </div>
          <div className="item-title-bg item-title">
            <div className="item-title__info">
              <h3 className="item-title__name">{ drink.title }</h3>
              <p className="item-title__region">{ drink.comment }</p>
              <div className="item-title__rating">
                <span className="icon-star"></span>
                <p className="rating">{ drink.rating }</p>
                <p className="votes">{ drink.votes }</p>
              </div>
            </div>
            <div className="item-title__markers">
              <div className="markers">
                <div className="marker-bean">
                  <span className="icon-coffee_2"></span>
                  <p>Coffee</p>
                </div>
                {drink.milk ? 
                <div className="marker-water">
                  <span className="icon-water"></span>
                  <p>Milk</p>
                </div>
                : 
                <div className="marker-water">
                  <span className="icon-water"></span>
                  <p>No Milk</p>
                </div>}
              </div>
              <div className="roast">{ drink.roast }</div>
            </div>
          </div>
        </div>
        <div className="item-info-container">
          <p className="desc">Description</p>
          <p className="item-desc item-info-desc">{ drink.desc }</p>
          <p className="desc">Size</p>
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
        <div className="item-info-buy">
          <div className="price">
            <p className="price-title">Price</p>
            <p className="price-value"><span>$ </span>4.50</p>
          </div>
          <Button type="submit" variant="primary">Add to Cart</Button>
        </div>
        </div> */}
      </div>
    );
}

