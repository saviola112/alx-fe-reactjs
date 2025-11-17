import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import RecipeDetailsWrapper from "./components/RecipeDetailsWrapper";

const Home = () => (
  <div>
    <h1>Recipe Sharing Application</h1>
    <SearchBar />
    <AddRecipeForm />
    <RecipeList />
    <FavoritesList />
    <RecommendationsList />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
