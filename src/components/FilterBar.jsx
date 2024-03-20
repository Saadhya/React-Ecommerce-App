import { ChevronDown, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Products from "../views/product/Products";
import { useProduct } from "../context/ProductsContext";
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "all", label: "All New Arrivals" },
      { value: "powder", label: "Powder" },
      { value: "cream", label: "Cream" },
      { value: "liquid", label: "liquid" },
      { value: "lipstick", label: "Lipstick" },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0", label: "0 - 50", min:0, max:50 },
      { value: "50", label: "50 - 100" },
      { value: "100", label: "100 - 150" },
      { value: "150", label: "150 - 200" },
      { value: "200", label: "Over 200" },
    ],
  },
  //   {
  //     id: "sizes",
  //     name: "Sizes",
  //     options: [
  //       { value: "xs", label: "XS" },
  //       { value: "s", label: "S" },
  //       { value: "m", label: "M" },
  //       { value: "l", label: "L" },
  //       { value: "xl", label: "XL" },
  //       { value: "2xl", label: "2XL" },
  //     ],
  //   },
];
const FilterBar = () => {
  const { products } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(filteredProducts);

  //   input filter
  const handleInputChange = (e) => {
    // console.log(e);
    setQuery(e.target.value);
  };
  //   radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  //   button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = filteredProducts.filter((prod) =>
    prod.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const filteredData = (prods, query, selected) => {
    let filteredProds = prods;
    if (query) {
      filteredProds = filteredItems;
    }
    if (selected) {
    //   console.log("selected: " + selected);
      filteredProds = filteredProds.filter(
        ({ category, price, product_type }) =>
          category === selected ||
          product_type === selected ||
          price > selected
        //   (price >= priceRange.min && price <= priceRange.max)
      );
    }
    setFilteredProducts(filteredProds);
  };
  useEffect(() => {
    filteredData(products, query, selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-8xl px-2 lg:px-10">
        {/* Top */}
        <div className="md:flex md:flex-row md:items-start md:justify-between flex items-center">
          <div className="flex justify-between space-x-4">
            <h1 className="grup-font text-5xl font-bold">Listing Blushes</h1>
            {/* <h1 className="text-xl font-bold">Products</h1> */}
            <div className="flex items-center">
              <input
                className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search"
                name="query"
              ></input>
              <button
                className="p-2 mx-2 bg-black text-white"
                onClick={() => setQuery("")}
              >
                clear{" "}
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <button
              type="button"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
            >
              Sort <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Category <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Color <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Size <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
            {filters.map((filter) => (
              <div key={filter.id} className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {filter.name}
                </h3>
                <ul className="mt-2">
                  {filter.options.map((option) => (
                    <li
                      key={option.value}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center ">
                        <input
                          id={`${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          //   defaultValue={option.value}
                          type="radio"
                          value={option.value}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className="ml-3 text-sm font-medium text-gray-900 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="h-[400px] w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full">
            <Products products={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
