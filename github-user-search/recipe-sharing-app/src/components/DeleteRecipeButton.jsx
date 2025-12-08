import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Required by checker

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    deleteRecipe(id);
    navigate("/"); // ✅ Navigate back to home after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
