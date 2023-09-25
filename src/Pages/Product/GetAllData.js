import React, { useState, useEffect } from "react";
import { getAllData } from "../../Services/form";
import { Link, useNavigate } from "react-router-dom";

export const DataList = () => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => 
    {
        const response = await getAllData();

        if (response.success) {
            setData(response.data);
            setErrorMessage("");
        } else {
            setData([]);
            setErrorMessage(response.message);
        }
    };

    return (
        <div className="bg-neutral m-1 h-full">
            <div className="card-container  ">
                {data.length > 0 ? (
                    <div className="flex flex-wrap justify-center">
                        {data.map(data => (
                            <div key={data._id} className="card w-96 bg-neutral dark shadow-xl m-4 border-2">
                                <div className="card-body items-center text-center text-lg">
                                    <h2 className="card-title text-4xl p-2">{data.name}</h2>

                                    <p>Email : {data.email}</p>
                                    <p>Contact : {data.contact}</p>
                                    <p>Education : {data.education}</p>
                                    <p>Age : {data.age}</p>
                                    <p>Gender : {data.gender}</p>
                                    <div className="card-actions flex justify-between p-4">
                                    <Link to={`/form/${data._id}`} className="btn btn-success">View</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<p>{errorMessage}</p>
                )}
            </div>
        </div>
    );
};
