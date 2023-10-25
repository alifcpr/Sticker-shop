import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { toast } from "react-toastify";

const ProductForm = ({ productInfo }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const addedToShoppingCart = () => {
    dispatch(addToCart({ ...productInfo, cartQty: Number(qty) }));
    alert(`محصول ${productInfo.title} به سبد خرید افزوده شد`);
  };

  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="flex mt-4  items-center gap-x-4">
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="border-2 rounded-lg px-2 py-1 border-blue-500"
          />
          <h1 className="text-lg">تعداد</h1>
        </div>
        <h1 className="text-green-500">از این محصول در انبار موجود میباشد</h1>
      </div>

      <button
        onClick={addedToShoppingCart}
        className="bg-blue-500 text-white mt-8  font-body px-3 py-2 w-full rounded-lg"
      >
        افزودن به سبد خرید
      </button>
    </>
  );
};

export default ProductForm;
