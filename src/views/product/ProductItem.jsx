import React from "react";
import FormatIndianPrice from "../../helpers/FormatPrice";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const nav = useNavigate();
  return (
    <div
      className="rounded-md border relative cursor-pointer"
      onClick={() =>
        nav(`/productDetails/${productItem.id}`, { state: { productItem } })
      }
      // onClick={() => getSingleProduct(productItem.id)}
    >
      <img
        src={productItem && productItem.api_featured_image}
        alt="Laptop"
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {productItem && productItem.name}
        </h1>
        <p className="mt-3 text-sm text-gray-600 text-ellipsis overflow-hidden truncate">
          {productItem && productItem.description}
        </p>
        <div className="mt-4">
          {/* <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 uppercase text-[10px] font-semibold text-gray-900">
            {productItem && productItem.brand}
          </span> */}
          {productItem &&
            productItem.tag_list.splice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Colors : </span>
          {productItem &&
            productItem.product_colors
              .splice(0, 6)
              .map((color, index) => (
                <span
                  key={index}
                  className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"
                  style={{ backgroundColor: color.hex_value }}
                ></span>
              ))}
          {/* <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span> */}
        </div>
        <div className="mt-3 flex items-center space-x-2 font-bold">
          <span className="block text-sm font-semibold">Price : </span>
          <span className="text-rose-700">
            {/* {productItem && productItem.price_sign}{" "} */}
            {/* code={productItem.currency} */}
            <FormatIndianPrice price={productItem.price} />
          </span>
        </div>
        {/* <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Size : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            8 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            9 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            10 UK
          </span>
        </div> */}
        <button
          type="button"
          id=""
          className="addtoCart h-10 mt-4 w-full rounded px-2 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
