import React from "react";
import SocialIcons from "../../components/SocialIcons";

const Ourteam = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 my-4 lg:px-0 logo">
      <div className="mx-auto max-w-3xl md:text-center">
        <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
          People who made it successful
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          reiciendis a vel error explicabo voluptatum nihil possimus veritatis
          eos culpa.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="mx-auto w-[300px] rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Jenifer Lopez</h1>
              <h6 className="mt-3 font-medium">Founder and CEO, DevUI</h6>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <div className="mt-4 flex flex-wrap">
                <SocialIcons bgcolor="#27272A" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
