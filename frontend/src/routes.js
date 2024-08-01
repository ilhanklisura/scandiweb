import Layout from "./Layout/Layout";
import { createHashRouter } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";

const router = createHashRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         { path: "", element: <ProductList /> },
         { path: "product-list", element: <ProductList /> },
         { path: "add-product", element: <AddProduct /> },
      ],
   },
]);

export default router;
