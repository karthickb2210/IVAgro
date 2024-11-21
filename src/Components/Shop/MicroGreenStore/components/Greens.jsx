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
    {
      id: "mg1",
      name: "Beetroot",
      available: stock.beetRootQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "These stunning red-stemmed microgreens are packed with essential nutrients, including iron and vitamins, and have a mild, earthy flavor that adds a burst of color and health to any dish.",
      image:
        "https://t4.ftcdn.net/jpg/09/83/28/39/240_F_983283983_KMxeDqX8jdoaQvX2CfNzZiwb3qzQ2Vgl.jpg",
    },
    {
      id: "mg2",
      name: "Radish Purple",
      available: stock.radishPurpleQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "These vibrant purple-hued microgreens deliver a zesty, peppery flavor and are rich in vitamins A, C, and K, making them a perfect addition to salads and sandwiches.",
      image:
        "https://t3.ftcdn.net/jpg/04/72/33/64/240_F_472336423_ilrppDfIZg9KXMkcgVCqiO7yxEAHjY9f.jpg",
    },
    {
      id: "mg3",
      name: "Radish White",
      available: stock.radishWhiteQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "Crisp and mildly spicy, these delicate white-stemmed microgreens are loaded with nutrients like vitamin C and potassium, adding a refreshing crunch and subtle heat to your meals.",
      image:
        "https://t3.ftcdn.net/jpg/00/35/72/82/240_F_35728224_g2nGbJcgN1D1zymNyiEQO2XTWV0WeOgA.jpg",
    },
    {
      id: "mg4",
      name: "Radish Pink",
      available: stock.radishPinkQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "These eye-catching pink-stemmed microgreens offer a crisp texture and a sharp, peppery flavor, packed with vitamins and antioxidants to enhance the taste.",
      image:
        "https://t3.ftcdn.net/jpg/08/35/15/76/240_F_835157607_OW4MV1f2DEyWoi5A5JKjthmxlORw30DH.jpg",
    },
    {
      id: "mg5",
      name: "Mustard",
      available: stock.mustardQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "Bold and spicy, these flavorful greens are rich in vitamins A, C, and K, adding a tangy kick to salads, sandwiches, and stir-fries.",
      image:
        "https://t4.ftcdn.net/jpg/01/99/32/09/240_F_199320909_tKKtgerxKrhoZuV34MUxaTIL0SVucFNL.jpg",
    },
    {
      id: "mg6",
      name: "Sunflower",
      available: stock.sunflowerQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "Nutty and crunchy, these protein-packed microgreens are a great source of vitamins E and B, perfect for snacking or adding texture to dishes.",
      image:
        "https://t4.ftcdn.net/jpg/02/98/68/95/240_F_298689511_WKmVwxQxTsxCVkPIfBwTYyBBtFs7Udkq.jpg",
    },
    {
      id: "mg7",
      name: "Pea Shoot",
      available: stock.peaShootQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "Sweet and tender, these vibrant shoots are loaded with antioxidants and folate, offering a fresh, crisp addition to salads, wraps, or smoothies.",
      image:
        "https://t3.ftcdn.net/jpg/08/14/88/24/240_F_814882407_R1FEskmPJSx4Vq9efMLkPoWxv4gBpN2x.jpg",
    },
    {
      id: "mg8",
      name: "Broccoli",
      available: stock.broccoliQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        "Mild and slightly nutty, these nutrient-dense microgreens are rich in sulforaphane and vitamins, known for their immune-boosting and anti-inflammatory properties.",
      image:
        "https://t4.ftcdn.net/jpg/08/09/22/15/240_F_809221562_dtISQsROdkTi1kjlIxYFSZt4lYgaSr2r.jpg",
    },
    {
      id: "mg9",
      name: "Red Cabbage",
      available: stock.redCabbageQuantity > 0,
      price: [
        15,
        Baseprices.Kale,
        2 * Baseprices.Kale,
        4 * Baseprices.Kale,
        10 * Baseprices.Kale,
      ],
      description:
        " With a mild, sweet flavor, these purple-tinged microgreens are packed with vitamins C and K, offering a colorful and nutritious boost to any dish.",
      image:
        "https://t4.ftcdn.net/jpg/05/57/86/43/240_F_557864309_P1rWgTwdOGJgFaRM7P7xu7uop79VgT56.jpg",
    },
     
    
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
