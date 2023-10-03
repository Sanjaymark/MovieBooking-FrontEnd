import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllBookingsofUser } from "../../Services/booking.js";

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
    <div className=" bg-neutral dark m-1 h-screen border-2 txt-clr">
        <h1 className="text-3xl font-bold mb-4">Select Your Time to Watch this Movie</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        {data.length > 0 ? (
          data.map((booking) => (
            <div key={booking._id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body items-center text-cente bg-neutral">
                <h2 className="card-title text-2xl">{booking.movie_name}</h2>
                <p>Start Time : {booking.start_time}</p>
                <p>No.of Seats : {booking.number_of_seats}</p>
                <p>Total Price : {booking.total_price}</p>
                <p>Total Price : {booking.total_price}</p>
                <p>Payment Status : {booking.payment_status}</p>
                <p>Booking Date : {booking.booking_date}</p>
                <div className="card-actions justify-end p-2">
                  <Link to={`/booking/delete/${booking._id}`} className="btn btn-info bg-neutral btn-outline">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

