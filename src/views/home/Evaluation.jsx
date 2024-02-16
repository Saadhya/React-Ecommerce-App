import {
  ArrowUpRight,
  Bus,
  BusFront,
  CarFrontIcon,
  Coins,
  HandCoins,
  ShieldPlus,
  WalletCards,
} from "lucide-react";
import React from "react";

const data = [
  {
    name: "Super fast free delivery",
    icon: <Bus />,
  },
  {
    name: "Non-contact shipping",
    icon: <ShieldPlus />,
  },
  {
    name: "Money-back Gurranteed",
    icon: <HandCoins />,
  },
  {
    name: "Super secure Payment system",
    icon: <WalletCards />,
  },
];
const Evaluation = () => {
  return (
    <div className=" mx-auto max-w-7xl w-full bg-white px-2 capitalize my-4 py-6 ">
      <div className="mx-auto max-w-3xl md:text-center text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
          Our goal
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          reiciendis a vel error explicabo voluptatum nihil possimus veritatis
          eos culpa.
        </p>
      </div>
      <div className="mt-8 mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, i) => (
          <div
            className="w-[300px] rounded-xl border bg-gray-800 shadow-xl p-4 flex items-center justify-center font-capitalize"
            key={i}
          >
            <div className="flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white  hover:border-gray-400">
                {item.icon}
              </div>
            </div>
            <div className="p-4 ">
              <h1 className="inline-flex items-center text-lg font-semibold text-white">
                {item.name}
              </h1>
              {/* <p className="mt-3 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evaluation;
