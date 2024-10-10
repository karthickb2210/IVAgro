import React, { useState } from "react";
import NavBar from "../../HomePage/NavBar/NavBar";
import Recipe from "./Recipe";
import recipes from "./Products/BabySpinach"
export default function RecipePage() {
  
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  return (
    <div>
      <NavBar />
      <div className="mt-36 flex">
        {/* Left side: list of recipe names with new design */}
        <div className="flex flex-col mt-16 w-1/4 p-4 space-y-4 bg-gray-100 border-r-2 border-gray-300">
          <h1 className=" text-2xl text">Recipes</h1>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className={`cursor-pointer p-4 rounded-lg transition duration-200 ease-in-out
                ${
                  selectedRecipe.id === recipe.id
                    ? "bg-green-500 text-white"
                    : "bg-white hover:bg-blue-100"
                }
              `}
              onClick={() => setSelectedRecipe(recipe)}
            >
              {recipe.name}
            </div>
          ))}
        </div>

        {/* Right side: selected recipe details */}
        <div className="flex flex-col w-3/4 p-4">
          <Recipe data={selectedRecipe} />
        </div>
      </div>
    </div>
  );
}
