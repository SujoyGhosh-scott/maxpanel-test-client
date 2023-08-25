import React from "react";
import Header from "./Components/Header";

const Auth = () => {
  return (
    <div className="px-72">
      <Header currPage={"/auth"} />
      <div className="w-full flex items-center mt-60">
        <div className="w-1/2 flex items-center flex-col">
          <h1 className="text-lg">Signup</h1>
          <input
            className="mt-5 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Enter email"
          />
          <input
            className="mt-3 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Set Password"
          />
          <input
            className="mt-3 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Confirm Password"
          />
          <button className="btn btn-md btn-secondary mt-5 w-[60%]">
            Submit
          </button>
        </div>
        <div className="w-1/2 flex items-center flex-col">
          <h1 className="text-lg">Login</h1>
          <input
            className="mt-5 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Enter email"
          />
          <input
            className="mt-3 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Password"
          />
          <button className="btn btn-md btn-primary mt-5 w-[60%]">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
