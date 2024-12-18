import { useState } from "react";
import "./DrinksTitlesList.scss"

export const DrinksTitlesList = () => {

  const drinks = [
        { id: 1, title: 'All' },
        { id: 2, title: 'Cappuccino' },
        { id: 3, title: 'Esprresso' },
        { id: 4, title: 'Americano' },
        { id: 5, title: 'Macchiato' },
      ];
  
  const [isSelected, setIsSelected] = useState(drinks[0].id);
    
  const toggleSelect = (drinkId) => {
    setIsSelected(drinkId === isSelected ? null : drinkId);
  };
  
  return (
  <div className="drinks-list">
      {drinks.map(drink => (
        <div className={`drinks-list__item ${drink.id === isSelected ? "selected" : ''}`} onClick={() => toggleSelect(drink.id)} key={drink.id}>
          <div className="drinks-list__item-name">{drink.title}</div>
        </div>
      ))}      
  </div>
  );
}
