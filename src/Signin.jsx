import React from "react";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/md";

const Signin = () => {
    return (
        <>
            <div className="bg-white ">
                <div className="border rounded-md shadow py-12 px-10 mb-6 grid  grid-cols2 mx-96 gap-4">
                    <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg" alt="logo" />
                    <h1 className="font-bold text-4xl py-4">Sigh in</h1>
                    <p>Already have an account?  <span className="text-blue-500">Sign in</span></p>
                    <label>Username</label>
                    <input type="text" placeholder="Username" className="border rounded py-3 px-2" />
                    <label>Password</label>
                    <input type="text" placeholder="Password" className="border rounded py-3 px-2" />
                   <div className="flex justify-between items-center">
                   <div className="flex items-center">
                   <MdOutlineCheckBoxOutlineBlank/>
                    <h2>Remember Me</h2>
                   </div>
                   <div>
                   <h2 className="text-blue-600">Forgot Password?</h2>
                   </div>
                   </div>

                    <button className="bg-blue-700 py-2 rounded-md text-white font-bold">Sigh in</button>
                </div>

            </div>

        </>
    );
};

export default Signin;