import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllBookingsofUser } from "../../Services/booking.js";
import { Navigationbar } from "../../Components/Navbar.js";

export const UserBookings = () => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const { userId } = useParams();
    
    useEffect(() => {
      fetchBooking();
    }, []);
  
    const fetchBooking = async () => {
      const response = await getAllBookingsofUser(userId) ;
  
      if (response.success) {
        setData(response.data);
        setErrorMessage("");
      } else {
        setData([]);
        setErrorMessage(response.message);
      }
    };

  return (
    <div className="w-full flex flex-wrap">
  <Navigationbar />
  <div className="bg-neutral dark m-1 h-screen border-2 txt-clr w-full">
    <h1 className="text-3xl font-bold mb-4">Your Bookings</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.length > 0 ? (
        data.map((booking) => (
          <div key={booking._id} className="bg-base-100 shadow-xl p-4 bg-neutral border-2">
            <h2 className="text-2xl mb-2">{booking.movie_name}</h2>
            <p>Show Time: {booking.start_time}</p>
            <p>No. of Seats: {booking.number_of_seats}</p>
            {/* Add more information as needed */}
            <div className="mt-2">
              <Link to={`/booking/${booking._id}`} className="btn btn-info bg-neutral btn-outline">
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  </div>
</div>



  );
};

