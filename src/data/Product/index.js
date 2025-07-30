import Profile from "./../../assets/Blog/Profile4.jpg";
import B1_1 from "./../../assets/Product/bedroom/p1.1.jpg";
import B1_2 from "./../../assets/Product/bedroom/p1.2.jpg";
import B1_3 from "./../../assets/Product/bedroom/p1.3.jpg";
import B2_1 from "./../../assets/Product/bedroom/p2.1.jpg";
import B2_2 from "./../../assets/Product/bedroom/p2.2.jpg";
import B2_3 from "./../../assets/Product/bedroom/p2.3.jpg";
import B3_1 from "./../../assets/Product/bedroom/p3.1.jpg";
import B3_2 from "./../../assets/Product/bedroom/p3.2.jpg";
import BT1_1 from "./../../assets/Product/bathroom/p1.1.jpg";
import BT1_2 from "./../../assets/Product/bathroom/p1.2.jpg";
import BT1_3 from "./../../assets/Product/bathroom/p1.3.jpg";
import BT2_1 from "./../../assets/Product/bathroom/p2.1.jpg";
import BT2_2 from "./../../assets/Product/bathroom/p2.2.jpg";
import BT3_1 from "./../../assets/Product/bathroom/p3.1.jpg";
import BT3_2 from "./../../assets/Product/bathroom/p3.2.jpg";
import KT1_1 from "./../../assets/Product/kitchen/p1.1.jpg";
import KT1_2 from "./../../assets/Product/kitchen/p1.2.jpg";
import KT1_3 from "./../../assets/Product/kitchen/p1.3.jpg";
import LV1_1 from "./../../assets/Product/livingroom/p1.1.jpg";
import LV1_2 from "./../../assets/Product/livingroom/p1.2.jpg";
import LV1_3 from "./../../assets/Product/livingroom/p1.3.jpg";
import DN1_1 from "./../../assets/Product/dinner/p1.1.jpg";
import DN1_2 from "./../../assets/Product/dinner/p1.2.jpg";
export const ProductItem = [
  {
    id: 1,
    name: "Metal Bed Frame",
    price: 100.25,
    discount: 25,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 2,
    name: "Wooden Bed Frame",
    price: 100.25,
    discount: 0,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B2_1, B2_2, B2_3],
  },
  {
    id: 3,
    name: "Mattress",
    price: 100.25,
    discount: 25,
    stock: 10,
    rate: 4,
    category: "Bedroom",
    img: [B3_1, B3_2],
  },
  {
    id: 4,
    name: "Double Bed & Side Tables",
    price: 100.25,
    discount: 25,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 5,
    name: "Double Bed & Side Tables",
    price: 100.25,
    discount: 25,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 6,
    name: "Double Bed & Side Tables",
    price: 100.25,
    discount: 25,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 7,
    name: "Double Bed & Side Tables",
    price: 100.25,
    discount: 0,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 8,
    name: "Double Bed & Side Tables",
    price: 100.25,
    discount: 25,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 9,
    name: "Double Bed & Side Tables",
    price: 100.25,
    discount: 25,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 10,
    name: "Double Bed & Side Tables",
    price: 100.25,
    discount: 25,
    rate: 4,
    category: "Bedroom",
    stock: 10,
    img: [B1_1, B1_2, B1_3],
  },
  {
    id: 11,
    name: "Bathroom Carbinet",
    price: 100.25,
    discount: 0,
    stock: 10,
    rate: 4,
    category: "Bathroom",
    img: [BT1_1, BT1_2, BT1_3],
  },
  {
    id: 12,
    name: "Heated Towel Racks",
    price: 100.25,
    discount: 0,
    stock: 10,
    rate: 4,
    category: "Bathroom",
    img: [BT2_2, BT2_1],
  },
  {
    id: 13,
    name: "Mirrors with LED Lighting",
    price: 100.25,
    discount: 25,
    stock: 10,
    rate: 4,
    category: "Bathroom",
    img: [BT3_1, BT3_2],
  },
  {
    id: 21,
    name: "Dish Drying Racks",
    price: 100.25,
    discount: 25,
    stock: 10,
    rate: 4,
    category: "Kitchen",
    img: [KT1_1, KT1_2, KT1_3],
  },
  {
    id: 31,
    name: "2 Seater Sofa",
    price: 100.25,
    discount: 25,
    stock: 10,
    rate: 4,
    category: "Living Room",
    img: [LV1_1, LV1_2, LV1_3],
  },
  {
    id: 41,
    name: "Dinning Tables & Chairs",
    price: 100.25,
    discount: 25,
    stock: 10,
    rate: 4,
    category: "Dinner Room",
    img: [DN1_1, DN1_2],
  },
];
export const reviewUser = [
  {
    img: Profile,
    username: "Mike Johnson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames. Porttitor et sagittis egestas vitae metus, odio tristique amet, duis. Nunc tortor elit aliquet quis in mauris.",
    email: "person@gmail.com",
  },
  {
    img: Profile,
    username: "Dil Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque, lorem vel vulputate vitae aliquam. Pretium tristique nisi, ut commodo fames. Porttitor et sagittis egestas vitae metus, odio tristique amet, duis. Nunc tortor elit aliquet quis in mauris.",
    email: "person@gmail.com",
  },
];
