import { useParams } from "react-router-dom";
import RecipeDetails from "./RecipeDetails"; // adjust path if you placed this file in components

const RecipeDetailsWrapper = () => {
  const { id } = useParams(); // get the recipe ID from the URL
  return <RecipeDetails recipeId={id} />;
};

export default RecipeDetailsWrapper;
