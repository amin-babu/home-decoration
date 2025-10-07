import { createBrowserRouter } from "react-router"
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import ProductsDetails from "../Pages/ProductsDetails";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading</p>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'products',
        Component: Products
      },
      {
        path: 'wishlist',
        Component: Wishlist
      },
      {
        path: 'products/:id',
        Component: ProductsDetails
      }
    ]
  }
])

export default router;









