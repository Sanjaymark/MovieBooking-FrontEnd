import React, { useState } from "react";
import {Navigationbar} from "../Components/Navbar";
import { handleSignup } from "../Services/auth";
import { useNavigate } from "react-router-dom";

export const Signup = () =>{
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [contact, SetContact] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const Navigate = useNavigate();

    const signupUser = async () =>{
        const payload = {name,email,contact,password};

        handleSignup(payload).then((data)=>
        {
            if(data.error)
            {
                SetError(data.error);
                setSuccessMsg("")
            }
            else
            {
                SetError("")
                setSuccessMsg(data.message);
                localStorage.setItem("token", data.token);
                
                setTimeout(() => 
                {
                    Navigate("/");
                }, 3000);
                
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        signupUser();
    };
    return (
    <div>
        <Navigationbar/>
        <SignupForm
            name={name}
            SetName={SetName}
            email={email}
            SetEmail={SetEmail}
            password={password}
            SetPassword={SetPassword}
            contact={contact}
            SetContact={SetContact}
            handleSubmit={handleSubmit} 
        />
        {error ? <div className="err-msg">{error}</div> : ""}
        {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
    </div>)
};

function SignupForm({name,SetName,email, SetEmail,contact, SetContact,password, SetPassword, handleSubmit})
{
    return(
            <div className="flex justify-center items-center h-screen m-1 bg-neutral">
                <div className="w-full max-w-md">
                <form className="forms" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered input-success w-full"
                        value={name}
                        onChange={(e) => SetName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered input-success w-full"
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Contact"
                        className="input input-bordered input-success w-full"
                        value={contact}
                        onChange={(e) => SetContact(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-success w-full"
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)}
                    />
                    <button className="btn btn-success w-full" type="submit">Signup</button>
                </form>
                </div>
            </div>
    )
}