import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const App_ID = "a7351ae5";
  const App_KEY = "e055b71a94727b017e524304703ea0de";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [querry, setQuerry] = useState("susi");

  useEffect(() => {
    getRecipes();
  }, [querry]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${querry}&app_id=${App_ID}&app_key=${App_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getsearch = (e) => {
    e.preventDefault();
    setQuerry(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getsearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(
          (
            recipe //props from states//
          ) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
