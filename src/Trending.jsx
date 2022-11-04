import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";


const Trending = () => {
    return (
        <>
        <div className="bg-gray-200 ">
                <div className="container mx-auto px-24">
                    <h2 className="font-bold text-2xl">Trending</h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 container mx-auto gap-4 px-20 ">
                    {RecomendedData.map((item, index) => {
                        return (
                            <div key={index}
                                className={'shadow-md rounded-md bg-white  ${item.class}'}
                            >
                                <img className="rounded-t-md" src={item.img} alt="" />
                                <h2 className="px-5 py-4 font-semibold ">{item.title}</h2>
                                <div className="px-5 flex items-center gap-2 text-gray-600">
                                    <p className="px-5 flex items-center gap-2 "> < MdOutlineWatchLater /> {item.des} </p>
                                </div>
                                <div className="px-5 flex items-center gap-2 text-gray-600">
                                    <p className="px-5 flex items-center gap-2 "> < GiNetworkBars /> {item.desc} </p>
                                </div>
                                <div className="px-8 flex items-center gap-2 text-orange-600 py-2">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <p className="pl-2">{item.num}</p>
                                    <p className="">{item.number}</p>

                                </div>
                                <div>
                                    <hr />
                                    <div className="flex justify-between items-center px-4 py-4 ">
                                        <img className="w-10 rounded-full" src={item.imgs} alt="" />
                                        <h2 className="">{item.text}</h2>
                                        <div className=" ">
                                            <CiSaveDown2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        
        </>
    );
};

const RecomendedData = [
    {
        img: "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg",
        title: "GraphQL: introduction to graphQL for beginners",
        des: "2 hours 46 minutes",
        desc: "Expert",
        num:"4.2",
        number:"(17)",
        imgs:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg",
        text:"Ted Hawkins",
    },

    {
        img: "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg",
        title: "Angular-the complete guide for beginner",
        des: "1 hours 30 minutes",
        desc: "Beginner",
        num:"4.5",
        number:"(08)",
        imgs:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg",
        text:"Juanita Bell",
    },

    {
        img: "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg",
        title: "The Python Course: build web application",
        des: "2 hours 30 minutes",
        desc: "Intermediate",
        num:"4.6",
        number:"(07)",
        imgs:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg",
        text:"Claire Robertson",
    },
    
    {
        img: "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg",
        title: "Gatsby JS: build blog with GraphQL and React",
        des: "3 hours 56 minutes",
        desc: "Beginner",
        num:"4.9",
        number:"(08)",
        imgs:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg",
        text:"Morris Mccoy",
    },


]

export default Trending;