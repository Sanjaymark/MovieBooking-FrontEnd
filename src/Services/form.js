import { API } from "./api";


//Add Data
export const addData = async (formData) => {
    try 
    {
        const response = await fetch(`${API}/form/add`, 
        {
            method: "POST",
            body: JSON.stringify(formData),
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
    } 
    catch (error) 
    {
        console.error("Please fill all the fields", error);
        return { success: false, message: "An error occurred while adding the data" };
    }
};


//Delete data
export const deleteData = async (dataId) => {
    try {
        const response = await fetch(`${API}/form/delete/${dataId}`, {
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

//Get Data by Id
export async function getDataById(dataId) {
    try {
        const response = await fetch(`${API}/form/${dataId}`,
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



//Edit a Product
export async function updateData(dataId, updatedData) {
    try {
        const response = await fetch(`${API}/form/edit/${dataId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token":localStorage.getItem("token"),
            },
            body: JSON.stringify(updatedData),
        });

        const data = await response.json();
        
        if (response.ok) {
            return {
                success: true,
                message: "Data updated successfully",
                data: data,
            };
        } else {
            return {
                success: false,
                message: data.error || "Failed to update data",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while updating the data",
        };
    }
}


//Get All data
export async function getAllData() {
    try {
        const response = await fetch(`${API}/form/all`,
        {
            method: "GET",
            headers: {
                "x-auth-token" : localStorage.getItem("token"),
            }
        });
        const data = await response.json();

        console.log(data.data)

        if (response.ok) {
            return {
                success: true,
                data: data.data,
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




