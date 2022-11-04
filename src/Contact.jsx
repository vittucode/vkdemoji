import React from "react";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import {CiLocationOn} from "react-icons/ci";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";
import{AiFillGithub} from "react-icons/ai";

const Contact = () => {
    return (
        <>
        <div  className=" ">
             <img className="px-56" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg" alt="logo" />
             <div className="flex justify-between items-center py-4 md:p-10  grid md:grid-cols-2 lg-grid-cols-3">
            <div className="conatiner mx-auto py-10  ">
                <div className=" justify-between items-center " >
                   
                    <h2 className="font-bold text-4xl">Get In Touch.</h2>
                    <p className="py-4 text-gray-500 text-xl">Fill in the form to the right to get in <br/> touch with someone on our team, and <br/> we will reach out shortly.</p>
                    <div className="py-8 ">
                    <p className=" text-gray-500">If you are seeking support please visit our <br/> <span className="text-blue-500">support portal</span> before reaching out directly.</p>
                    <div className="flex items-center gap-2 text-blue-500 py-4">
                    <BsTelephone/>
                    <h2 className="text-gray-600">+ 0123-456-7890 </h2>
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 ">
                    <HiOutlineMailOpen/>
                    <h2 className="text-gray-600">hello@geekui.com</h2>
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 py-4">
                    <CiLocationOn/>
                    <h2 className="text-gray-600">2652 Kooter Lane Charlotte, NC 28263</h2>
                    </div>
                    </div>
                    <div className="flex gap-4 text-xl text-gray-500 py-20 ">
                <BsFacebook/>
                <AiOutlineTwitter/>
                <AiFillGithub/>
                </div>


                </div>
                
            </div>
            
        
        <div className="bg-gray-300 px-10 ">
                <div className="container mx-auto grid  ">
                    <div className="flex py-10 gap-6" >
                    <div className="">
                <label className="">First Name</label> <span className="text-red-500 text-xl">*</span><br/> 
                <input type="text" placeholder="First Name" className="border rounded py-3 px-2  " />
                </div>
                <div>
                <label className="">Last Name</label> <span className="text-red-500 text-xl">*</span> <br/>
                <input type="text" placeholder="Last Name" className="border rounded py-3 px-2"/>
                </div>
                </div>
                <div className=" flex gap-6">
                    <div>
                <label>Email:</label> <span className="text-red-500 text-xl">*</span> <br/>
                <input type="text" placeholder="Email" className="border rounded py-3 px-2" />
                </div>
                <div>
                <label>Phone:</label> <span className="text-red-500 text-xl">*</span> <br/>
                <input type="text" placeholder="Phone" className="border rounded py-3 px-2" />
                </div>
                </div>
                <div className="py-6  ">
                <label >Contact Reason: <span className="text-red-500 text-xl">*</span></label> <br/> 
                <select className="w-96 py-3 outline-none border rounded-md px-3 mb-6 lg:flex text-gray-500">
                    <option value={""}>Select </option>
                    <option value={""}>Design</option>
                    <option value={""}> Development</option>
                    <option value={""}>Other</option>
                    
                </select>
                </div>
                <div className="py-6 ">
                <label>Message:</label> <br/> 
                <input type="text" placeholder=""className="border rounded py-12 px-2 w-96" />
                </div>
                <button className="bg-blue-500 text-white py-2 px-3 w-24 rounded-md mb-4">Submit</button>
                </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Contact;