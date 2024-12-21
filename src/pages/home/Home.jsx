import { BeansList } from "./components/BeansList/BeansList";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { DrinksTitlesList } from "./components/DrinksTitlesList/DrinksTitlesList";
import { Search } from "./components/Search/Search";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="p30 main-title">Find the best coffee for you</h1>
      <Search />
      <DrinksTitlesList />
      <ItemsList itemName={"drinks"}/>
      <BeansList />
    </div>
  )
}

