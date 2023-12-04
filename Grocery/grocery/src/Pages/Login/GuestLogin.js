import React from "react";

function GuestLogin() {
  return (
    <div className="login-button w-full flex justify-center mb-4 lg:mt-2">
      <p className="text-xl">
        Continue as{" "}
        <span className="text-primary-blue underline">guest</span>
      </p>
    </div>
  );
}

export default GuestLogin;
