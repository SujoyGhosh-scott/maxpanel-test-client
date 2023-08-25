import React, { useState } from "react";
import axios from "axios";
import Header from "./Components/Header";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const login = () => {
    if (!email || !password) return;
    console.log("login with", email, password);
    axios
      .post(`${process.env.REACT_APP_SERVER_BASE}/api/users/login`, {
        email,
        password,
      })
      .then((resp) => {
        console.log(resp.data);
        setLoginError("");
      })
      .catch((err) => {
        setLoginError("something went wrong. please try again later");
        console.error("login error: ", err);
      });
  };
  const signup = () => {
    if (!email || !password) return;
    if (password !== confirmPassword) setSignupError("passwords dont match");
    console.log("signup with", email, password);
    axios
      .post(`${process.env.REACT_APP_SERVER_BASE}/api/users/signup`, {
        email,
        password,
      })
      .then((resp) => {
        console.log(resp.data);
        setSignupError("");
      })
      .catch((err) => {
        setSignupError("something went wrong. please try again later");
        console.error("login error: ", err);
      });
  };

  return (
    <div className="px-72">
      <Header currPage={"/auth"} />
      <div className="w-full flex items-center mt-60">
        {/* signup section */}
        <div className="w-1/2 flex items-center flex-col">
          <h1 className="text-lg">Signup</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-5 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Set Password"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-3 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Confirm Password"
          />
          {signupError && (
            <p className="w-[60%] text-sm py-2 text-error">{signupError}</p>
          )}
          <button
            onClick={() => signup()}
            className="btn btn-md btn-secondary mt-5 w-[60%]"
          >
            Submit
          </button>
        </div>

        {/* login section */}
        <div className="w-1/2 flex items-center flex-col">
          <h1 className="text-lg">Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-5 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 min-w-[60%] input input-sm input-bordered rounded-md"
            type="text"
            placeholder="Password"
          />
          {loginError && (
            <p className="w-[60%] text-sm py-2 text-error">{loginError}</p>
          )}
          <button
            onClick={() => login()}
            className="btn btn-md btn-primary mt-5 w-[60%]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
