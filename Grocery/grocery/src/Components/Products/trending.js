import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import fruits from "../../Assets/Data/fruits";
import SectionHeading from "../Common/headings/SectionHeading";
import Card from "../Common/cards/Card";

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
    const increment = window.innerWidth >= 1024 ? 10 : 6; // Change increment based on window width
    const newVisibleItems = visibleItems + increment;
    setVisibleItems(Math.min(newVisibleItems, totalItems));
  };


  const isLoadMoreVisible = visibleItems < totalItems;

  return (
    <>
      <div className="section-heading w-10/12 mx-auto">
        <SectionHeading sctionHeading="Trending Products" />
      </div>

     <div className="">
      <Card products ={fruits}/>
     </div>
    </>
  );
}

export default Trending;
