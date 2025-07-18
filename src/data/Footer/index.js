import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faEnvelope,
  faGear,
  faHeart,
  faHome,
  faHouseUser,
  faLocationDot,
  faMoneyBill,
  faPhone,
  faShoppingBag,
  faTag,
  faTruck,
  faTruckArrowRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import visa from "./../../assets/Payment/visa.jpg";
import master from "./../../assets/Payment/master.jpg";
import paypal from "./../../assets/Payment/paypal.jpg";
import american from "./../../assets/Payment/americanExpress.jpg";
import { SocialIcon } from "../Navbar";
export const FooterLi = [
  {
    title: "Contact Information",
    submenu: [
      { name: "+855 123 456 789", path: "tel:+855123456789", icon: faPhone },
      {
        name: "sales@gmail.com",
        path: "mailto:sales@gmail.com",
        icon: faEnvelope,
      },
      {
        name: "services@gmail.com",
        path: "mailto:services@gmail.com",
        icon: faEnvelope,
      },
    ],
  },
  {
    title: "Quick Links",
    submenu: [
      { name: "My Account", path: "", icon: faUser },
      {
        name: "Cart",
        path: "",
        icon: faShoppingBag,
      },
      {
        name: "Wishlist",
        path: "",
        icon: faHeart,
      },
      {
        name: "Track My Order",
        path: "",
        icon: faTruck,
      },
      {
        name: "Location",
        path: "",
        icon: faLocationDot,
      },
    ],
  },
  {
    title: "Useful Links",
    submenu: [
      { name: "Home", path: "/", icon: faHome },
      { name: "Products", path: "/Products", icon: faTag },
      {
        name: "Contact us",
        path: "/ContactUs",
        icon: faPhone,
      },
      {
        name: "Blog",
        path: "/Blog",
        icon: faBlog,
      },
    ],
  },
  {
    title: "Privacy Policy",
    submenu: [
      {
        name: "Refund & Return Policy",
        path: "/PrivacyPolicy/Refund_&_Return_Policy",
        icon: faMoneyBill,
      },
      {
        name: "Delivery & Shipping Policy",
        path: "/PrivacyPolicy/Delivery_&_Shipping_Policy",
        icon: faTruckArrowRight,
      },
      {
        name: "Terms & Conditions",
        path: "/PrivacyPolicy/Terms_&_Conditions",
        icon: faGear,
      },
      {
        name: "Terms of Service",
        path: "/PrivacyPolicy/Terms_of_Service",
        icon: faServicestack,
      },
    ],
  },
];
export const FooterLiIconImg = [
  {
    title: "Payment Method",
    icon: [visa, master, paypal, american],
  },
];
export const FooterLiIconSocial = [
  {
    title: "Follow Us",
    icon: SocialIcon,
  },
];
