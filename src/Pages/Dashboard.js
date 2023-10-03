import React from "react";
import { Navigationbar } from "../Components/Navbar";
import { AllMovies } from "./Movies/GetAllMovies";



export const Dashboard = () =>{
    return <div>
        <Navigationbar/>
        <AllMovies/>
    </div>
};