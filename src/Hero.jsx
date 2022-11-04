import React from "react";
import {BsCameraVideo} from 'react-icons/bs'
import {IoMdPeople} from 'react-icons/io'
import {MdOutlineWatchLater} from'react-icons/md'
import { Link } from "react-router-dom";
const Hero = () => {
return (
    <>
    <div className="bg-[rgb(117,79,254)]">
        <div className=" container mx-auto flex justify-between items-center grid md:grid lg:grid-cols-2 ">
            <div className="px-20">
                <h2 className="text-white text-4xl font-bold">Welcome to Geeks UI Learning Application</h2>
                <p className="text-gray-800 font- font-semibold py-5 text-xl">Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
                <div className="  space-y-4 space-x-2">
            <Link to="/About" className="bg-green-400 text-white py-3 px-3 rounded-md font-bold">Browse Courses</Link>
            <button className="bg-white py-3 px-3 rounded-md">Are You Instructor?</button>
        </div>
            </div>
            <img  className="px-10" src="	https://geeks.madrasthemes.com/wp-content/uploads/2021/09/hero-img.png" alt="" />
        </div>
        
       </div>
       <div className="shadow-md">
       <div className="container mx-auto flex  py-5 justify-between items-center gap-4 px-10 grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex justify-center items-center gap-2">
            <div className="bg-[rgb(255,238,218)] py-4 px-4 rounded-full ">
        <BsCameraVideo/>
        </div>
        <div>
          <h2 className="font-bold text-xl">30,000 online courses</h2>
          <p className="text-gray-600">Enjoy a variety of fresh <br/> topics</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
            <div className="bg-[rgb(255,238,218)] py-4 px-4 rounded-full">
        <IoMdPeople/>
        </div>
        <div>
          <h2 className="font-bold text-xl">Expert instruction</h2>
          <p className="text-gray-600">Find the right instructor for  <br/> you</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
            <div className="bg-[rgb(255,238,218)] py-4 px-4 rounded-full">
        <MdOutlineWatchLater/>
        </div>
        <div>
          <h2 className="font-bold text-xl">Lifetime access</h2>
          <p className="text-gray-600">Learn on your schedule </p>
          </div>
        </div>
       </div>
       </div>
    </>
);
};

export default Hero;