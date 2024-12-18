import { useState } from "react";

export const LikeHeart = () => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked); 
    };

    return (
      <div className={`icon-container ${isLiked ? "liked" : ''}`} onClick={toggleLike}>
        <span className="icon-heart"></span>
      </div>
    )
  }