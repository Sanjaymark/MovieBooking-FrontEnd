import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Navigationbar2 } from "../../Components/Navbar";
import { getMovieById } from "../../Services/movie";

export const MovieDetails = () => {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    const fetchMovieDetails = async () => {
        const response = await getMovieById(id);

        if (response.success) {
            setData(response.data);
            setErrorMessage("");
        } else {
            setData(null);
            setErrorMessage(response.message);
        }
    };

    return (
        <div>
            <Navigationbar2 />
            <div className="m-1 h-full" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                {data ? (
                    <div className="card w-full h-screen bg-neutral shadow-xl dark border-2 border-error">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl p-2">{data.title}</h2>
                            <div className="carousel w-96">
                                <div className="carousel-item relative w-full">
                                    <img src={data.posterUrl} className="w-full" alt={`Movie Poster`} />
                                </div>
                            </div>
                            <p><span className="text-2xl italic">Released On : {data.releaseDate}</span> </p>
                            <p><span className="text-xl italic">{data.description}</span></p>
                            
                            <div className="card-actions">
                                <Link to={`/showtime/all/${id}`} className="btn bg-accent btn-accent dark">Book Tickets</Link>
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
