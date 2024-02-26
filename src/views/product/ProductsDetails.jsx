import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Replace,
  Share,
  ShieldCheck,
  Truck,
  TruckIcon,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import FormatIndianPrice from "../../helpers/FormatPrice";
import PageNavigation from "../../components/PageNavigation";
import Accordion from "../../components/Accordion";
import WhiteCircle from "../../components/WhiteCircle";

const ProductsDetails = () => {
  // const {id}=useParams()
  // console.log(id);
  const { state } = useLocation();
  const singleProduct = state && state.productItem;
  console.log(state.productItem);
  const deliveryItems = [
    { title: "Free delivery", icon: <Truck /> },
    { title: "15 days replacement", icon: <Replace /> },
    { title: "amazon delivered", icon: <TruckIcon /> },
    { title: "2 year warranty", icon: <ShieldCheck /> },
  ];
  // accrding to video, call singleproduct function here to useeffect function

  return (
    <div className="container">
      <PageNavigation title={singleProduct.name} />

      <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0 ">
        <div className="overflow-hidden">
          <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
            <div className="items-start justify-between lg:flex lg:space-x-8">
              <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                <div className="w-full xl:flex xl:flex-row-reverse">
                  <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px] lg:h-[468px] h-[300px]">
                    <div className="relative flex items-center justify-center h-full">
                      <img
                        alt={singleProduct.name}
                        src={singleProduct.api_featured_image}
                        // src="https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                        width={650}
                        height={490}
                        className="rounded-lg object-contain md:h-[300px] md:w-full lg:h-full"
                      />
                    </div>
                    <div className="absolute top-2/4 z-10 flex w-full items-center justify-between ">
                      <ChevronLeft
                        className="text-cyan-800 font-bold cursor-pointer"
                        size={"32px"}
                      />
                      <ChevronRight
                        className="text-cyan-800 font-bold cursor-pointer"
                        size={"32px"}
                      />
                    </div>
                  </div>
                  {/* <div className="flex gap-2 xl:flex-col">
                  {[
                    "https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=924&q=80",
                    "https://images.unsplash.com/photo-1580902394743-1394a7ec93d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1580902394767-81b0facc0894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                  ].map((image, index) => (
                    <div
                      key={image}
                      className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 "
                    >
                      <img
                        alt={`Product ${index}`}
                        src={image}
                        decoding="async"
                        loading="lazy"
                        className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                      />
                    </div>
                  ))}
                </div> */}
                </div>
              </div>
              <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px] capitalize">
                <div className="pb-5">
                  <h2 className="text-xl font-semibold md:text-xl xl:text-2xl">
                    {singleProduct.name}
                  </h2>
                  <p className="mt-4 text-md font-normal text-red-600">
                    Price:{" "}
                    <del>
                      <FormatIndianPrice price={"50"} />
                    </del>
                  </p>
                  <p className="font-semibold text-amber-600">
                    Deal of the Day:{" "}
                    <FormatIndianPrice price={singleProduct.price} />
                  </p>
                </div>
                {/* tags */}
                <div className="mb-2 pt-0.5" style={{}}>
                  <h4 className="text-15px mb-3 font-semibold text-opacity-70">
                    available in:
                  </h4>
                  <ul className="flex flex-wrap space-x-2">
                    {singleProduct &&
                      singleProduct.tag_list.splice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10"
                        >
                          {tag}
                        </span>
                      ))}
                    {/* <li className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                    8 UK
                  </li> */}
                  </ul>
                </div>
                {/* colors */}
                <div className="mt-3 flex items-center space-x-2">
                  <span className="block text-sm font-semibold">Colors : </span>
                  {singleProduct &&
                    singleProduct.product_colors
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
                <div className="pb-2" />
                <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                  <button
                    type="button"
                    className="addtoCart h-10 w-full rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add To Cart
                  </button>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-rose-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Heart size={16} className="mr-3" color="white" />
                      Wishlist
                    </button>
                    <div className="relative">
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <Share size={16} className="mr-3" color="white" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-2 lg:pt-3 xl:pt-4 flex justify-evenly ">
                  {deliveryItems.map((item) => (
                    <div className="flex flex-col gap-2 items-center">
                      <WhiteCircle>{item.icon}</WhiteCircle>
                      <p className="text-cyan-800 text-xs font-semibold">{item.title}</p>
                    </div>
                  ))}
                </div>
                {/* <div className="pt-6 xl:pt-8 h-40">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-md h-40 truncate text-gray-600">
                  {singleProduct.description}
                </p>
              </div> */}
                <div className="shadow-sm ">
                  <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                    <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                      Product Details
                    </h2>
                    <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                      <div className="bg-heading h-0.5 w-full rounded-sm" />
                      <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
                    </div>
                  </header>
                  <div>
                    <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7 truncate">
                      {singleProduct.description}
                    </div>
                  </div>
                </div>
                <Accordion />
                {/* <div className="">
                  <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                    <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                      Additional Information
                    </h2>
                  </header>
                </div>
                <div className="">
                  <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                    <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                      Customer Reviews
                    </h2>
                  </header>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
