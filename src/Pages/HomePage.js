import React from "react";
import { Navigationbar } from "../Components/Navbar";


export const HomePage = () =>{
    return <div className="h-full">
        <Navigationbar/>
        <div className="h-screen bg-neutral m-1">
            <div className="dark flex justify-center items-center text-6xl hm">
                Welcome to Sanjay's Form Web App
                <span>Please Login/SignUp to explore the Content</span>
            </div>
        </div>
        
    </div>
};