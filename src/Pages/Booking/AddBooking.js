import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addBooking } from "../../Services/booking";
import { Navigationbar2 } from "../../Components/Navbar";

export const AddBooking = () => {
  const [number_of_seats, setNumber_of_seats] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { showtimeId } = useParams();
  const Navigate = useNavigate();

    const handleAddBooking = async () => {
        const newData = { number_of_seats };
        const response = await addBooking(newData, showtimeId);
        

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");
            setNumber_of_seats("");
            Navigate("/")
           
        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);

            
        }
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        handleAddBooking();
    }

    return (
        <div>
            <Navigationbar2/>
        <div className="bg-neutral m-1 h-screen flex justify-center items-center">
            <div>
                <span className="text-4xl dark">Select No.of Seats</span>
                <form className="forms " onSubmit={handleSubmit}>
                    <input type="number" placeholder="Number of Seats" className="input input-bordered input-accent w-full " value={number_of_seats} onChange={(e) => setNumber_of_seats(e.target.value)} min="1" />
                    <button className="btn btn-active btn-success max-w-md" type="submit">Book Tickets</button>
                </form>
                {successMessage && <p className="dark">{successMessage}</p>}
                {errorMessage && <p className="dark">{errorMessage}</p>}
            </div>
        </div>
        </div>
    );
};