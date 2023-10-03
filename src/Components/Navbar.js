import React from "react";
import { useNavigate } from "react-router-dom";


export const Navigationbar = () =>{

    const Navigate = useNavigate();
    return (
      <div className="navbar bg-neutral  text-neutral-content">
        <div className="flex-1">
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-info dark " onClick={() => Navigate("/")}>Movies</button>
        </div>
        <details className="dropdown dropdown-left bg-neutral">
          <summary className=" btn btn-outline bg-neutral btn-info btn-circle">User</summary>
            <ul className="shadow menu dropdown-content z-[1] rounded-box bg-neutral">
              <li><a><button className="btn btn-outline bg-neutral btn-info" onClick={() => Navigate("/user/login")}>Login</button></a></li>
              <li><a><button className="btn btn-outline bg-neutral btn-info" onClick={() => Navigate("/user/signup")}>Signup</button></a></li>
            </ul>
        </details>
      </div>
      );
}