import { createBrowserRouter } from "react-router-dom";

// Components
import App from "../App";
import MainLayout from "../components/layouts/MainLayout";
import ProductDetail from "../components/ProductDetail";
import ShoppingCart from "../components/ShoppingCart";
import ThanksForPay from "../components/ThanksForPay";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>مشکلی به وحود اومده</h1>,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
  {
    path: "/thanks",
    element: <ThanksForPay />,
  },
]);
