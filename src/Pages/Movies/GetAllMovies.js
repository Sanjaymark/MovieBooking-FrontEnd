import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllMovies } from "../../Services/movie";

export const AllMovies = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const response = await getAllMovies();

    if (response.success) {
      setData(response.data);
      setErrorMessage("");
    } else {
      setData([]);
      setErrorMessage(response.message);
    }
  };

  return (
    <div className=" m-1 h-full border-2 ">
      <div className="table-container">
        {data.length > 0 ? (
          <div className="carousel w-full h-100">
            {data.map((movie, index) => (
              <div key={movie._id} id={`slide${index + 1}`} className="carousel-item relative w-full">
                <img src={movie.posterUrl} className="w-full" alt={`Slide ${index + 1}`} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? data.length : index}`} className="btn btn-circle">❮</a>
                  <a href={`#slide${index === data.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>{errorMessage}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((movie) => (
        <div key={movie._id} className="card w-96 bg-base-100 shadow-xl border-2 border-info">
          <figure className="px-10 pt-5">
            <img src={movie.posterUrl} alt={movie.title} className="rounded-xl border-2 border-info" />
          </figure>
          <div className="card-body text-center items-center ">
              <h1 className="card-title text-2xl italic txt-clr">{movie.title}</h1>
          </div>
          <div className="card-body items-center text-center">
            <div className="card-actions justify-end">
              <Link to={`/movie/${movie._id}`} className="btn btn-primary btn-outline bg-neutral btn-info">Watch Movie</Link>
              </div>
            </div>
        </div>
        ))}
      </div>

    </div>
  );
};
