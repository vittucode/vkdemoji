import React from "react";
import MostPopular from "./Most popular";
import Recomend from "./Recomend";
import Trending from "./Trending";
import Hero from "./Hero";


const Homepage = () => {
    return (
        <>
        <Hero/>
        <Recomend/>
        <MostPopular/>
        <Trending/>
        
        </>
    );
};

export default Homepage;