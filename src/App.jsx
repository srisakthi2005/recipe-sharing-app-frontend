


import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipes from "./components/AddRecipes";
import ViewRecipe from "./components/ViewRecipe";
import EditRecipes from "./components/EditRecipes";
import SignUp from "./components/SignUp"; 
import Login from "./components/Login";   
import DeleteRecipe from "./components/DeleteRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes");
      setRecipes([response.data]);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  const addRecipe = async (newRecipe) => {
    try {
      const response = await axios.post("https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes", newRecipe);
      setRecipes((prevRecipes) => [...prevRecipes, response.data]);
    } catch (err) {
      console.error("Error adding recipe:", err);
    }
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      const response = await axios.put(`https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes/${id}`, updatedRecipe);
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe._id === id ? response.data : recipe))
      );
      setSelectedRecipe(null);
    } catch (err) {
      console.error("Error updating recipe:", err);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes/${id}`);
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Recipe Sharing App</h1>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/add">Add Recipe</Link>
              </li>
              <li>
                <Link to="/view">View Recipes</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/add" element={<AddRecipes addRecipe={addRecipe} />} />
            <Route
              path="/view"
              element={
                <ViewRecipe
                  recipes={recipes}
                  deleteRecipe={deleteRecipe}
                />
              }
            />
            <Route
              path="/edit/:id"
              element={<EditRecipes recipes={recipes} updateRecipe={updateRecipe} />}
            />
            <Route
              path="/delete"
              element={
                <DeleteRecipe /> }
                  // recipes={recipes}
                  // deleteRecipe={deleteRecipe}
              
                />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
