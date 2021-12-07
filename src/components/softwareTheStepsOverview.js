import * as React from "react"
import '../styles/global.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// markup
const SoftwareTheStepsOverview = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className=" bg-maybe-dark-background w-full h-screen pt-0 lg:pt-0 pb-5">

                <div  id="tips-about-page" className="mb-3 p-0 flex flex-col-reverse w-full lg:flex-row-reverse md:p-16 md:mb-7 ">
                    <div className="w-full xl:w-9/12">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl sm:text-4xl md:text-6xl 2xl:text-8xl font-bold text-dark-text py-0">
                    {" "}
                        </h2>
                    <div className="text-lg text-light-background px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                            <ul className="my-auto ">
                                <li data-aos="fade-up" data-aos-anchor-placement="top-center" className="list-none"><p className="font-light text-center md:text-left px-5 py-1 rounded-xl md:inline-block bg-dark-background">Go on to our website</p></li><br/>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-center" className="list-none"><p className="font-light text-center md:text-left md:px-5 py-1 rounded-xl md:inline-block bg-dark-background">Click on the top right corner of the serach bar on the icon </p></li><br/>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-center" className="list-none"><p className="font-light text-center md:text-left md:px-5 py-1 rounded-xl md:inline-block bg-dark-background">Now youre ready to go offline </p></li> <br/>
                            </ul>
                        </div>
                    </div>
                    <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
                    <h2 data-aos="slide-up" data-aos-anchor-placement="top-center" className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl sm:text-4xl md:text-6xl 2xl:text-8xl font-semibold text-dark-text py-0">
                    The steps
                        </h2>
 
                        <div className="text-lg text-light-background px-5 text-dark-text py-5 md:px-24 lg:px-0 xl:px-24 xl:pl-0 xl:pr-20">
                            <ul>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-center" className="list-disc"><p className="font-light text-left">Go on to our website, and navigate to a download button. You'll get the opportunity to use Planner X directly through the website, or download it on any device you want.</p></li><br/>
                                <li data-aos="fade-up" data-aos-anchor-placement="top-center" className="list-disc"><p className="font-light text-left">Play around with it, and try adding different tasks with text and the colors you want. Use it either online or offline - the choice is yours!</p></li>
                            </ul>
                        </div>
                        {/* <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                            <a href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Download app</a> <a className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#">Download for PC</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftwareTheStepsOverview