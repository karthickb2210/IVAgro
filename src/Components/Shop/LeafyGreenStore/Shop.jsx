import React, { useState, useEffect } from "react";
import Meals from "./components/Meals.jsx";
import "./shop.css";
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
        const sto = res.data.data[0];
        greens = [
          {
            id: "m8",
            name: "Kale",
            available: sto.kaleQuantity > 0,
            price: [
              15,
              Baseprices.Kale,
              2 * Baseprices.Kale,
              4 * Baseprices.Kale,
              10 * Baseprices.Kale,
            ],
            description:
              "It is a nutrition superstar due to the amounts of vitamin A, B6, C, K, folate, fiber, carotenoids and manganese it contains.",
            image:
              "https://t3.ftcdn.net/jpg/02/30/97/16/240_F_230971608_hsf90qBGPcmUuv3m0LkWPAuI5i5PnQmL.jpg",
          },
          {
            id: "m5",
            name: "Lettuce",
            available: sto.lettuceQuantity > 0,
            price: [
              15,
              Baseprices.Lettuce,
              2 * Baseprices.Lettuce,
              4 * Baseprices.Lettuce,
              10 * Baseprices.Lettuce,
            ],
            description:
              "Lettuce is an excellent source of beta carotene (Vitamin A) which is needed for healthy skin, bones and eyes.",
            image:
              "https://t4.ftcdn.net/jpg/02/80/03/99/240_F_280039907_Ny5g14FK1JQU59POwyU5eJj8ZaQNjmQw.jpg",
          },
          {
            id: "m6",
            name: "Arugula",
            available: sto.argulaQuantity > 0,
            price: [
              25,
              Baseprices.Argula,
              2 * Baseprices.Argula,
              4 * Baseprices.Argula,
              10 * Baseprices.Argula,
            ],
            description:
              "It is high in beta-carotene vitamin C, folate, vitamin K and magnesium. Two cups of raw arugula will provide 20% of the body's daily vitamin A.",
            image:
              "https://t3.ftcdn.net/jpg/08/50/95/42/240_F_850954265_neGQj7N1GC75XnFSnSLu0dYLI3xneQW5.jpg",
          },
          {
            id: "m7",
            name: "Pak Choi",
            available: sto.pakChoiQuantity > 0,
            price: [
              20,
              Baseprices.PakChoi,
              2 * Baseprices.PakChoi,
              4 * Baseprices.PakChoi,
              10 * Baseprices.PakChoi,
            ],
            description:
              "It's full of cancer fighting compounds such as vitamin C and vitamin E, beta-carotene ,folate and selenium.",
            image:
              "https://t3.ftcdn.net/jpg/03/92/37/26/240_F_392372698_06CR5RnRAQLHY7uzkqS9G6bfDeDPuuzk.jpg",
          },

          {
            id: "m9",
            available: sto.basilQuantity > 0,
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
            image:
              "https://t3.ftcdn.net/jpg/01/48/71/76/240_F_148717694_VUiPGqDdJ6gOuHKDr6hAvAmI5qdpKZef.jpg",
          },
          {
            id: "m1",
            available: sto.babySpinachQuantity > 0,
            name: "Spinach",
            price: [
              15,
              25,
              2 * Baseprices.BabySpinach,
              4 * Baseprices.BabySpinach,
              10 * Baseprices.BabySpinach,
            ],
            description:
              "Baby Spinach is high in vitamin K which serves several function in your body but it is best know for its role in blood clotting.",
            image:
              "https://t4.ftcdn.net/jpg/09/79/09/47/240_F_979094741_XvQvDjsLWmyGTx0wNOrSR3cQEOJb3kPD.jpg",
          },
          {
            id: "mg1",
            name: "Beetroot",
            available: sto.beetRootQuantity > 0,
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
            available: sto.radishPurpleQuantity > 0,
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
            available: sto.radishWhiteQuantity > 0,
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
            available: sto.radishPinkQuantity > 0,
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
            available: sto.mustardQuantity > 0,
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
            available: sto.sunflowerQuantity > 0,
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
            available: sto.peaShootQuantity > 0,
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
            available: sto.broccoliQuantity > 0,
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
            available: sto.redCabbageQuantity > 0,
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
