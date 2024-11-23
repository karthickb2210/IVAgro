import MealItem from "./MealItem.jsx";
import { useState} from "react";
import "../shop.css"
import LeavesLoader from "../../../Loader/PlantLoader.jsx";

export default function Meals({ greens }) {
  const [isLoading, setIsLoading] = useState(false);
    
  return (
    <>
      {isLoading ? (
        <LeavesLoader />
      ) : (
        <ul
          id="meals"
          className="w-[95%] mx-[auto] my-8 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 space-x-7 space-y-6"
        >
           {greens.map((meal) => (
              <MealItem key={meal.id} meal={meal}  />
            ))}
        </ul>
      )}
    </>
  );
}
