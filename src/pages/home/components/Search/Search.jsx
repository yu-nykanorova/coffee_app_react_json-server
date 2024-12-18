import { useState } from "react";
import "./Search.scss"

export const Search = ({ onSubmit }) => {

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <div className="p30">
      <form className="search-form" onSubmit = {handleSubmit}>
        <button className="search-form__btn" type="submit"><span className="icon-search"></span></button>
        <input
          className="search-form__field"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find Your Coffee..."
        />
      </form>
    </div>
  );
}



