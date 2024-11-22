import MealItem from "./MealItem.jsx";
import axiosInstance from "../../../../config/AxiosConfig.js";
import { useState, useEffect } from "react";
import LeavesLoader from "../../../Loader/PlantLoader.jsx";
import { toast } from "sonner";

export default function Meals({ greens }) {
  const [isLoading, setIsLoading] = useState(false);
    
  return (
    <>
      {isLoading ? (
        <LeavesLoader />
      ) : (
        <ul
          id="meals"
          className="w-[90%] max-w-[70rem] mx-[auto] my-8 p-4 grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-4 space-x-7 space-y-6"
        >
           {greens.map((meal) => (
              <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
      )}
    </>
  );
}
