
import React from "react";
import LoginForm from "./LoginForm";
import "../../Styles/login.css";

function LoginPage() {
  return (
    <>
      {/* ... (header and other components) */}
      <div className="w-screen md:w-11/12">
        {/* ... (other components) */}
        <LoginForm />
      </div>
      {/* ... (footer and other components) */}
    </>
  );
}

export default LoginPage;



