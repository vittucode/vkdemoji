import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div className="shadow-md">
            <div className="container mx-auto justify-between items-center py-3 px-24 gap-4 flex flex-wrap">
                <div className="text-gray-600">
                    <h2>© 2022 Geeks. All Rights Reserved</h2>
                </div>
                <div className="flex gap-4 text-gray-600 ">
                    <Link to="About">About</Link>
                    <Link to="Terms">Terms & Conditions</Link>
                    <Link to="Privacy">privacy Policy</Link>
                    <Link to="Contact">Contact</Link>
                   
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Footer;