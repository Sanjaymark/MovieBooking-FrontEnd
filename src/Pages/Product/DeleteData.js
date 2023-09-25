import React, { useState } from "react";
import { deleteData } from "../../Services/form"; 
import { useNavigate, useParams } from "react-router-dom";

export const DeleteData = () => {
    const { id } = useParams();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();

    const handleDeleteData = async () => {
        const response = await deleteData(id);

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");

            Navigate("/");

        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }
    };

    return (
        <div>
            <button onClick={handleDeleteData}>Delete Data</button>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};
