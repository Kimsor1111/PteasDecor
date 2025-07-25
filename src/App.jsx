import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorLayout, RootLayout } from "./layout";
import {
  Home,
  ProductPage,
  ContactUs,
  Blog,
  SignUp,
  LogIn,
  BlogDetail,
  ProductDetail,
  PrivacyPolicy,
  Cart,
  MyAccount,
  Checkout,
  Payment,
<<<<<<< HEAD
  TrackOrder,
  TrackOrderDetail,
=======
  PaymentMethodPage,
  Wishlist,
>>>>>>> f0ff5c89426668d4a9a00b7b0fcbc4d4e15b3eb2
} from "./page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "Products",
        element: <ProductPage />,
      },
      {
        path: "Products/ProductDetail/:productid",
        element: <ProductDetail />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "BlogDetail",
        element: <BlogDetail />,
      },
      { path: "LogIn", element: <LogIn /> },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "PrivacyPolicy/:privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      { path: "MyAccount", element: <MyAccount /> },
      {
        path: "Checkout",
        element: <Checkout />,
      },
      {
        path: "Checkout/Payment",
        element: <Payment />,
      },
      {
<<<<<<< HEAD
        path: "MyAccount/TrackOrder",
        element: <TrackOrder />,
      },
      {
        path: "MyAccount/TrackOrder/TrackOrderDetail",
        element: <TrackOrderDetail />,
=======
        path: "/MyAccount/PaymentAndBilling",
        element: <PaymentMethodPage />,
        path: "/MyAccount/Wishlist",
        element: <Wishlist />,
>>>>>>> f0ff5c89426668d4a9a00b7b0fcbc4d4e15b3eb2
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
