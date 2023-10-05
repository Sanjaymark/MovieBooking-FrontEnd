import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigationbar } from "../../Components/Navbar";
import { getBookingById, deleteBooking } from "../../Services/booking";

export const BookingDetails = () => {
  const [booking, setBooking] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { bookingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookingDetails();
  }, []);

  const fetchBookingDetails = async () => {
    const response = await getBookingById(bookingId);

    if (response.success) {
      setBooking(response.data);
      setErrorMessage("");
    } else {
      setBooking(null);
      setErrorMessage(response.message);
    }
  };

  const handleDelete = async () => {
    const response = await deleteBooking(bookingId);

    if (response.success) {
      // Booking deleted successfully, you can redirect or perform other actions here
      navigate("/"); // Redirect to a bookings page, for example
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <div>
      <Navigationbar />
      <div className="bg-neutral border-2" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
        <div className="bg-neutral dark m-1 w-96 txt-clr">
          <h1 className="text-3xl font-bold m-4">Booking Details</h1>
          {booking ? (
            <div className="card card-compact shadow-xl mt-4">
              <div className="card-body bg-neutral border-2">
                <h2 className="card-title text-2xl">{booking.movie_name}</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="italic">Show Time:</td>
                      <td>{booking.start_time}</td>
                    </tr>
                    <tr>
                      <td>No. of Seats:</td>
                      <td>{booking.number_of_seats}</td>
                    </tr>
                    <tr>
                      <td>Total Price:</td>
                      <td>{booking.total_price}</td>
                    </tr>
                    <tr>
                      <td>Booking Date:</td>
                      <td>{booking.booking_date.split("T")[0]}</td>
                    </tr>
                    <tr>
                      <td>Booking Time:</td>
                      <td>{booking.booking_date.split("T")[1].split(".")[0]}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="card-actions justify-end">
                  <button className="btn btn-error" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};
