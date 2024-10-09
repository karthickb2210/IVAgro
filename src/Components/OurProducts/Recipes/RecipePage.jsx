import React,{useState} from 'react'
import NavBar from '../../HomePage/NavBar/NavBar'
import Recipe from './Recipe'
import bakedeggs from "../img/spinach/bakedeggs.jpg";
 import garlicnoodles from "../img/spinach/garlicnoodles.jpg"
export default function RecipePage() {

    

  const recipes = [{
    "id" :1,
    "name": "Baked Eggs with Spinach",
    "time" : 30,
    "servings"  : 4,
    "ingredients" : [
        "2 tsp olive oil",
"1/4 cup diced shallots",
 "1 1/2 lb baby spinach, large stems removed",
 "4 large eggs",
 "Salt and fresh ground pepper",
 "2 tbsp Asiago cheese", "baking spray"
    ],
    "steps" : [
        "Preheat an oven to 400° F",
        "Lightly spray four oven-safe dishes or ramekins with cooking spray.",
        "Heat a large skillet over medium-low heat, add oil, shallots and cook 2-3 minutes"
        ,"Add spinach, salt and pepper and cook until the spinach wilts, about 2-3 minutes",
        "Mix in Asiago cheese and remove from heat",
        "Divide the wilted spinach among the oven-safe dishes, making a well in the center of each",
        "Break an egg into each dish and season with salt and pepper",
        "Place the ramekins on one or two rimmed baking sheets and bake until the whites are set for about 17 minutes or to your liking",
        "Serve immediately"

    ],
    "image": bakedeggs

  },
  {
    "id" :2,
    "name": "Garlic and Spinach Noodles",
    "time" : 30,
    "servings"  : 4,
    "ingredients" : [
        "1 small onion",
"6 garlic cloves", 
"Butter for frying" ,"1/2 cup white wine",
 "1 cup chicken",
"4 Tbsp. anchovy–caper butter",
 "1 cup cream",
"1 lb. long pasta",
"1 bag spinach, chopped into strips",
"Raclette",
"Anchovy-caper butterCombine ","1/4 bunch (1/4 cup) parsley ",
" Zest of 1 lemonly chopped"
    ],
    "steps" : [
        "Preheat an oven to 400° F",
        "Lightly spray four oven-safe dishes or ramekins with cooking spray.",
        "Heat a large skillet over medium-low heat, add oil, shallots and cook 2-3 minutes"
        ,"Add spinach, salt and pepper and cook until the spinach wilts, about 2-3 minutes",
        "Mix in Asiago cheese and remove from heat",
        "Divide the wilted spinach among the oven-safe dishes, making a well in the center of each",
        "Break an egg into each dish and season with salt and pepper",
        "Place the ramekins on one or two rimmed baking sheets and bake until the whites are set for about 17 minutes or to your liking",
        "Serve immediately"

    ],
    "image":garlicnoodles

  }
];

  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
    return (
        <div>
      <NavBar />
      <div className='mt-36 flex'>
        {/* Left side: list of recipe names with new design */}
        <div className='flex flex-col mt-16 w-1/4 p-4 space-y-4 bg-gray-100 border-r-2 border-gray-300'>
        <h1 className=' text-2xl text'>Recipes</h1>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className={`cursor-pointer p-4 rounded-lg transition duration-200 ease-in-out
                ${selectedRecipe.id === recipe.id ? 'bg-green-500 text-white' : 'bg-white hover:bg-blue-100'}
              `}
              onClick={() => setSelectedRecipe(recipe)}
            >
              {recipe.name}
            </div>
          ))}
        </div>

        {/* Right side: selected recipe details */}
        <div className='flex flex-col w-3/4 p-4'>
          <Recipe data={selectedRecipe} />
        </div>
      </div>
    </div>
  )
}
