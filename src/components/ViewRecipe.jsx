// // import React from "react";
// // // import "../ViewRecipes.css";

// // function ViewRecipe({ recipes }) {
// //   return (
// //     <div className="recipe-container">
// //       <h2>View Recipes</h2>
// //       {recipes.map((recipe, index) => (
// //         <div key={index} className="recipe-card">
// //           <h3>{recipe.name}</h3>
// //           <p>
// //             <strong>Ingredients:</strong> {recipe.ingredients}
// //           </p>
// //           <p>
// //             <strong>Steps:</strong> {recipe.steps}
// //           </p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default ViewRecipe;


// // // components/ViewRecipes.js
// // import React from "react";
// // import { Link } from "react-router-dom";
// // // import "../ViewRecipes.css";

// // function ViewRecipe({ recipes }) {
// //   return (
// //     <div className="recipe-container">
// //       <h2>View Recipes</h2>
// //       {recipes.map((recipe, index) => (
// //         <div key={index} className="recipe-card">
// //           <h3>{recipe.name}</h3>
// //           <p>
// //             <strong>Ingredients:</strong> {recipe.ingredients}
// //           </p>
// //           <p>
// //             <strong>Steps:</strong> {recipe.steps}
// //           </p>
// //           <Link to={`/edit/${index}`}>Edit</Link>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default ViewRecipe;


// components/ViewRecipes.js
// import React from "react";
// import { Link } from "react-router-dom";
// // import "../ViewRecipes.css";

// function ViewRecipe({ recipes, deleteRecipe }) {
//   return (
//     <div className="recipe-container">
//       <h2>View Recipes</h2>
//       {recipes.map((recipe, index) => (
//         <div key={index} className="recipe-card">
//           <h3>{recipe.name}</h3>
//           <p>
//             <strong>Ingredients:</strong> {recipe.ingredients}
//           </p>
//           <p>
//             <strong>Steps:</strong> {recipe.steps}
//           </p>
//           <div className="recipe-actions">
//             <Link to={`/edit/${index}`}>Edit</Link>
//             <button onClick={() => deleteRecipe(index)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ViewRecipe;



// import React from "react";
// import { Link } from "react-router-dom";
// // import CommentSection from "./CommentSection";

// function ViewRecipe({ recipes, deleteRecipe, addCommentToRecipe }) {
//   return (
//     <div className="recipe-container">
//       <h2>View Recipes</h2>
//       {recipes.map((recipe, index) => (
//         <div key={index} className="recipe-card">
//           <h3>{recipe.name}</h3>
//           <p>
//             <strong>Ingredients:</strong> {recipe.ingredients}
//           </p>
//           <p>
//             <strong>Steps:</strong> {recipe.steps}
//           </p>
//           <div className="recipe-actions">
//             <Link to={`/edit/${index}`}>Edit</Link><br />
//             <button onClick={() => deleteRecipe(index)} className="del-btn">Delete</button>
//           </div>
//           {/* <CommentSection
//             recipe={recipe}
//             addComment={(comment) => addCommentToRecipe(index, comment)}
//           /> */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ViewRecipe;




// import React from "react";
// import { Link } from "react-router-dom";

