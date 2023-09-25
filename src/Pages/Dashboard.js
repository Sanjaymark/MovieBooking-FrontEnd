import React from "react";
import { Navigationbar } from "../Components/Navbar";
import { DataList } from "./Product/GetAllData";


export const Dashboard = () =>{
    return <div>
        <Navigationbar/>
        <DataList/>
    </div>
};