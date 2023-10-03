import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllShowtimes } from "../../Services/showtime.js";

export const ShowtimesOfAMovie = () => {
  const [showtimes, setShowtimes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const fetchShowtimes = async () => {
    const response = await getAllShowtimes(movieId);

    if (response.success) {
      setShowtimes(response.data);
      setErrorMessage("");
    } else {
      setShowtimes([]);
      setErrorMessage(response.message);
    }
  };

  return (
    <div className=" bg-neutral dark m-1 h-screen border-2 txt-clr">
        <h1 className="text-3xl font-bold mb-4">Select Your Time to Watch this Movie</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        {showtimes.length > 0 ? (
          showtimes.map((showtime) => (
            <div key={showtime._id} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body items-center text-cente bg-neutral">
                <h2 className="card-title text-2xl">{showtime.movie_name}</h2>
                <div className="card-actions justify-end p-2">
                  <Link to={`/booking/add/${showtime._id}`} className="btn btn-info bg-neutral btn-outline">
                    {showtime.start_time}
                  </Link>
                </div>
                <div className="pt-4">
                    <p><span className="italic text-lg">Price/ticket : Rs.{showtime.price}/-</span></p>
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

export default ShowtimesOfAMovie;
