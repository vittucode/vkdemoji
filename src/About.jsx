import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const About = () => {
    return (
        <>
            <div>
                <div className="container mx-auto  justify-center text-center px-16 py-10 grid  gap-4 lg:px-80 ">
                    <h2 className="font-bold text-6xl text-left">Hi there, we’re <span className="text-blue-500">Geeks</span> </h2>
                    <p className="text-left text-2xl py-4 font-semibold">We’re building the best next-generation interactive bootstrap <br /> based UI Kit design tool for developers, engineers, Full-Stack <br /> developer, and digital agency.</p>
                    <p className="text-gray-500 text-left text-left  py-2 font-semibold">Geeks provide clean and consistent page designs to help you to create beautiful looking <br /> contents. Geek is feature-rich components and beautifully designed pages that help you create<br />  the best possible website and web application projects.</p>
                </div>
                <div className="container mx-auto px-24 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                        <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-1.jpg" alt="" />
                        <img className="rounded-md " src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-2.jpg" alt="" />
                        <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-3.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-4.jpg" alt="" />
                        <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-5.jpg" alt="" />
                        <img className="rounded-md" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/geeksui-img-6.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className="px-24 py-20">
                        <h2 className="font-bold text-4xl text-left">Our global reach</h2>
                        <p className="text-gray-500 text-xl py-4 text-left ">Geeks is the leading global marketplace for teaching and <br /> learning, connecting millions of students to the skills they <br /> need to succeed.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-24 mb-20">
                        <div>
                            < hr />
                            <h2 className="font-bold text-5xl  py-2">20M</h2>
                            <p className="text-gray-600 ">LEARNERS</p>
                        </div>
                        <div>
                            <hr />
                            <h2 className="font-bold text-5xl  py-2" >57K</h2>
                            <p className="text-gray-600 " >INSTRUCTORS</p>
                        </div>
                        <div>
                            <hr />
                            <h2 className="font-bold text-5xl  py-2">21K</h2>
                            <p className="text-gray-600 ">COURSES</p>
                        </div>
                        <div>
                            <hr />
                            <h2 className="font-bold text-5xl  py-2">380M</h2>
                            <p className="text-gray-600 ">COURSE ENROLLMENTS</p>
                        </div>
                    </div>


                </div>
                <div className="bg-gray-200 ">
                    <div className="px-24 py-20">
                        <h2 className="font-bold text-4xl text-left">Our core values</h2>
                        <p className="text-gray-500 text-xl py-4 text-left ">Our core values are the fundamental beliefs of a person or <br /> organization geeks academy. We help people understand <br /> the difference between right and wrong..</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 ">
                            <div className="bg-white text-blue-500 px-5 py-4 rounded-md">
                                <p className="text-5xl"><FaGraduationCap /></p>
                                <h2 className="text-black font-semibold text-xl py-4">Make Education Accessible</h2>
                                <p className="text-gray-600">Quis cursus turpis in habitant sagittis amet <br /> dolor malesuada ut. Volutpat nunc id <br /> blanvolutpat nunc.</p>
                            </div>

                            <div className="bg-white text-blue-500 px-5 py-4 rounded-md">
                                <p className="text-5xl"><IoIosPeople /></p>
                                <h2 className="text-black font-semibold text-xl py-4">Learn and Grow</h2>
                                <p className="text-gray-600">Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
                            </div>

                            <div className="bg-white text-blue-500 px-5 py-4 rounded-md">
                                <p className="text-5xl"><AiOutlineStock /></p>
                                <h2 className="text-black font-semibold text-xl py-4">Make Education Accessible</h2>
                                <p className="text-gray-600">Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="px-24 py-20">
                    <h2 className="font-bold text-4xl text-left">Our core values</h2>
                    <p className="text-gray-500 text-xl py-4 text-left ">Our core values are the fundamental beliefs of a person or <br /> organization geeks academy. We help people understand <br /> the difference between right and wrong..</p>
                    <button className="bg-blue-500 text-white py-2 px-3 rounded-md font-semibold mt-4">Openings</button>
                </div>

                <div className="px-24 py-20 ">
                    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-10 ">
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-4.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-6.jpg" alt="" />
                    </div>

                    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-10">
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-7.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-8.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-9.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-10.jpg" alt="" />
                        <img className="rounded-full" src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-11.jpg" alt="" />
                        <img className="rounded-full"  src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-12.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className="bg-[rgb(117,79,254)]">
                        <div className=" container mx-auto flex justify-between items-center grid md:grid lg:grid-cols-2 ">
                            <div className="px-20">
                                <h2 className="text-white text-4xl font-bold">Join the Geeks team & shape the future of design</h2>
                                <p className="text-gray-700 font- font-semibold py-5 text-xl">If you’re passionate and ready to dive in, we’d love to meet you. We’re committed to supporting our employee professional development and well-being.</p>
                                <div className="  space-y-4 space-x-2">
                                    <button className="bg-[rgb(20,14,51)] text-white py-3 px-3 rounded-md font-bold">View opportunities</button>

                                </div>
                            </div>
                            <img className="px-10" src="	https://geeks.madrasthemes.com/wp-content/uploads/2021/09/hero-img.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className="conatiner mx-auto justify-center items-center py-20 px-20">
                    <div className="grid  md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg" alt="logo" />
                            <h2 className="text-gray-500 py-4 ">Geek is feature-rich components and beautifully <br/> Bootstrap UI Kit for developers, built with bootstrap  responsive framework.</h2>
                            <div className="flex gap-4 text-xl text-gray-500 py-10 ">
                                <BsFacebook />
                                <AiOutlineTwitter />
                                <AiFillGithub />
                            </div>
                        </div>
                        <div className="px-40 text-gray-500 space-y-2">
                            <h1 className="font-bold text-xl text-black">Company</h1>
                            <p>About</p>
                            <p>Pricing</p>
                            <p>Blog</p>
                            <p>Careers</p>
                            <p>Contact</p>       
                        </div>
                        <div className="px-20 text-gray-500 space-y-2">
                            <h1 className="font-bold text-xl text-black ">Support</h1>
                            <p>Help and Support</p>
                            <p>Become Instructor</p>
                            <p>Get the app</p>
                            <p>FAQ’s</p>
                            <p>Tutorial</p>       
                        </div>
                        <div className="space-y-2" >
                            <h1  className="font-bold text-xl text-black ">Get in touch</h1>
                            <p className="text-gray-500">339 McDermott Points Hettingerhaven, NV 15283</p>
                            <p className="text-gray-500">Email: <span className="text-blue-500">support@geeksui.com </span></p>
                            <p className="text-gray-500">Phone: <span className="text-black">(000) 123 456 789</span></p>
                                  
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;