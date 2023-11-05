import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementItem,
  getTotals,
  incrementItem,
  removeAllItems,
  removeCart,
  pay,
} from "../slices/cartSlice";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const disptach = useDispatch();
  const allCartItems = useSelector((state) => state.cart.cartItems);
  const allCartInfo = useSelector((state) => state.cart);

  useEffect(() => {
    disptach(getTotals());
  }, [allCartInfo, disptach]);

  return (
    <div className="min-h-screen flex flex-col items-center gap-y-10">
      <h1 className="mt-6 text-3xl font-body font-extrabold">سبد خرید</h1>
      {allCartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-y-5">
          <h1 className="font-body font-extrabold text-xl">
            محصولی در سبد خرید وجود ندارد
          </h1>
          <Link
            to="/"
            className="px-2 py-1 bg-green-500 text-white rounded-lg font-body"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      ) : (
        <div className="border-2 shadow-lg p-4 rounded-lg">
          {allCartItems.map((item) => (
            <div
              key={item.id}
              className="border-2 flex flex-col gap-y-2 items-center justify-center [&:not(:first-child)] : mt-4 p-3 gap-x-8 rounded-lg md:flex-row"
            >
              <img className="w-14 rounded-lg" src={`${item.image}`} />
              <h1 className="font-body  overflow-hidden text-ellipsis">
                {item.title}
              </h1>
              <div className="flex gap-x-3 justify-between ">
                <button
                  onClick={() => disptach(incrementItem(item))}
                  className="bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <p className="font-body">{item.cartQty}</p>
                <button
                  onClick={() => disptach(decrementItem(item))}
                  className="bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-center font-body">
                {Number(item.price).toLocaleString()}
              </h1>
              <button
                onClick={() => disptach(removeCart(item.id))}
                className="bg-red-100 px-2 py-1 rounded-lg font-body text-red-500"
              >
                حذف از سبد خرید
              </button>
            </div>
          ))}
          <div className="my-5 font-body">
            <span className="flex">
              <p>تعداد کل محصولات : </p>
              <h1>{allCartInfo.cartTotalQty}</h1>
            </span>
            <span className="flex gap-x-3">
              <p>قیمت کل محصولات :</p>
              <h1>{Number(allCartInfo.cartTotalAmount).toLocaleString()}</h1>
            </span>
          </div>
          <div className="flex justify-between items-center gap-x-6 md:gap-x-0">
            <button
              onClick={() => disptach(removeAllItems())}
              className="bg-red-500 px-2 py-1 rounded-lg text-white font-body"
            >
              حذف کل محصولات
            </button>
            <Link
              onClick={() => disptach(pay())}
              to="/thanks"
              className="bg-green-500 px-2 py-1 rounded-lg text-white font-body"
            >
              تکمیل کردن سفارش
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
