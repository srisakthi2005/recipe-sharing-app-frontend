// components/EditRecipes.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import "../EditRecipes.css";

function EditRecipes({ recipes, updateRecipe }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const recipe = recipes[index];
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(Number(index), editedRecipe);
    navigate("/view");
  };

  return (
    <div className="form-container">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipe Name</label>
          <input
            type="text"
            name="name"
            value={editedRecipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            name="ingredients"
            value={editedRecipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Steps</label>
          <textarea
            name="steps"
            value={editedRecipe.steps}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditRecipes;