// import React, { useContext } from "react";
// import { AppContext } from "../context/App_Context";
// import FetchRecipeById from "./FetchRecipeById";

// const Saved = () => {
//   const { savedRecipe } = useContext(AppContext);
//   console.log(savedRecipe);
//   return (
//     <div>
//       <div className="row container mx-auto my-3">
//         {savedRecipe?.map((data) => (
//           <div className="col-md-3" key={data.recipe}>
//             <FetchRecipeById id={data.recipe} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Saved;
import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";

const Saved = () => {
  const { savedRecipe } = useContext(AppContext);
  console.log(savedRecipe);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Saved Recipes</h2>
      
      <div className="row justify-content-center gap-3">
        {savedRecipe?.map((data) => (
          <div
            className="col-12 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center"
            key={data.recipe}
          >
            <FetchRecipeById id={data.recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
