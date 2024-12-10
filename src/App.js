import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import RecipeExcerpt from "./components/RecipeExcerpt";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([])


  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        if (response.ok){
          const data = await response.json();
          setRecipes(data)
        } else {
          console.log("Oops - could not fetch recipes!")
        }
      } catch (e) {
        console.error("An error occurred during the request", e)
      }
    };
    fetchAllRecipes();
  }, []);

  return (
    <div className='recipe-app'>
      <Header />
      <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeExcerpt key={recipe.id} recipe={recipe}/>
      ))}
      </div>
    </div>
  );
}

export default App;
