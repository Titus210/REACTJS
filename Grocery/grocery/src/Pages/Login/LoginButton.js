import React from "react";

function LoginButton({ clicked, loading, onClick }) {
  return (
    <div className="login-button w-full flex justify-center">
      <p className={`p-2 text-center text-white border bg-orange-yellow outline-0 rounded-xl w-9/12 hover:bg-black hover:text-orange-yellow md:w-11/12 ${clicked ? 'clicked' : ''}`}
        onClick={onClick}
        type='button'
        disabled={loading}
      >
        Login
      </p>
    </div>
  );
}

export default LoginButton;
