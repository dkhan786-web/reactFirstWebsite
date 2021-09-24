import React from "react";
import web from "../src/images/home-header.png";
import Common from "./common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;