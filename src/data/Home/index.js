import BigHeroImg from "./../../assets/Home/BigHero.jpg";
import P1_1 from "./../../assets/Product/bedroom/p1.1.jpg";
import F1 from "./../../assets/Product/bedroom/p1.1.jpg";
import F2 from "./../../assets/Product/bathroom/p1.1.jpg";
import F3 from "./../../assets/Product/kitchen/p1.1.jpg";
import F4 from "./../../assets/Product/livingroom/p1.1.jpg";
import P1 from "./../../assets/Product/bedroom/p3.1.jpg";
import P2 from "./../../assets/Product/bathroom/p2.2.jpg";
import P3 from "./../../assets/Product/bathroom/p3.1.jpg";
import P4 from "./../../assets/Product/dinner/p1.1.jpg";

import Bedroom from "./../../assets/Home/Bedroom.jpg";
import Living from "./../../assets/Home/Living.jpg";
import Dinner from "./../../assets/Home/Dinner.jpg";
import CustomerReview from "./../../assets/Home/CustomerReview.jpg";
import Blog1 from "./../../assets/Home/BlogCard1.jpg";
import Blog2 from "./../../assets/Home/BlogCard2.jpg";
import Blog3 from "./../../assets/Home/BlogCard3.jpg";
import Profile1 from "./../../assets/Home/Profile1.jpg";
import Profile2 from "./../../assets/Home/Profile2.jpg";
import Profile3 from "./../../assets/Home/Profile3.jpg";
export const BigHeroData = {
  img: BigHeroImg,
  title:
    "Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!",
  des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat",
};

export const FeatureProductData = [
  {
    id: 1,
    name: "Metal Bed Frame",
    price: 122.45,
    discount: 11,
    rate: 4,
    category: "Bedroom",
    stock: 37,
    img: F1,
  },
  {
    id: 11,
    name: "Bathroom Carbinet",
    price: 140.22,
    discount: 10,
    rate: 4,
    category: "Bathroom",
    stock: 18,
    img: F2,
  },
  {
    id: 21,
    name: "Dish Drying Racks",
    price: 37.04,
    discount: 6,
    rate: 5,
    category: "Kitchen",
    stock: 0,
    img: F3,
  },
  {
    id: 31,
    name: "Sofa",
    price: 110.14,
    discount: 17,
    rate: 3,
    category: "Living Room",
    stock: 15,
    img: F4,
  },
];

export const CategoryData = [
  {
    title: "Bedroom Furniture",
    img: Bedroom,
  },
  {
    title: "Living Room Furniture",
    img: Living,
  },
  {
    title: "Dinning Room Furniture",
    img: Dinner,
  },
];

export const PopularProductData = [
  {
    id: 3,
    name: "Mattress",
    price: 63.1,
    discount: 14,
    rate: 1,
    category: "Bedroom",
    stock: 28,
    img: P1,
  },
  {
    id: 12,
    name: "Heated Towel Racks",
    price: 36.18,
    discount: 23,
    rate: 3,
    category: "Bathroom",
    stock: 44,
    img: P2,
  },
  {
    id: 13,
    name: "Mirrors with LED Lighting",
    price: 29.73,
    discount: 25,
    rate: 5,
    category: "Bathroom",
    stock: 38,
    img: P3,
  },
  {
    id: 41,
    name: "Dining Table",
    price: 97.23,
    discount: 0,
    rate: 5,
    category: "Dining Room",
    stock: 0,
    img: P4,
  },
];

export const CustomerReviewData = {
  img: CustomerReview,
  title: "Have a Look at Our Unique Selling Proportions",
  des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  subdes: [
    {
      percent: 99,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      percent: 100,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
};

export const BlogData = [
  {
    id: 1,
    img: Blog1,
    profile: Profile1,
    name: "Oliver Bennett",
    date: "01 Jun 2025",
    des: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    category: "",
  },
  {
    id: 2,
    img: Blog2,
    profile: Profile2,
    name: "John Doe",
    date: "01 Jul 2025",
    des: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    category: "",
  },
  {
    id: 3,
    img: Blog3,
    profile: Profile3,
    name: "Dil Doe",
    date: "01 Oct 2025",
    des: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    category: "",
  },
];

export const QuestionData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
];
