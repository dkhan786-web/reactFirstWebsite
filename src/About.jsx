import React from "react";
import web from "../src/images/home-header.png";
import Common from "./common";

const About = () => {
    return (
        <>
            <Common
                name="Welcome to About Page"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"
            />
        </>
    );
};

export default About;