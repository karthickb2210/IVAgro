import GreenItem from "./GreenItem.jsx";
import axiosInstance from "../../../../config/AxiosConfig.js";
import { useState, useEffect } from "react";
import LeavesLoader from "../../../Loader/PlantLoader.jsx";
import { toast } from "sonner";

export default function Greens() {
  const [isLoading, setIsLoading] = useState(false);
  const [stock, setStock] = useState({
    beetRootQuantity:0,
    radishPurpleQuantity:0,
    radishWhiteQuantity:0,
    radishPinkQuantity:0,
    mustardQuantity:0,
    sunflowerQuantity:0,
    peaShootQuantity:0,
    broccoliQuantity:0,
    redCabbageQuantity:0
  });

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("/admin/getStocks")
      .then((res) => {
        console.log(res.data.data[0]);
        setStock(res.data.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Loading data");
        setIsLoading(false);
      });
  }, []);

  const Baseprices = {
    BabySpinach: 25,
    Lettuce: 25,
    PakChoi: 30,
    Kale: 24,
    Basil: 30,
    Argula: 35,
  };

  const loadedMeals = [
    
     
    
  ];

  return (
    <>
      {isLoading ? (
        <LeavesLoader />
      ) : (
        <ul
          id="meals"
          className="w-[90%] max-w-[70rem] mx-[auto] my-8 p-4 grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-4 space-x-7 space-y-6"
        >
          {loadedMeals.map((meal) => (
            <GreenItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </>
  );
}
