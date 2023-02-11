import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Product, Products } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:id",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
