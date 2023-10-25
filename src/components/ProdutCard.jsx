import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProdutCard = ({ productInfo }) => {
  const { id, title, price, description, sticker } = productInfo;
  return (
    <>
      <Link
        to={`/products/${id}`}
        className="border-2 col-span-4 rounded-lg w-72 pb-3 transition-all duration-300 hover:shadow-lg"
      >
        <img src={`../../server/public/images/${sticker}`} />
        <div className="font-body px-2">
          <h1 className="text-xl font-bold mt-2">{title}</h1>
          <p className="my-4">{description}</p>
          <span className="text-lg mb-4">
            قیمت : {Number(price).toLocaleString()}
          </span>
        </div>
      </Link>
    </>
  );
};

export default ProdutCard;
