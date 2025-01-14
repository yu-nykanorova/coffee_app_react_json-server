import { useState } from "react";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { DrinksTitlesList } from "./components/DrinksTitlesList/DrinksTitlesList";
import { Search } from "./components/Search/Search";

import "./Home.scss";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="home-container">
      <h1 className="p30 main-title">Find the best coffee for you</h1>
      <Search />
      <DrinksTitlesList
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ItemsList itemsName={"drinks"} selectedCategory={selectedCategory} />
      <ItemsList itemsName={"beans"} />
    </div>
  )
}

