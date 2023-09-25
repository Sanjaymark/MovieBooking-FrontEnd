import React from "react";
import { useNavigate } from "react-router-dom";


export const Navigationbar = () =>{

    const Navigate = useNavigate();
    return (
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-success mx-20 dark " onClick={() => Navigate("/form/all")}>Dashboard</button>
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-success mx-10 dark" onClick={() => Navigate("/form/add")}>Form</button>
        </div>
        <div className="flex-none ">
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-success mx-10 dark" onClick={() => Navigate("/user/login")}>Login</button>
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-success  dark" onClick={() => Navigate("/user/signup")}>SignUp</button>
        </div>
      </div>
      );
}