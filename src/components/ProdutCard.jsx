import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProdutCard = ({ productInfo }) => {
  const { id, title, price, description, sticker, image } = productInfo;
  return (
    <Link
      to={`/products/${id}`}
      className="border-2 rounded-lg p-4 transition-all duration-300 hover:shadow-lg col-span-12 md:col-span-6 xl:col-span-4"
    >
      <img src={`${image}`} className="w-full " />
      <div className="font-body px-2">
        <h1 className="text-xl font-bold mt-2">{title}</h1>
        <p className="my-4">{description}</p>
        <span className="text-lg mb-4">
          قیمت : {Number(price).toLocaleString()}
        </span>
      </div>
    </Link>
  );
};

export default ProdutCard;
