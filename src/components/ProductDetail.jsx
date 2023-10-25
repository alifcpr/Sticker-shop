import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { forwardRef } from "react";
import ProductForm from "./ProductForm";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === productId)
  );

  

  return (
    <>
      {product ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-6xl p-4 flex gap-x-6">
            <div className="overflow-hidden rounded-lg w-96">
              <img
                src={`../../server/public/images/${product.sticker}`}
                className=" transition-all duration-300  hover:scale-125"
              />
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="font-body">
                <h1 className="font-bold text-2xl">{product.title}</h1>
                <p className="w-96 mt-4">{product.description}</p>
                <h3 className="mt-5 text-lg font-bold">
                  قیمت : {product.price}
                </h3>
                <ProductForm productInfo={product}/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>محصول در حال بارگزاری کمی صبر کنید</h1>
      )}
    </>
  );
};

export default ProductDetail;
