// function CommentSection({ recipe, addComment }) {
//   const [comment, setComment] = useState("");

//   const handleAddComment = () => {
//     if (comment.trim()) {
//       addComment(comment);
//       setComment("");
//     }
//   };

//   return (
//     <div className="comment-section">
//       <h3>Comments</h3>
//       <ul>
//         {recipe.comments.map((cmt, index) => (
//           <li key={index}>{cmt}</li>
//         ))}
//       </ul>
//       <div className="add-comment">
//         <textarea
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Add a comment"
//         />
//         <button onClick={handleAddComment}>Add Comment</button>
//       </div>
//     </div>
//   );
// }

// export default CommentSection;




// import React, { useState } from "react";

// function CommentSection({ recipe, addComment }) {
//   const [comment, setComment] = useState("");

//   const handleAddComment = () => {
//     if (comment.trim()) {
//       addComment(comment);
//       setComment("");
//     }
//   };

//   return (
//     <div className="comment-section">
//       <h3>Comments</h3>
//       <ul>
//         {recipe.comments.map((cmt, index) => (
//           <li key={index}>{cmt}</li>
//         ))}
//       </ul>
//       <div className="add-comment">
//         <textarea
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Add a comment"
//         /> <br />
//         <button onClick={handleAddComment} className="comment-btn">Add Comment</button>
//       </div>
//     </div>
//   );
// }

// export default CommentSection;
