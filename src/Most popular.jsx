import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";

const MostPopular = () => {
    return (
        <>
        <div className="bg-gray-200  ">
                <div className="container mx-auto px-24">
                    <h2 className="font-bold text-2xl">Most Popular</h2>
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
        img: "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg",
        title: "Applying JavaScript and using the console.",
        des: "1 hours 30 minutes",
        desc: "Beginner",
        num:"4.6",
        number:"(07)",
        imgs:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg",
        text:"Juanita Bell",
    },

    {
        img: "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg",
        title: "WordPress: complete WordPress theme & plugin",
        des: "2 hours 30 minutes",
        desc: "Intermediate",
        num:"4.7",
        number:"(11)",
        imgs:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg",
        text:"Claire Robertson",
    },

    {
        img: "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg",
        title: "CSS: ultimate CSS course from beginner to advanced",
        des: "1 hours 30 minutes",
        desc: "Beginner",
        num:"4.7",
        number:"(06)",
        imgs:"https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg",
        text:"Juanita Ball",
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

export default MostPopular;