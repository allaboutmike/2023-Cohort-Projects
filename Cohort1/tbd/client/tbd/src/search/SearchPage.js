import './search.css';
import React, { useState } from 'react';
import api from '../api';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    search(searchQuery);
  }

  function search(query) {
    api.get(`recipes?ingredient=${query}`)
      .then(response => {

        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

 return (
    <div id="search-bg">
      <h1>Super Cook</h1>
      <p>You can make 764 Recipes</p>
      <form action="GET" onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe search..." onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit" className="btn-recipe-search">
          Search <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
