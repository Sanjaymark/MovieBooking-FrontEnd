import { API } from "./api";





//Get All Movies
export async function getAllMovies() {
    try {
        const response = await fetch(`${API}/movie/all`,
        {
            method: "GET",
            headers: {
                "x-auth-token" : localStorage.getItem("token"),
            }
        });
        const data = await response.json();

        console.log(data)

        if (response.ok) {
            return {
                success: true,
                data: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to fetch data",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while fetching data",
        };
    }
}






//Get Movie by Id
export async function getMovieById(movieId) {
    try {
        const response = await fetch(`${API}/movie/${movieId}`,
        {
            method: "GET",
            headers: {
                "x-auth-token" : localStorage.getItem("token"),
            }
        });
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                data: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to fetch data",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while fetching the data",
        };
    }
}











