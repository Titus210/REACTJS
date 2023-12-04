import React from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

function SocialButtons() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            {/* ... (social buttons) */}
            <FaFacebook className="w-6 h-6 t text-blue-500 cursor-pointer hover:scale-125" />
            <FaGoogle className="w-6 h-6 t text-red-500 cursor-pointer hover:scale-125" />
            <FaApple className="w-6 h-6 t text-gray-500 cursor-pointer hover:scale-125" />
        </div>
    );
}

export default SocialButtons;
