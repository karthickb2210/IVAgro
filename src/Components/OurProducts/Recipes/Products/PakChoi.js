import stirfriedpakchoi from "../../img/pakchoi/stir-fried-pakchoi.jpg";
import ramenpakchoi from "../../img/pakchoi/ramenpakchoi.jpg";
import MushroomPakChoi from "../../img/pakChoi/MushroompakChoi.jpg";
import Chickenpakchoisoup from "../../img/pakChoi/Chickenpakchoisoup.jpg"
import TofuPakchoi from "../../img/pakChoi/TofuPakchoi.jpg"
const recipes = [
  {
    id: 1,
    name: "Stir-Fried Pak Choi",
    time: 15,
    servings: 2,
    ingredients: [
        "1 bunch pak choi , cleaned and chopped",
         "2 cloves garlic, minced",
        "1 small onion, chopped",
        "1 cup mixed vegetables", 
        "2 tablespoons vegetable oil",
        "1 tablespoon soy sauce",
        "1 tablespoon oyster sauce"
    ],
    steps: [
        "Heat oil in a wok or large skillet over medium-high heat",
         "Add garlic and onion; stir-fry until softened",
         "Add mixed vegetables; stir-fry for 2-3 minutes",
         "Add pokchoy; stir-fry until wilted",
         "Season with soy sauce, oyster sauce (if using), salt, and pepper",
         "Serve hot"
    ],
    image: stirfriedpakchoi,
    nutrients: [
      { name: "Calories", value: "200 kcal" },
      { name: "Protein", value: "5 g" },
      { name: "Fat", value: "5 g" },
      {name :'Fiber',value : "7 g"},
      { name: "Carbs", value: "15 g" },
    ],
  },
  {
    id: 2,
    name: "Pak Choi Ramen Salad",
    time: 40,
    servings: 4,
    ingredients: [
        "½ cup canola oil",
         "½ cup white sugar",
        "¼ cup red wine vinegar",
        "2 tablespoons soy sauce",
        "¼ cup butter",
        "2 tablespoons white sugar",
        "2 packages ramen noodles",
        "½ cup sesame seeds",
        "3 ounces slivered almonds",
        "1 tablespoon soy sauce",
        "2 large heads bok choy, chopped",
        "6 green onions, chopped"
    ],
    steps: [
        "Combine canola oil, sugar, red wine vinegar, and 2 tablespoons soy sauce in a bowl",
         "Melt butter in a saucepan over low heat", 
         "Add sugar and stir until dissolved",
         "Crumble ramen noodles into butter mixture",
         "Stir ramen seasoning packet, sesame seeds, almonds, and soy sauce into noodle mixture",
         "Cook until lightly toasted, stirring constantly to prevent burning, 2 to 3 minutes", 
         "Remove from heat",
         "Toss oil and vinegar mixture, ramen mixture, bok choy, and green onions together in a large bowl"
    ],
    image: ramenpakchoi,
    nutrients: [
      { name: "Calories", value: "618 kcal" },
      { name: "Protein", value: "10 g" },
      { name: "Fat", value: "44 g" },
      { name: "Carbs", value: "50 g" }
    ],
  },
  {
    id: 3,
    name: "Mushroom Bok Choy Soup",
    time: 35,
    servings: 4,
    ingredients: [
        "¼ cup unsalted butter",
         "1 pound white and cremini mushrooms",
         "1 head bok choy, chopped",
         "4 green onions, sliced",
         "2 tablespoons minced garlic" ,
         "8 slices fresh ginger, quartered",
         "¼ cup lime juice",
         '7 cups chicken broth',
         "½ cup chopped fresh cilantro"
    ],
    steps: [
        "Heat butter in a stockpot over medium heat", 
        "Add mushrooms, bok choy, green onions, garlic, and ginger", 
        "Sprinkle mushroom mixture with lime juice", 
        "Cook and stir just until lightly browned, 2 to 3 minutes",
        "Increase the heat to medium-high", 
        "Pour in chicken broth and bring to a boil",
        "Reduce the heat to low and simmer until vegetables are soft, about 5 minutes",
        "Ladle into bowls and top with cilantro"
        
    ],
    image: MushroomPakChoi,
    nutrients: [
      { name: "Calories", value: "187 kcal" },
      { name: "Protein", value: "10 g" },
      { name: "Fat", value: "6 g" },
      { name: "Carbs", value: "28 g" },
    ],
  },
  {
    id: 4,
    name: "Chicken Pak Choi Soup",
    time: 48,
    servings: 3,
    ingredients: [
        "4 cups chicken broth",
        "2 cups water",
        "¼ cup finely chopped onion", 
        "1 small jalapeno pepper", 
        "1 piece fresh ginger root",
        "2 cloves garlic",
        "1 pound boneless, skinless chicken breasts",
        "1 head baby bok choy, chopped"
    ],
    steps: [
        "Combine chicken broth, water, onion, jalapeno, ginger, and garlic in a large pot",
        "Bring to a boil",
        "Add chicken breasts cook until no longer pink in the center" ,
        "An instant-read thermometer inserted into the center reads at least 165 degrees F",
        "Remove the chicken from the pot",
        "Cool until easily handled, about 5 minutes",
        "Shred the chicken and return to the pot", 
        "Stir in bok choy and cook until wilted, 3 to 5 minutes",
        "Season soup with salt"
    ],
    image: Chickenpakchoisoup,
    nutrients: [
      { name: "Calories", value: "332 kcal" },
      { name: "Protein", value: "7 g" },
      { name: "Fat", value: "28 g" },
      { name: "Carbs", value: "27 g" },
      {name :"Fiber",value : "8 g"},
      {name :"Sugar",value: "5 g"},
      {name : "Sodium",value : "152 mg"}
    ],
  },
  {
    id: 5,
    name: "Tofu And Pak Choi Stir-Fry",
    time: 50,
    servings: 4,
    ingredients: [
        "3 tablespoons low-sodium soy sauce", 
         "1 tablespoon rice vinegar",
        "2 tablespoons shaoxing wine",
        "1 tablespoon honey",
        "1 14-oz pkg extra firm tofu",
        "1 tablespoon soy sauce", 
        "1 teaspoon sesame oil",
        "2 tablespoons cornstarch",
        "2 tablespoons neutral-flavoured oil",
        "1 pound baby pak choi",
        "1 -inch piece of ginger root",
        "3 garlic cloves, minced",
       "3 green onions",
        "2 red chilis",
 "1 cup toasted cashews or peanuts",
    ],
    steps: [
        "Preheat oven to 400ºF",
         "Whisk together all the sauce ingredients",
 "Drain the tofu and squeeze out the extra moisture",
 "Pat it dry really well with a clean kitchen towel then cut into 1-inch cubes",
 "Mix 1 tablespoon soy sauce and 1 teaspoon sesame oil in a large bowl, or ziplock bag", 
 "Add the cubed tofu and toss to coat. Let sit for about 3 to 5 minutes to marinate",
"Spread the tofu cubes out evenly onto a parchment-lined baking sheet and sprinkle the cornstarch over top", 
"Use a little more if the tofu still seems wet" ,
"Bake until edges are crispy and golden brown, flipping once, for about 20-25 minutes",
 "Meanwhile, place a large skillet over medium-high heat and add 1 tablespoon of oil" ,
 "Add the bok choy, and cook for about 2 to 3 minutes, or until the bok choy is just tender", 
 "Once tofu is ready, return the skillet to medium-low heat and add the remaining tablespoon of oil",
"Add the crispy tofu, ginger, garlic, scallions, and Thai chilis. Cook, stirring frequently, until fragrant, about 1 minute", 
"Stir in the soy sauce mixture into the skillet, toss for 30 seconds then add the bok choy", 
"Toss again until everything is well coated in the sauce"
    ],
    image: TofuPakchoi,
    nutrients: [
      { name: "Calories", value: "150 kcal" },
      { name: "Protein", value: "5 g" },
      { name: "Fat", value: "5 g" },
      { name: "Carbs", value: "21 g" },
      { name: "Fiber", value: "3 g" },
      { name: "Sugar", value: "5 g" },
      { name: "Sodium", value: "789 mg" },
    ],
  },
];

export default recipes;
