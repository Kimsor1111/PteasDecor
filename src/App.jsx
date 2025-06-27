import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout";
import { Home, ProductPage } from "./page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