// function ViewRecipe({ recipes, deleteRecipe }) {
//   return (
//     <div className="recipe-container">
//       <h2>View Recipes</h2>
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => (
//           <div key={recipe._id} className="recipe-card">
//             <h3>{recipe.name}</h3>
//             <p>
//               <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
//             </p>
//             <p>
//               <strong>Steps:</strong> {recipe.steps}
//             </p>
//             <div className="recipe-actions">
//               <Link to={`/edit/${recipe._id}`}>Edit</Link>
//               <br />
//               <button
//                 onClick={() => deleteRecipe(recipe._id)}
//                 className="del-btn"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No recipes available. Add a recipe to see it here!</p>
//       )}
//     </div>
//   );
// }

// export default ViewRecipe;



// import React from "react";
// import { Link } from "react-router-dom";

// function ViewRecipe({ recipes, deleteRecipe }) {
//   return (
//     <div className="recipe-container">
//       <h2>View Recipes</h2>
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => (
//           <div key={recipe._id} className="recipe-card">
//             <h3>{recipe.name}</h3>
//             <p>
//               <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
//             </p>
//             <p>
//               <strong>Steps:</strong> {recipe.steps}
//             </p>
//             <div className="recipe-actions">
//               <Link to={`/edit/${recipe._id}`}>Edit</Link>
//               <br />
//               <button
//                 onClick={() => deleteRecipe(recipe._id)}
//                 className="del-btn"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No recipes available. Add a recipe to see it here!</p>
//       )}
//     </div>
//   );
// }

// export default ViewRecipe;





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function ViewRecipe() {
//   const [recipes, setRecipes] = useState([]);

//   // Fetch recipes from the database
//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("/api/recipes"); // Replace with your API endpoint
//         setRecipes(response.data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   // Delete a recipe
//   // const deleteRecipe = async (id) => {
//   //   try {
//   //     await axios.delete(`/api/recipes/${id}`); // Replace with your API endpoint
//   //     setRecipes((prevRecipes) =>
//   //       prevRecipes.filter((recipe) => recipe._id !== id)
//   //     );
//   //   } catch (error) {
//   //     console.error("Error deleting recipe:", error);
//   //   }
//   // };

//   return (
//     <div className="recipe-container">
//       <h2>View Recipes</h2>
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => (
//           <div key={recipe._id} className="recipe-card">
//             <h3>{recipe.name}</h3>
//             <p>
//               <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
//             </p>
//             <p>
//               <strong>Steps:</strong> {recipe.steps}
//             </p>
//             <div className="recipe-actions">
//               <Link to={`/edit/${recipe._id}`}>Edit</Link>
//               <br />
//               <button
//                 onClick={() => deleteRecipe(recipe._id)}
//                 className="del-btn"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No recipes available. Add a recipe to see it here!</p>
//       )}
//     </div>
//   );
// }

// export default ViewRecipe;


// import { useEffect, useState } from "react";
// import axios from "axios";

// function ViewRecipes() {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch recipes from the database
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/recipes")
//       .then((response) => {
//         console.log("Fetched recipes:", response.data); // Debugging: log the response data
//         setRecipes(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching recipes:", error.response?.data || error.message);
//         setError("Error fetching recipes. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading recipes...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <div className="recipes-container">
//       <h2>Recipes</h2>
//       {recipes.length === 0 ? (
//         <p>No recipes found.</p>
//       ) : (
//         <ul className="recipe-list">
//           {recipes.map((recipe) => (
//             <li key={recipe.id} className="recipe-item">
//               <h3>{recipe.name}</h3>
//               <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
//               <p><strong>Steps:</strong> {recipe.steps}</p>
//               {/* {recipe.comments && (
//                 <p><strong>Comments:</strong> {recipe.comments.join(", ")}</p>
//               )} */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ViewRecipes;



import { useEffect, useState } from "react";
import axios from "axios";

function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingRecipe, setEditingRecipe] = useState(null); 

  
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    setLoading(true);
    axios
      .get("https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes")
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching recipes. Please try again later.");
        setLoading(false);
      });
  };

  
  // const handleDelete = (id) => {
  //   axios
  //     .delete(`https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes/${id}`)
  //     .then(() => {
  //       setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  //     })
  //     .catch((error) => {
  //       setError("Error deleting recipe. Please try again later.");
  //     });
  // };

  // // Edit a recipe
  // const handleEdit = (recipe) => {
  //   setEditingRecipe(recipe); // Set the recipe to edit in the form
  // };

  // const handleEditSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .put(`https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes/${id}`, editingRecipe)
  //     .then(() => {
  //       setEditingRecipe(null); // Close the editing form
  //       fetchRecipes(); // Refresh recipes
  //     })
  //     .catch((error) => {
  //       setError("Error updating recipe. Please try again later.");
  //     });
  // };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingRecipe({ ...editingRecipe, [name]: value });
  };

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="recipes-container">
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Steps:</strong> {recipe.steps}</p>
            
              <button onClick={() => handleEdit(recipe)}>Edit</button>
              <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {/* Edit Form */}
      {editingRecipe && (
        <div className="edit-form">
          <h3>Edit Recipe</h3>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Recipe Name</label>
              <input
                type="text"
                name="name"
                value={editingRecipe.name}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Ingredients</label>
              <textarea
                name="ingredients"
                value={editingRecipe.ingredients}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Steps</label>
              <textarea
                name="steps"
                value={editingRecipe.steps}
                onChange={handleEditChange}
                required
              />
            </div>
            <button type="submit">Update Recipe</button>
            <button type="button" onClick={() => setEditingRecipe(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ViewRecipes;


