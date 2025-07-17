import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorLayout, RootLayout } from "./layout";
import { Home, ProductPage, Contact, Blog, Login } from "./page";
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
        path: "ContactUs",
        element: <Contact />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Login",
        element: <Login/>
      }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
