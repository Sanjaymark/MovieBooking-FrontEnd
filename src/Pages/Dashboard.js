import React from "react";
import { Navigationbar, Navigationbar2 } from "../Components/Navbar";
import { AllMovies } from "./Movies/GetAllMovies";



export const Dashboard = () =>{
    const token = localStorage.getItem("token");
    
    return <div>
    {token ? <Navigationbar2 /> : <Navigationbar />}
    <AllMovies />
  </div>
};