import React from 'react';
import Navbar from '../../../Components/Common/navbar/navbar';
import { Link } from 'react-scroll';
import Category from '../../../Components/Products/Category/category';


const categories = [
  { id: 1, title: 'Category 1' },
  { id: 2, title: 'Category 2' },
  { id: 3, title: 'Category 3' },
  { id: 4, title: 'Category 4' },

];

const Seafood = () => {
  return (
    <>
      <main className="flex flex-col md:h-screen w-full mx-auto">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="relative h-screen">

          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("../../../Assets/videos/fishfarm.mp4")',
              filter: 'blur(8px)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Text and Button */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
            <h3 className="text-4xl text-white font-bold text-center mb-4">
              Welcome to our fresh fish farm store
            </h3>
            <p className="text-white text-center">
              Where you get all the fish products
            </p>
            <button className="bg-orange-yellow hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
              Explore Now
            </button>
          </div>
        </div>

       {/* Footer */}
       
      </main>
    </>
  );
};

export default Seafood;
