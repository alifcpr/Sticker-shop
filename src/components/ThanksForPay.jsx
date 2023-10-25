import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ThanksForPay = () => {
  const [time, setTime] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTime((prevState) => prevState - 1);
    }, 1000);
    if (time === 0) {
      navigate("/");
    }
  }, [time]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center font-body">
        <div className="flex flex-col gap-y-10">
          <h1 className="text-3xl">از خرید و اعتماد شما سپاس گزاریم</h1>
          <Link
            to="/"
            onClick={() => setTime(0)}
            className="bg-green-500 flex justify-evenly px-2 py-1 rounded-lg text-white font-body"
          >
            <span> بازگشت به صفحه اصلی فروشگاه</span>
            <span>{time}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThanksForPay;
