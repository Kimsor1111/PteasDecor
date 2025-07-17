import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorLayout, RootLayout } from "./layout";
import { Home, ProductPage, Contact, Blog, SignUp, LogIn } from "./page";
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
      { path: "LogIn", element: <LogIn /> },
      {
        path: "SignUp",
        element: <SignUp />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
