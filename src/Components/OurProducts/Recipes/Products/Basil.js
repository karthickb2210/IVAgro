import basillemonade from "../../img/basil/basillemonade.jpg"
import daalwithbasil from "../../img/basil/daalwithbasil.jpg"
import basilsoup from "../../img/basil/basilsoup.jpg";
import RicottaandBasilCrostini from "../../img/basil/RicottaandBasilCrostini.jpg"
import tomatowithbasil from "../../img/basil/tomatowithbasil.jpg"
const recipes = [
  {
    id: 1,
    name: "Basil Lemonade",
    time: 20,
    servings: 2,
    ingredients: [
        "1 ¼ cups fresh lemon juice and lemon slices",
         "½ cup honey or agave syrup",
         "1 cup packed fresh basil leaves",
        "3 cups cold water",
        "Ice cubes"
        
    ],
    steps: [
        "Place lemon juice, honey (or agave), and basil in a blender and blend until smooth", 
        "Pass through a strainer into a pitcher or large jar", 
        "Add water and chill until ready to serve",
        "Serve over ice, garnished with lemon slices and basil leaves"
        
    ],
    image: basillemonade,
    nutrients: [
      { name: "Calories", value: "98 kcal" },
      { name: "Protein", value: "1 g" },
      { name: "Fat", value: "0 g" },
      { name: "Carbs", value: "27 g" },
    ],
  },
  {
    id: 2,
    name: "Daal with basil leaves",
    time: 30,
    servings: 4,
    ingredients: [
        "0.5 cup Moong or Toor Dal",
        "1.5 cup Water",
         "0.5 tsp Turmeric powder",
        "2 Green chili",
        "0.5 tsp Cumin seeds",
        "0.5 tsp Mustard seeds",
        "1 tsp Ginger garlic paste",
        "0.25 cup Basil leaves",
        "0.25 cup Sliced onion",
        "1 tsp Oil/Ghee"
    ],
    steps: [
        "Wash and soak dal for 30-40 minutes",
        "Drain water and pressure cook with freshwater, turmeric powder",
        "Add a pinch of salt for 3-4 wh",
        "Allow pressure to release naturally",
        "Heat oil/ghee in a pan",
         "Once hot, add mustard seeds, cumin seeds, and let them splutter",
        "Add finely green chili, onions, ginger, and garlic paste and fry for 5 minutes or until onion brown",
        "Next, add turmeric powder, salt, roughly chopped basil leaves, cooked dal, and mix well",
        "Add warm water if required to adjust consistency and bring it to a boil",
        "Simmer for another 5 minutes and take off the flame"
    ],
    image: daalwithbasil,
    nutrients: [
      { name: "Calories", value: "250 kcal" },
      { name: "Protein", value: "24 g" },
      { name: "Fat", value: "10 g" },
      { name: "Carbs", value: "25 g" },
      { name: "Fiber", value: "10 g" },
      { name: "Sugar", value: "3 g" },
      { name: "Sodium", value: "400 mg" },
    ],
  },
  {
    id: 3,
    name: "Vegetable and Basil soup",
    time: 20,
    servings: 4,
    ingredients: [
        "1/2 cup finely chopped onions",
        "3/4 cup finely chopped coloured capsicum",
        "1/4 cup finely chopped french beans",
        "1/4 cup finely chopped carrot",
        "1/4 cup finely chopped cabbage",
        "2 tbsp finely chopped celery",
        "1/4 cup fresh basil leaves",
        "2 tsp olive oil",
        "1 tsp finely chopped garlic", 
        "1/2 tsp finely chopped green chillies",
        "4 cups vegetable stock"
    ],
    steps: [
        "Heat the olive oil in a deep non-stick pan", 
        "Add the garlic and green chillies and sauté on a medium flame for 10 seconds",
        "Add the onions, coloured capsicum, french beans, carrot, cabbage and celery and sauté on amedium flame for 3 to 4 minutes",
        "Add the vegetable stock and salt, mix well and cook on a medium flame for 3 to 4 minutes, while stirring occasionally",
        "Meanwhile, combine the basil leaves along with ¼ cup of water and blend in a mixer till smooth",
        "Add the basil mixture and black pepper powder to the soup, mix well",
        "Cook on a medium flame for 1 to 2 minutes, while stirring occasionally",
        "Serve immediately garnished with basil leaves"
    ],
    image: basilsoup,
    nutrients: [
      { name: "Calories", value: "100 kcal" },
      { name: "Protein", value: "3 g" },
      { name: "Fat", value: "5 g" },
      {name: "Fiber",value:"6 g"},
      {name:"Sodium",value:"600 mg"},
      { name: "Carbs", value: "25 g" },
    ],
  },
  {
    id: 4,
    name: "Ricotta and Basil Crostini",
    time: 20,
    servings: 3,
    ingredients: [
        "1/4 cup crumbled ricotta cheese",
 "8 french bread slices",
"1/4 cup basil , torn into pieces",
"1 tsp honey",
"1/2 tsp coarsely crushed black pepper",
"1 tsp lemon juice",
 "1 tsp olive oil"
    ],
    steps: [
        "Place the french bread slices on a greased baking tray and apply a little coconut oil on each bread slice",
"Bake in pre-heated oven at 200°c(400°f) for 15 minutes, or till they turn light brown",
"Place the toasted bread slices on a clean, dry surface and put a little of the ricotta cheese and spread it evenly",
"Put a little basil-honey mixture on the ricotta cheese layer and spread it evenly",
"Serve immediately"

    ],
    image: RicottaandBasilCrostini,
    nutrients: [
      { name: "Calories", value: "170 kcal" },
      { name: "Protein", value: "7 g" },
      { name: "Fat", value: "28 g" },
      { name: "Carbs", value: "27 g" },
      {name :"Fiber",value : "8 g"},
      {name :"Sugar",value: "5 g"},
      {name : "Sodium",value : "200 mg"}
    ],
  },
  {
    id: 5,
    name: "Tangy Tomato Rice",
    time: 20,
    servings: 4,
    ingredients: [
        "2 medium-sized Tomato",
        "1 cup Cooked rice",
        "0.25 cup Basil leaves",
        "2 finely chopped Green chilies",
        "1 tsp Garlic ginger paste",
        "1 tsp oil/ghee",
        "A dash Black pepper powder",
        "2 springs, chopped Coriander leaves"
    ],
    steps: [
        "Take tomatoes and boil until the skin starts to peel",
"Peel off the skin and chop them into small pieces",
"Heat oil/ghee in a pan", 
"Once hot, add green chili, garlic ginger paste and fry for a minute",
"Add tomatoes, basil leaves and cook for 2-3 minutes",
"Add cooked rice, black pepper powder, salt and mix well",
"Cook for a couple of minutes and take off the flame",
"Garnish with coriander leaves and serve hot"

    ],
    image: tomatowithbasil,
    nutrients: [
      { name: "Calories", value: "300 kcal" },
      { name: "Protein", value: "5 g" },
      { name: "Fat", value: "10 g" },
      { name: "Carbs", value: "40 g" },
      { name: "Fiber", value: "3 g" },
      { name: "Sugar", value: "6 g" }
    ],
  },
];

export default recipes;
