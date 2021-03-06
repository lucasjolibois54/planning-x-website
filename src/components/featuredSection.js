import * as React from "react"
import '../styles/global.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

//images
import DevicesImg2 from "../images/Rectangle77654.png";

// markup
const FeaturedSection = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className=" bg-maybe-dark-background w-full h-screen pt-24 lg:pt-0 pb-20">

            <div id="about" className="mb-28 p-0 flex flex-col-reverse w-full lg:flex-row md:p-16 md:mb-18">
                <div  data-aos="fade-up" className="mt-20 w-full lg:w-9/12">
                    <img src={DevicesImg2} className="pt-6" alt="mockup" />
                </div>
                <div className="flex text-center md:mt-20 flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left lg:ml-6 xl:pl-10">

                    <h2  data-aos="fade-up" className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl sm:text-5xl md:text-7xl lg:text-6xl 2xl:text-8xl font-bold text-dark-text py-0">
                        Featured to help you with time planning
                    </h2>
                    <p  data-aos="fade-up" className="text-lg text-light-background px-5 text-dark-text py-5 md:px-24 lg:px-0 xl:pl-0 xl:pr-20">
                        We have created a convenient network for work management. Here you can communicate with your team members, set tasks for them, propose events, plans & more. It will be easier for you to see which coworkers are working on a task. Your team will find it easier to plan their time when all the tasks are ahead of them. And it will be easier for you to control and help them.
                    </p>
                    <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                        <a data-aos="fade-up" href="https://plannerx-software.netlify.app/" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Download app</a> <a data-aos="fade-up" className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="https://plannerx-software.netlify.app/">Download for PC</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection
