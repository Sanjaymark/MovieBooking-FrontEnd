import { API } from "./api";





//Get All Showtimes of a Movie
export async function getAllShowtimes(movieId) {
    try {
        const response = await fetch(`${API}/showtime/all/${movieId}`,
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






//Get Showtime by Id
export async function getShowtimeById(showtimeId) {
    try {
        const response = await fetch(`${API}/showtime/${showtimeId}`,
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

















