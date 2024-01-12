import React from 'react';

const SideBar: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Logo section */}
      <div className="bg-gray-800 text-white w-20 flex-none">
        {/* Logo content */}
      </div>

      {/* User details section */}
      <div className="bg-gray-200 flex-grow">
        {/* User details content */}
      </div>

      {/* Sidebar navigation section */}
      <div className="bg-gray-300 w-64 hidden sm:block">
        {/* Sidebar navigation content */}
      </div>
    </div>
  );
};

export default SideBar;
