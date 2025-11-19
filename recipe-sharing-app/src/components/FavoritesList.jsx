import React, { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Use useMemo to avoid creating a new array every render
  const favorites = useMemo(() => {
    return favoritesIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  }, [favoritesIds, recipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
