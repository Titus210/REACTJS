import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import fruits from "../../Assets/Data/fruits";

function truncateDescription(description) {
  const words = description.split(" ");
  const truncatedWords = words.slice(0, 3);
  const truncatedDescription = truncatedWords.join(" ");

  if (words.length > 3) {
    return `${truncatedDescription} ...`;
  }

  return description;
}

function Feature() {
  const [visibleItems, setVisibleItems] = useState(6);
  const totalItems = fruits.length;

  const handleLoadMore = () => {
    const increment = 4; // Number of items to load on each "Load More" click
    setVisibleItems((prevVisibleItems) =>
      Math.min(prevVisibleItems + increment, totalItems)
    );
  };

  const isLoadMoreVisible = visibleItems < totalItems;


return (
  <>
        <h1 className="text-center text-bold text-3xl">Featured Products</h1>
  <div className="flex items-center mx-auto md:mx-12">
    <p className="text-lg rounded-full border border-slate-600 px-3">Fruits</p>
    <p className="text-lg ml-5 md:ml-8">vegetables</p>
    <p className="text-lg ml-5 md:ml-8">salads</p>
  </div>
    <div className="flex flex-wrap  bg-slate-300 gap-y-1 md:gap-x-1 lg:gap-x-6 ">
      {fruits.slice(0, visibleItems).map((fruit) => (
        <div
          className=" fruit-card flex flex-col   bg-slate-200 shadow-lg   rounded-lg  m-2 w-5/12 md:w-1/4 lg:w-2/12  ml-4 lg:mx-0 lg:ml-3"
          key={fruit.id}
        >
          <div className="product-image h-36 flex items-center justify-center">
            <img
              src={fruit.image}
              alt={fruit.name}
              className=" h-full   object-cover rounded-md"
            />
          </div>
          <div className="product-details flex flex-col  items-center h-32">
            <div className="flex justify-center items-center mb-2 ">
              <p className="font-semibold text-lg text-primary-green">
                {fruit.name}
              </p>
              {/* <FaHeart className="w-6 h-6" /> */}
            </div>
            <div className="flex justify-evenly  w-7/12 items-center">
              {/* <p>{truncateDescription(fruit.description)}</p> */}
              <p className="text-sm line-through text-red-400 ">
                ${fruit.price.toFixed(2)}
              </p>
              <p className="text-lg text-primary-green">
                ${fruit.price.toFixed(2)}
              </p>
            </div>
            <button className="bg-primary-blue text-white py-2 px-4 mt-4 rounded-md w-10/12 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      {isLoadMoreVisible && (
        <div className="flex justify-center w-full mt-4">
          <button
            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  </>
);
}

export default Feature



