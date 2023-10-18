import React from "react";
import { useNavigate } from "react-router-dom";


export const Navigationbar = () =>{

    const userId= localStorage.getItem("userId");
    
    const Navigate = useNavigate();
    return (
      <div className="navbar bg-neutral  text-neutral-content">
        <div className="flex-1">
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-info dark " onClick={() => Navigate("/")}>Movies</button>
        </div>
        <button className="btn mr-10 btn-outline btn-info dark" onClick={() => Navigate(`/booking/user/bookings/${userId}`)}>
          My Bookings
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
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

export const Navigationbar2 = () =>{

  const userId= localStorage.getItem("userId");
  
  const Navigate = useNavigate();
  return (
    <div className="navbar bg-neutral  text-neutral-content">
      <div className="flex-1">
        <button className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-info dark " onClick={() => Navigate("/")}>Movies</button>
      </div>
      <button className="btn mr-10 btn-outline btn-info dark" onClick={() => Navigate(`/booking/user/bookings/${userId}`)}>
        My Bookings
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </button>
    </div>
    );
}