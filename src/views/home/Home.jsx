import React from "react";
import HeroSection from "./HeroSection";
import Ourteam from "./ourteam";
import Evaluation from "./Evaluation";
import {
  BarChartBig,
  BluetoothConnected,
  Compass,
  DiscAlbum,
  FileSymlink,
  FlaskRound,
  Inspect,
  LucideShoppingCart,
  Square,
  SquareAsteriskIcon,
  SquareCode,
} from "lucide-react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Ourteam />
      <Evaluation />
      <div className="bg-gray-100 max-w w-full  my-6 py-8">
        <div className="mx-auto max-w-3xl md:text-center text-center">
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
            Trusted by 1000+ companies
          </p>
        </div>
        <div className="flex justify-center items-center gap-12 py-4 px-2 my-4 ">
          <Compass size={60} color="gray" />
          <SquareCode size={60} color="gray" />
          <Inspect size={60} color="gray" />
          <BarChartBig size={60} color="gray" />
          <DiscAlbum size={60} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Home;
