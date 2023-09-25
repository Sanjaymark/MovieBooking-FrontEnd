import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigationbar } from "../../Components/Navbar";
import { deleteData, getDataById } from "../../Services/form";

export const DataDetails = () => {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchDataDetails();
    }, []);

    const fetchDataDetails = async () => {
        const response = await getDataById(id);

        if (response.success) {
            setData(response.data);
            setErrorMessage("");
        } else {
            setData(null);
            setErrorMessage(response.message);
        }
    };

    const handleDeleteData = async () => {
        const response = await deleteData(id);

        if (response.success) {
            navigate("/");
        } else {
            setErrorMessage(response.message);
        }
    };

    return (
        <div>
            <Navigationbar/>
        <div className="bg-neutral m-1 h-full" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            {data ? (
                <div className="card w-96 bg-neutral shadow-xl dark border-2">
                    <div className="card-body items-center  text-center">
                        <h2 className="card-title">{data.name}</h2>
                        <p>Email: {data.email}</p>
                        <p>Contact: {data.contact}</p>
                        <p>Education: {data.education}</p>
                        <p>Age: {data.age}</p>
                        <p>Gender: {data.gender}</p>
                        <div className="card-actions">
                            <button className="btn btn-warning" onClick={() => navigate(`/form/edit/${id}`)}>Edit</button>
                            <button className="btn btn-error" onClick={handleDeleteData}>Delete</button>
                        </div>
                    </div>
                </div>
            ) : (
                <span className="dark">Loading...</span>
            )}
        </div>
        </div>
    );
};