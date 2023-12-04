import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";


function truncateDescription(description) {
  const words = description.split(" ");
  const truncatedWords = words.slice(0, 3);
  const truncatedDescription = truncatedWords.join(" ");

  if (words.length > 3) {
    return `${truncatedDescription} ...`;
  }

  return description;
}



const Card = ({products}) => {

    const [visibleItems, setVisibleItems] = useState(6);
    const totalItems = products.length;
  
    const handleLoadMore = () => {
      const increment = window.innerWidth >= 1024 ? 10 : 6; // Change increment based on window width
      const newVisibleItems = visibleItems + increment;
      setVisibleItems(Math.min(newVisibleItems, totalItems));
    };
  
  
    const isLoadMoreVisible = visibleItems < totalItems;


    return ( 
        <>
        <div className="flex items-center justify-center flex-wrap py-4  gap-y-1 md:gap-x-1 lg:gap-x-6 ">
        {products.slice(0, visibleItems).map((product) => (
          <div
            className=" fruit-card flex flex-col  
             bg-slate-200 shadow-lg   rounded-lg  m-2 w-5/12  lg:w-2/12  ml-4 lg:mx-0 lg:ml-3"
            key={product.id}
          >
            <div className="product-image h-36 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className=" h-full   object-cover rounded-md"
              />
            </div>
            <div className="product-details flex flex-col  items-center h-32">
              <div className="flex justify-center items-center mb-2 ">
                <p className="font-semibold text-lg text-primary-green">
                  {product.name}
                </p>
                {/* <FaHeart className="w-6 h-6" /> */}
              </div>
              <div className="flex justify-evenly  w-7/12 items-center">
                {/* <p>{truncateDescription(product.description)}</p> */}
                <p className="text-sm line-through text-red-400 ">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-lg text-primary-green">
                  ${product.price.toFixed(2)}
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
 
export default Card;