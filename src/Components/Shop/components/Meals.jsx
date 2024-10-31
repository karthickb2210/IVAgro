import MealItem from "./MealItem.jsx";
import axiosInstance from "../../../config/AxiosConfig.js";
import { useState ,useEffect} from "react";
import PlantLoader from "../../Loader/PlantLoader.jsx"
import { toast } from "sonner";

export default function Meals() {
  const [isLoading,setIsLoading] = useState(false)
  const [stock,setStock] = useState({
    babySpinachQuantity : 0,
    lettuceQuantity : 0,
    kaleQuantity  :0,
    basilQuantity : 0,
    pakChoiQuantity : 0,
    argulaQuantity: 0
  });

  useEffect(() => {
    setIsLoading(true)
    axiosInstance
      .get("/admin/getStocks")
      .then((res) => {
        console.log(res.data.data[0]);
        setStock(res.data.data[0]);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Loading data")
        setIsLoading(false)
      });
  }, []);

  const Baseprices = {
    BabySpinach : 25,
    Lettuce : 25,
    PakChoi : 30,
    Kale : 24,
    Basil : 30,
    Argula : 35
  }

  const loadedMeals = [
    {
      id: "m8",
      name: "Kale",
      available : stock.kaleQuantity>0,
      price: [15, Baseprices.Kale,2*Baseprices.Kale,4*Baseprices.Kale,10*Baseprices.Kale],
      description:
        "It is a nutrition superstar due to the amounts of vitamin A, B6, C, K, folate, fiber, carotenoids and manganese it contains.",
      image:
        "https://t3.ftcdn.net/jpg/02/30/97/16/240_F_230971608_hsf90qBGPcmUuv3m0LkWPAuI5i5PnQmL.jpg",
    },
    //  {
    //      "id": "m2",
    //      "name": "Parsley",
    //      "price": [
    //         "8.99",
    //      "16.99",
    //       "24.99",
    //       "36.99",
    //       "54.99",
    //       "80.99"
    //    ],
    //      "description": "Parlsey contains several important nutrients such as vitamins A,K and C. It's also a good source of minerals, calcium, iron, magnesium and pottasium",
    //      "image": "https://t3.ftcdn.net/jpg/00/84/25/74/240_F_84257423_tVophZEYP0Rvdf07raBdVogXDs188EAs.jpg"
    //  },
    //  {
    //      "id": "m3",
    //      "name": "Rosemary",
    //      "price": [
    //         "8.99",
    //      "16.99",
    //       "24.99",
    //       "36.99",
    //       "54.99",
    //       "80.99"
    //    ],
    //      "description": "Rosemary has rande of possible health benefits.The Herb not only tastes good in culinary dishes, such as rosemary chicken and lamb, but it also contains iron, calcium and vitamin B6. ",
    //      "image": "https://t4.ftcdn.net/jpg/03/95/47/51/240_F_395475146_TL4pmQ03jzoDJAxibqj3KbET7Hx4Ojqi.jpg"
    //  },
    //  {
    //      "id": "m4",
    //      "name": "Thyme",
    //      "price": [
    //         "8.99",
    //      "16.99",
    //       "24.99",
    //       "36.99",
    //       "54.99",
    //       "80.99"
    //    ],
    //      "description": "Thyme is an herb from the mint family and is a culinary staple. That said, it may also provide numerous health benefits, such as fighting acne, regulating mucus, fighting infections. ",
    //      "image": "https://t3.ftcdn.net/jpg/08/37/49/98/240_F_837499825_5mzhBgOElQUKUlqO98hUYmvo7sjjoy2F.jpg"
    // },
    {
      id: "m5",
      name: "Lettuce",
      available : stock.lettuceQuantity>0,
      price: [15,Baseprices.Lettuce,2*Baseprices.Lettuce,4*Baseprices.Lettuce,10*Baseprices.Lettuce],
      description:
        "Lettuce is an excellent source of beta carotene (Vitamin A) which is needed for healthy skin, bones and eyes.",
      image:
        "https://t4.ftcdn.net/jpg/02/80/03/99/240_F_280039907_Ny5g14FK1JQU59POwyU5eJj8ZaQNjmQw.jpg",
    },
    {
        id: "m6",
        name: "Arugula",
        available : stock.argulaQuantity >0,
        price: [25,Baseprices.Argula,2*Baseprices.Argula,4*Baseprices.Argula,10*Baseprices.Argula],
        description: "It is high in beta-carotene vitamin C, folate, vitamin K and magnesium. Two cups of raw arugula will provide 20% of the body's daily vitamin A.",
        image: "https://t3.ftcdn.net/jpg/08/50/95/42/240_F_850954265_neGQj7N1GC75XnFSnSLu0dYLI3xneQW5.jpg"
    },
    {
      id: "m7",
      name: "Pak Choi",
      available : stock.pakChoiQuantity>0,
      price: [20,Baseprices.PakChoi,2*Baseprices.PakChoi,4*Baseprices.PakChoi,10*Baseprices.PakChoi],
      description:
        "It's full of cancer fighting compounds such as vitamin C and vitamin E, beta-carotene ,folate and selenium.",
      image:
        "https://t3.ftcdn.net/jpg/03/92/37/26/240_F_392372698_06CR5RnRAQLHY7uzkqS9G6bfDeDPuuzk.jpg",
    },
    
    {
      id: "m9",
      available : stock.basilQuantity>0,
      name: "Basil",
      price: [20, Baseprices.Basil,2*Baseprices.Basil,4*Baseprices.Basil ,10*Baseprices.Basil],
      description:
        "It provides some macro nutrients such as calcium and vitamin K, as well as a range of antioxidants.",
      image:
        "https://t3.ftcdn.net/jpg/01/48/71/76/240_F_148717694_VUiPGqDdJ6gOuHKDr6hAvAmI5qdpKZef.jpg",
    },
    {
      id: "m1",
      available : stock.babySpinachQuantity>0,
      name: "Spinach",
      price: [15, 25,2*Baseprices.BabySpinach, 4*Baseprices.BabySpinach,10*Baseprices.BabySpinach],
      description:
        "Baby Spinach is high in vitamin K which serves several function in your body but it is best know for its role in blood clotting.",
      image:
      "https://t4.ftcdn.net/jpg/09/79/09/47/240_F_979094741_XvQvDjsLWmyGTx0wNOrSR3cQEOJb3kPD.jpg",
    },
  ];


  return (
    <>
    {isLoading 
   
   ? <PlantLoader /> :
    <ul id="meals" className="w-[90%] max-w-[70rem] mx-[auto] my-8 p-4 grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-4 space-x-7 space-y-6">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  }
    </>
    
  );
}
