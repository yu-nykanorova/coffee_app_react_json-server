import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useFetch } from "../../../hooks/useFetch";
import PostDataService from "../../../services/PostDataService";
import { BackArrow } from "../BackArrow/BackArrow";
import { LikeHeart } from "../LikeHeart/LikeHeart";
import { ButtonMain } from "../Buttons/ButtonMain";
import { ItemMarker } from "../ItemMarker/ItemMarker";
import { ItemSizesList } from "../ItemSizesList/ItemSizesList";
import { ItemPrice } from "../ItemPrice/ItemPrice";
import "./Item.scss";

export const Item = ({ itemsName }) => {
    const { id } = useParams();
    const { data: item, loading: itemLoading, error: itemError } = useFetch(`${itemsName}/${id}`, "GET");
    const { data: initialCartItems } = useFetch("cart", "GET");
    const { loadData: addCartItem } = useFetch(null, "POST");
    const { loadData: updateCartItem } = useFetch(null, "PUT");

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      if (initialCartItems) {
        setCartItems(initialCartItems);
      }
    }, [initialCartItems]);

    const [selectedSize, setSelectedSize] = useState(
      itemsName === "drinks" ? "S" : "250g"
    );

    if (itemLoading) return <p>Loading item data...</p>;
    if (itemError) return <p>Error: {itemError}</p>;
    if (!item) return <h1>Selected item not found!</h1>;

    const currentPrice = item.price[selectedSize];

    const newCartItem = {
      id: `${itemsName}-${item.id}-${selectedSize}`,
      title: item.title,
      comment: item.comment,
      size: selectedSize,
      price: item.price[selectedSize],
      image: item.imgUrl,
      amount: 1
    }

    const handleAddToCart = async () => {
      const existingItem = cartItems.find(
        (cartItem) => cartItem.id === newCartItem.id && cartItem.size === newCartItem.size
      );
      if (existingItem) {
        const updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
        await updateCartItem(updatedItem.id, updatedItem);
        setCartItems((prev) => 
          prev.map((cartItem) => 
            cartItem.id === updatedItem.id && cartItem.size === updatedItem.size
              ? updatedItem
              : cartItem
          )
        );
      } else {
        await addCartItem(null, newCartItem);
        setCartItems((prev) => [...prev, newCartItem]);
      }
    };

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
          <ItemSizesList
            itemsName={itemsName}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}  
          />  
        <div className="item-info-buy">
          <div className="item-price">
            <p className="item-price-title">Price</p>
            <ItemPrice
              className="price-value-large"
              priceValue={currentPrice}
            />
          </div>
          <ButtonMain type="submit" variant="primary" onClick={handleAddToCart}>Add to Cart</ButtonMain>
        </div>
        </div>
      </div>
    );
}

