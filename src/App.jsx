import { useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "./components/layouts/MainLayout";
import NavBar from "./components/NavBar";
import PaginateItems from "./components/PaginateItems";

function App() {
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);

  return (
    <>
      <NavBar />
      <MainLayout>
        <PaginateItems
          productsPerPage={5}
          products={products}
          status={productStatus}
        />
      </MainLayout>
    </>
  );
}

export default App;
