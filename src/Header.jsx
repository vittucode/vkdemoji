import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
       <div className=" shadow-md">
        <div className="container mx-auto flex justify-between items-center py-3 ">
            <div className="flex gap-4 ">
                <img className="" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg" alt="Geeks" />
            
            <div className="flex gap-4 items-center lg:flex hidden md:flex hidden px-4 md:px-10 ">
                <h2 className="text-sl font- font-semibold">Browse</h2>
                <h2 className="text-sl font- font-semibold">Landings</h2>
                <h2 className="text-sl font- font-semibold">pages</h2>
                <h2 className="text-sl font- font-semibold">Accounts</h2>
                <h2 className="text-sl font- font-semibold">...</h2>
                <div className="border rounded-md py-1 px-8 text-left flex gap-2 ">
                    <div className="py-1 ">
                <AiOutlineSearch/>
                </div>
                <div>
                    <input type="text"placeholder="Search Courses" className="w-full outline-none" />
                    </div>
                    
                    
                </div>
                </div>
            </div>
            <div className="gap-2 lg:flex md:flex hidden ">
                <Link to="Signin" className="bg-white shadow-md py-2 px-4 rounded-md ">Sign In</Link>
                <Link to="Signup" className="bg-blue-500 py-2 px-4 rounded-md text-white">Sign Up</Link>
            </div>
            <div className=" lg:hidden md:hidden border rounded-md py-2 px-2 border-blue-500">
            <AiOutlineMenu/>
            </div>
        </div>
       </div>
       
        </>
    );
};

export default Nav;