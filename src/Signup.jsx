import React from "react";
// import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
        <div className="bg-white ">
            <div className="border rounded-md shadow px-12 py-10 mb-6 grid  grid-cols2 mx-96 gap-4">
                <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg" alt="logo" />
                <h1 className="font-bold text-4xl py-4">Sigh up</h1>
                <p>Already have an account?  <span className="text-blue-500">Sign in</span></p>
                <label className="">First Name</label>
                <input type="text" placeholder="First Name" className="border rounded py-3 px-2" />

                <label className="">Last Name</label> 
                <input type="text" placeholder="Last Name" className="border rounded py-3 px-2"/>

                <label>Username</label> 
                <input type="text" placeholder="Username" className="border rounded py-3 px-2" />

                <label>Email</label> 
                <input type="text" placeholder="Email" className="border rounded py-3 px-2" />

                <label>Password</label> 
                <input type="text" placeholder="Password"className="border rounded py-3 px-2" />

                <label>Password confirmation</label> 
                <input type="text" placeholder="Password confirmation"className="border rounded py-3 px-2" />

                <button className="bg-blue-700 py-2 rounded-md text-white font-bold">Register</button>
            </div>
            
        </div>
        </>
    );
}; 

export default Signup;