import React from "react";

const FormatIndianPrice = ({ price = 0 }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price * 82.88);
};

const FormatPrice = ({ price = 0, code = "INR" }) => {
  console.log(code);
  const tagen = code === "INR" ? "en-IN" : "en-US";
  return Intl.NumberFormat(tagen, {
    style: "currency",
    currency: code,
    maximumFractionDigits: 2,
  }).format(price);
};

export default FormatIndianPrice;
