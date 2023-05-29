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

function Trending() {
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
    <div className="flex flex-wrap gap-1">
      {fruits.slice(0, visibleItems).map((fruit) => (
        <div
          className="mx-auto fruit-card flex flex-col items-stretch bg-slate-300 shadow-md rounded-lg p-4 m-2 w-5/6 md:w-2/6 lg:w-3/12"
          key={fruit.id}
        >
          <div className="product-image h-40">
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="product-details flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-lg">{fruit.name}</p>
              <FaHeart className="w-6 h-6" />
            </div>
            <div className="flex justify-between">
              <p>{truncateDescription(fruit.description)}</p>
              <p>${fruit.price.toFixed(2)}</p>
            </div>
            <button className="bg-primary-blue text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600">
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

export default Trending;
