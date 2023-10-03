import { API } from "./api";


//Add Booking
export const addBooking = async (bookingData, showtimeId) => {
    try {
      const response = await fetch(`${API}/booking/add/${showtimeId}`, {
        method: "POST",
        body: JSON.stringify(bookingData),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
  
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
  
      const data = await response.json();

      console.log(data)

      return { success: true, message: data.message, data : data };
    } catch (error) {
      console.error("An error occurred while adding the booking", error);
      return { success: false, message: "An error occurred while adding the booking" };
    }
  };




//Get All Bookings of a User
export async function getAllBookingsofUser(userId) {
    try {
        console.log(userId);
        const response = await fetch(`${API}/booking/user/${userId}`,
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







//Delete a Booking
export const deleteBooking = async (bookingId) => {
    try {
        const response = await fetch(`${API}/booking/delete/${bookingId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token":localStorage.getItem("token"),
            },
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, message: data.message };
        } else {
            return { success: false, message: data.error };
        }
    } catch (error) {
        console.error("Error deleting data", error);
        return { success: false, message: "An error occurred while deleting the data" };
    }
};










