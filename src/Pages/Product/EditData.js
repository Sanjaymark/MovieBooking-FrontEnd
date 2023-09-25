import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateData, getDataById } from "../../Services/form";
import { Navigationbar } from "../../Components/Navbar";

export const UpdateData = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [education, setEducation] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Navigate = useNavigate();
    
    
    useEffect(() => {
        fetchDataDetails();
    }, []);

    const fetchDataDetails = async () => {
        const response = await getDataById(id);

        if (response.success) {
            const data = response.data;
            setName(data.name);
            setEmail(data.email);
            setContact(data.contact);
            setEducation(data.education);
            setAge(data.age);
            setGender(data.gender)
            setSuccessMessage("");
            setErrorMessage("");
        } else {
            setErrorMessage(response.message);
        }
    };

    const handleUpdate = async () => {
        const updatedData = { name, email, contact, education, age, gender };
        const response = await updateData(id, updatedData);

        if (response.success) {
            setSuccessMessage("Product updated successfully!");
            setErrorMessage("");

            Navigate("/")

        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        handleUpdate();
    }

    return (
        <div>
            <Navigationbar/>
            <div className="bg-neutral h-screen p-1 flex justify-center m-1">
            <div className="w-full max-w-md">
                <form className="forms" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" className="input input-bordered input-accent w-full " value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" className="input input-bordered input-accent w-full " value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Contact" className="input input-bordered input-accent w-full " value={contact} onChange={(e) => setContact(e.target.value)} />
                    <input type="text" placeholder="Education" className="input input-bordered input-accent w-full " value={education} onChange={(e) => setEducation(e.target.value)} />
                    <input type="text" placeholder="Age" className="input input-bordered input-accent w-full " value={age} onChange={(e) => setAge(e.target.value)} />
                    <input type="text" placeholder="Gender" className="input input-bordered input-accent w-full " value={gender} onChange={(e) => setGender(e.target.value)} />
                    <button className="btn btn-active btn-accent" type="submit">Update Data</button>
                </form>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
            </div>
        </div>
    );
};
