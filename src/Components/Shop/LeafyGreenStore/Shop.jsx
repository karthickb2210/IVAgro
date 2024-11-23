import React, { useState, useEffect } from "react";
import Meals from "./components/Meals.jsx";
import "./shop.css";
import argulalg from "/store/argulalg.jpg"
import beetrootmg from "/store/beetrootmg.jpg"
import brocollimg from "/store/brocollimg.jpg"
import cabbagered from "/store/cabbageredmg.jpg"
import sunflower from "/store/sunflowermg.jpg"
import pea from "/store/peamg.jpg"
import mustardmg from "/store/mustardmg.jpg"
import  basillg from "/store/basillg.jpg"
import radishpinkmg from "/store/radishpinkmg.jpg"
import radishwhite from "/store/radishwhitemg.jpg"
import kalelg from "/store/kalelg.jpg"
import spinachlg from "/store/spinachlg.jpg"
import radishredmg from "/store/radishredmg.jpg"
import lettucelg from "/store/lettucelg.jpg"
import pakchoilg from "/store/pakchoilg.jpg"

import axiosInstance from "../../../config/AxiosConfig.js";
import Menu from "./components/Menu.jsx";
import LeavesLoader from "../../Loader/PlantLoader.jsx";
let greens = [];
export default function Shop() {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState({
    leafyGreens: false,
    microGreens: false,
  });

  const [filteredGreens, setFilteredGreens] = useState(greens);

  const Baseprices = {
    BabySpinach: 25,
    Lettuce: 25,
    PakChoi: 30,
    Kale: 24,
    Basil: 30,
    Argula: 35,
  };

  function filter() {
    if (show.leafyGreens && !show.microGreens) {
      setFilteredGreens(greens.filter((item) => item.id.length == 2));
    } else if (show.microGreens && !show.leafyGreens) {
      setFilteredGreens(greens.filter((item) => item.id.length == 3));
    } else {
      setFilteredGreens(greens);
    }
    console.log("filter");
  }
  function searchByName(val){
    console.log(val)
      setFilteredGreens(greens.filter((item)=>item.name.toLowerCase().includes(val)))
  }


  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("/admin/getStocks")
      .then((res) => {
        const stock = res.data.data[0];
        greens = [
          {
            id: "m8",
            name: "Kale",
            available: stock.kaleQuantity > 0,
            price: [
              15,
              Baseprices.Kale,
              2 * Baseprices.Kale,
              4 * Baseprices.Kale,
              10 * Baseprices.Kale,
            ],
            description:
              "It is a nutrition superstar due to the amounts of vitamin A, B6, C, K, folate, fiber, carotenoids and manganese it contains.",
            image:kalelg
          },
          {
            id: "m5",
            name: "Lettuce",
            available: stock.lettuceQuantity > 0,
            price: [
              15,
              Baseprices.Lettuce,
              2 * Baseprices.Lettuce,
              4 * Baseprices.Lettuce,
              10 * Baseprices.Lettuce,
            ],
            description:
              "Lettuce is an excellent source of beta carotene (Vitamin A) which is needed for healthy skin, bones and eyes.",
            image: lettucelg
          },
          {
            id: "m6",
            name: "Arugula",
            available: stock.argulaQuantity > 0,
            price: [
              25,
              Baseprices.Argula,
              2 * Baseprices.Argula,
              4 * Baseprices.Argula,
              10 * Baseprices.Argula,
            ],
            description:
              "It is high in beta-carotene vitamin C, folate, vitamin K and magnesium.It will provide 20% of the body's daily vitamin A.",
            image:argulalg
          },
          {
            id: "m7",
            name: "Pak Choi",
            available: stock.pakChoiQuantity > 0,
            price: [
              20,
              Baseprices.PakChoi,
              2 * Baseprices.PakChoi,
              4 * Baseprices.PakChoi,
              10 * Baseprices.PakChoi,
            ],
            description:
              "It's full of cancer fighting compounds such as vitamin C and vitamin E, beta-carotene ,folate and selenium.",
            image:pakchoilg
          },

          {
            id: "m9",
            available: stock.basilQuantity > 0,
            name: "Basil",
            price: [
              20,
              Baseprices.Basil,
              2 * Baseprices.Basil,
              4 * Baseprices.Basil,
              10 * Baseprices.Basil,
            ],
            description:
              "It provides some macro nutrients such as calcium and vitamin K, as well as a range of antioxidants.",
            image:basillg
          },
          {
            id: "m1",
            available: stock.babySpinachQuantity > 0,
            name: "Spinach",
            price: [
              15,
              25,
              2 * Baseprices.BabySpinach,
              4 * Baseprices.BabySpinach,
              10 * Baseprices.BabySpinach,
            ],
            description:
              "Baby Spinach is high in vitamin K which serves several function in your body and known for its role in blood clotting.",
            image:spinachlg
          },
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
              "These red-stemmed microgreens are packed with nutrients, including iron and vitamins that adds a burst of color to any dish.",
            image: beetrootmg
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
              "It deliver a peppery flavor which is rich in vitamins A, C, and K, making them an addition to salads and sandwiches.",
            image:radishredmg
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
              "These microgreens are loaded with nutrients like vitamin C and potassium, adding a refreshing crunch and heat to your meals.",
            image:radishwhite
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
              "These microgreens offer a crisp texture and a sharp, peppery flavor, packed with vitamins and antioxidants.",
            image:radishpinkmg
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
              "Bold and spicy, these greens are rich in vitamins A, C, and K, adding a tangy kick to salads, sandwiches, and stir-fries.",
            image:mustardmg
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
              "Nutty and crunchy, these protein-packed microgreens are a great source of vitamins E and B, perfect for snacking.",
            image: sunflower
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
              "These vibrant shoots are loaded with antioxidants and folate, crisp addition to salads, wraps, or smoothies.",
            image: pea
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
              "These microgreens are rich in sulforaphane and vitamins, known for immune-boosting and anti-inflammatory properties.",
            image:brocollimg 
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
              "These purple-tinged microgreens are packed with vitamins C and K, offering a colorful and nutritious boost to any dish.",
            image: cabbagered
          },
        ];
        console.log(greens);
        setFilteredGreens(greens);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Loading data");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LeavesLoader />
      ) : (
        <div className="bod mt-40 bg-gray-100">
          <Menu setShow={setShow} show={show} filter={filter} searchByName={searchByName} />
          <Meals greens={filteredGreens} />
        </div>
      )}
    </>
  );
}
