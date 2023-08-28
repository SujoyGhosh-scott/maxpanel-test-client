import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ currPage }) => {
  const navigate = useNavigate();

  const pushToPage = (path) => {
    // make necessary log in mixPanel
    navigate(path);
  };

  const logout = () => {
    localStorage.removeItem("userinfo");
  };

  return (
    <div className="py-6 flex justify-between">
      <h1 onClick={() => pushToPage("/")} className="text-2xl font-semibold">
        MaxPanel test
      </h1>
      <div className="flex">
        <button onClick={() => pushToPage("/auth")} className="hover:underline">
          Auth
        </button>
        <button
          onClick={() => pushToPage("/page1")}
          className="ml-5 hover:underline"
        >
          Page 1
        </button>
        <button
          onClick={() => pushToPage("/page2")}
          className="ml-5 hover:underline"
        >
          Page 2
        </button>
        <button
          onClick={() => pushToPage("/page3")}
          className="ml-5 hover:underline"
        >
          Page 3
        </button>
        <button onClick={() => logout()} className="ml-5 btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
