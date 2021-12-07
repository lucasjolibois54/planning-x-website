import * as React from "react"
import '../styles/global.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import DownloadSteps from "../images/how-to-4.png";
// markup
const InstallGuide = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className=" bg-maybe-dark-background w-full h-screen pt-10 lg:pt-0 pb-10">

                <div className="mb-28 p-0 flex flex-col-reverse w-full lg:flex-row-reverse md:p-16 md:mb-18 ">
                    <div className="w-full lg:w-9/12 lg:text-left">
                        <img data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-out" src={DownloadSteps} className="pt-6 lg:pr-20" alt="The Team" />
                    </div>
                    <div className="md:mr-7 flex text-center flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left xl:pl-10">

                        <h2  data-aos="fade-up" data-aos-anchor-placement="top-center" className="lg:text-right  md:mr-7 px-2 text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-5xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-7xl font-semibold text-dark-text py-0">
                        How to download
                        </h2>
                        <p   data-aos="fade-up" data-aos-anchor-placement="top-center" className="text-xl font-light text-light-background px-2 text-dark-text py-5 md:mr-7 xl:pl-0  lg:text-right">
                        On this page there is a search bar where you can see our <a className="color-purple-text" href="#"> websites </a> address. On the right side of the bar there is some icons that you can click on. Press on the icon that is illustrated and shown on the right side
                        </p>
                        <div className="flex justify-center text-center items-center py-0 px-2 lg:justify-end md:mr-7 ">
                            <a data-aos="fade-up" data-aos-anchor-placement="top-center" href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">About the software</a> <a data-aos="fade-up" data-aos-anchor-placement="top-center" className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#">About the company</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstallGuide