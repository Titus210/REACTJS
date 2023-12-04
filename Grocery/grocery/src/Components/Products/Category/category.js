import React from "react";

import categoryItems from "../../../Assets/Data/categoryItems";

function Category() {


  function truncateDescription(description) {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, 20);
    const truncatedDescription = truncatedWords.join(" ");

    if (words.length > 20) {
      return `${truncatedDescription} ...`;
    }

    return description;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="section-heading">
          <h1 className="text-3xl font-bold text-orange">Shop by Category</h1>
        </div>
        <div className="cards flex flex-wrap justify-center  rounded-lg m-2 py-4  gap-y-2  md:gap-x-6 lg:gap-x-1 ">
          {categoryItems.map((veges) => (
            <div className="flex flex-col justify-center items-center px-3 bg-slate-200 shadow-lg w-11/12 md:w-5/12 lg:w-1/5 lg:ml-5 rounded-lg hover:bg-slate-300">
              {/* image */}
              <div className="product-image h-36 flex items-center justify-center">
                <img
                  src={veges.image}
                  alt={veges.name}
                  className=" h-full object-cover rounded-md"
                />
              </div>
              {/* items */}
              <div className="flex flex-col items-center h-48 md:h-48 lg:h-56 relative">

                <h2 className="text-2xl font-bold">{veges.name}</h2>

                <p className="text-gray text-md text-center">{truncateDescription(veges.description)}</p>
                <button className="bg-primary-green text-white py-2 px-4 mt-4 rounded-md w-10/12 absolute bottom-4 hover:bg-blue-600">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
