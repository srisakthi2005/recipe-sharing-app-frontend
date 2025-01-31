// components/DeleteRecipe.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";


function DeleteRecipe({ recipes, deleteRecipe }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(Number(index));
    navigate("/view");
    
  };

  return (
    <div className="form-container">
      <h2>Delete Recipe</h2>
      <p>Are you sure you want to delete this recipe?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/view")}>Cancel</button>
    </div>
  );
}

export default DeleteRecipe;



// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// function DeleteRecipe({ recipes, deleteRecipe }) {
//   const { index } = useParams(); // Index is used to identify which recipe to delete
//   const navigate = useNavigate();

//   const handleDelete = () => {
//     // Assuming the recipe has an 'id' field for unique identification
//     const recipeId = recipes[index].id;

//     // Make a DELETE request to the backend API to remove the recipe
//     axios
//       .delete(`http://localhost:3000/api/recipes/${recipeId}`)
//       .then((response) => {
//         console.log("Recipe deleted successfully:", response.data);
//         deleteRecipe(Number(index)); // Remove the recipe from the frontend state
//         navigate("/view"); // Redirect to the view page
//       })
//       .catch((error) => {
//         console.error("Error deleting recipe:", error.response?.data || error.message);
//         alert("Error deleting recipe. Please try again.");
//       });
//   };

//   return (
//     <div className="form-container">
//       <h2>Delete Recipe</h2>
//       <p>Are you sure you want to delete this recipe?</p>
//       <button onClick={handleDelete}>Yes, Delete</button>
//       <button onClick={() => navigate("/view")}>Cancel</button>
//     </div>
//   );
// }

// export default DeleteRecipe;