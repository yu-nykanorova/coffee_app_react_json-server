import "./DrinksTitlesList.scss"

export const DrinksTitlesList = ({ selectedCategory, onSelectCategory }) => {

  const drinks = [
        { id: 1, title: 'All' },
        { id: 2, title: 'Cappuccino' },
        { id: 3, title: 'Espresso' },
        { id: 4, title: 'Americano' },
        { id: 5, title: 'Macchiato' },
  ];
  
  return (
  <div className="drinks-list">
      {drinks.map(drink => (
        <div
          key={drink.id}
          onClick={() => onSelectCategory(drink.title === "All" ? null : drink.title)}
          className={`drinks-list__item ${
            (drink.title === "All" && selectedCategory === null) ||
            drink.title === selectedCategory
              ? "selected"
              : ""
          }`}
        >
          <div className="drinks-list__item-name">{drink.title}</div>
        </div>
      ))}      
  </div>
  );
}
