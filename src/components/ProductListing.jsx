import React from "react";
import { useSelector } from "react-redux";
import ProdutCard from "./ProdutCard";

const ProductListing = ({ currentProducts, status: productStatus }) => {
  return (
    <>
      {productStatus === "pending" ? (
        <div className="max-w-6xl  h-[calc(100vh-20vh)] bg-red-100 mx-auto flex items-center justify-center">
          <h1 className="text-4xl font-body font-extrabold">Loading...</h1>
        </div>
      ) : productStatus === "success" ? (
        <div className="min-h-screen mt-7 max-w-6xl mx-auto grid justify-between grid-cols-12 gap-5">
          {currentProducts.map((prodcut) => (
            <ProdutCard key={prodcut.id} productInfo={prodcut} />
          ))}
        </div>
      ) : (
        <p>مشکلی به وجود آمده است بعدا تلاش کنید</p>
      )}
    </>
  );
};

export default ProductListing;
