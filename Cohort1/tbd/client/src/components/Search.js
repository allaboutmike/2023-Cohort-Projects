import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredItems = details.filter(
    item => {
      return (
        item
        .ingredient
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        item
        .calories
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredItems={filteredItems} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="black georgia ma0 grow">
        <h2 className="f2">Ingredients Search for Recipe</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search Ingredients" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;