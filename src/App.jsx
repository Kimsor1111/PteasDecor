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
        path: "/Products/ProductDetail",
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
        path: "/PrivacyPolicy/:privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/Cart",
        element: <Cart/>
      }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
