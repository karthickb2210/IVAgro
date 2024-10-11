import React from 'react'
import ProductCard from './ProductCard'

export default function ProductPage() {
    const Productdata = [
        {
            "id": "m1",
            "name": "Baby_Spinach",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "Baby Spinach is high in vitamin K which serves several function in your body but it is best know for its role in blood clotting.",
            "image": "https://t3.ftcdn.net/jpg/08/07/98/62/240_F_807986222_KjBaQUDhq5lvjb4FI3mU4Y7ViaHcTTeN.jpg"
        },
        {
            "id": "m2",
            "name": "Parsley",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "Parlsey contains several important nutrients such as vitamins A,K and C. It's also a good source of minerals, calcium, iron, magnesium and pottasium",
            "image": "https://t3.ftcdn.net/jpg/00/84/25/74/240_F_84257423_tVophZEYP0Rvdf07raBdVogXDs188EAs.jpg"
        },
        {
            "id": "m3",
            "name": "Rosemary",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "Rosemary has rande of possible health benefits.The Herb not only tastes good in culinary dishes, such as rosemary chicken and lamb, but it also contains iron, calcium and vitamin B6. ",
            "image": "https://t4.ftcdn.net/jpg/03/95/47/51/240_F_395475146_TL4pmQ03jzoDJAxibqj3KbET7Hx4Ojqi.jpg"
        },
        {
            "id": "m4",
            "name": "Thyme",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "Thyme is an herb from the mint family and is a culinary staple. That said, it may also provide numerous health benefits, such as fighting acne, regulating mucus, fighting infections. ",
            "image": "https://t3.ftcdn.net/jpg/08/37/49/98/240_F_837499825_5mzhBgOElQUKUlqO98hUYmvo7sjjoy2F.jpg"
        },
        {
            "id": "m5",
            "name": "Lettuce",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "Lettuce is an excellent source of beta carotene (Vitamin A) which is needed for healthy skin, bones and eyes.",
            "image": "https://t4.ftcdn.net/jpg/02/80/03/99/240_F_280039907_Ny5g14FK1JQU59POwyU5eJj8ZaQNjmQw.jpg"
        },
        {
            "id": "m6",
            "name": "Arugula",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "It is high in beta-carotene vitamin C, folate, vitamin K and magnesium. Two cups of raw arugula will provide 20% of the body's daily vitamin A.",
            "image": "https://t3.ftcdn.net/jpg/08/50/95/42/240_F_850954265_neGQj7N1GC75XnFSnSLu0dYLI3xneQW5.jpg"
        },
        {
            "id": "m7",
            "name": "Pak Choi",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "It's full of cancer fighting compounds such as vitamin C and vitamin E, beta-carotene ,folate and selenium.",
            "image": "https://t3.ftcdn.net/jpg/03/92/37/26/240_F_392372698_06CR5RnRAQLHY7uzkqS9G6bfDeDPuuzk.jpg"
        },
        {
            "id": "m8",
            "name": "Kale",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "It is a nutrition superstar due to the amounts of vitamin A, B6, C, K, folate, fiber, carotenoids and manganese it contains.",
            "image": "https://t3.ftcdn.net/jpg/02/30/97/16/240_F_230971608_hsf90qBGPcmUuv3m0LkWPAuI5i5PnQmL.jpg"
        },
        {
            "id": "m9",
            "name": "Basil",
            "price": [
               "8.99",
            "16.99",
             "24.99",
             "36.99",
             "54.99",
             "80.99"
          ],
            "description": "It provides some macro nutrients such as calcium and vitamin K, as well as a range of antioxidants.",
            "image": "https://t3.ftcdn.net/jpg/01/48/71/76/240_F_148717694_VUiPGqDdJ6gOuHKDr6hAvAmI5qdpKZef.jpg"
        }
    ];
    
  return (
    <div className=' flex justify-center items-center flex-wrap space-x-12'>
      <ProductCard data={Productdata[0]} />
      <ProductCard data={Productdata[5]} />
      <ProductCard data={Productdata[6]} />
      <ProductCard data={Productdata[7]} />
      <ProductCard data={Productdata[8]} />
      
    </div>
  )
}
 