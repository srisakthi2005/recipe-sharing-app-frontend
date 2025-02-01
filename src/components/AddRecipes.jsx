// import React, { useState } from "react";
// // import "../AddRecipe.css";

// function AddRecipes({ addRecipe }) {
//   const [recipe, setRecipe] = useState({ name: "", ingredients: "", steps: "", comments: [] });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addRecipe(recipe);
//     setRecipe({ name: "", ingredients: "", steps: "", comments: [] });
//     setMessage("Recipe added successfully!");
//     setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
//   };

//   return (
//     <div className="form-container">
//       <h2>Add a New Recipe</h2>
//       {message && <div className="success-message">{message}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Recipe Name</label>
//           <input
//             type="text"
//             name="name"
//             value={recipe.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Ingredients</label>
//           <textarea
//             name="ingredients"
//             value={recipe.ingredients}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Steps</label>
//           <textarea
//             name="steps"
//             value={recipe.steps}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit Recipe</button>
//       </form>
//     </div>
//   );
// }

// export default AddRecipes;





import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID library
import axios from "axios"; 

function AddRecipes({ addRecipe }) {
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", steps: "", comments: [] });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newRecipe = { ...recipe, id: uuidv4() }; // Generate a unique ID
  //   addRecipe(newRecipe);
  //   setRecipe({ name: "", ingredients: "", steps: "", comments: [] });
  //   setMessage("Recipe added successfully!");
  //   setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...recipe, id: uuidv4(),
      comments: recipe.comments.join("nice")
     }; // Generate a unique ID

  
    console.log("Submitting recipe:", newRecipe); // Debugging: log the payload
  
  //   axios
  //     .post("http://localhost:3000/api/recipes", newRecipe)
  //     .then((response) => {
  //       console.log("Recipe added successfully:", response.data);
  //       setMessage("Recipe added successfully!");
  //       setRecipe({ name: "", ingredients: "", steps: "", comments: [] });
  //     })
  //     .catch((error) => {
  //       console.error("Error adding recipe:", error.response?.data || error.message);
  //       setMessage("Error adding recipe. Please try again.");
  //     });
  
  //   setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  // };

  axios
  .post("https://recipe-sharing-app-backend-7gkl.onrender.com/api/recipes", newRecipe)
  .then((response) => {
    console.log("Recipe added successfully:", response.data);
    setMessage("Recipe added successfully!");
    setRecipe({ name: "", ingredients: "", steps: "" });
  })
  .catch((error) => {
    console.error("Error adding recipe:", error.response?.data || error.message);
    setMessage("Error adding recipe. Please try again.");
  });

setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
};
  

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      {message && <div className="success-message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipe Name</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Steps</label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipes;
