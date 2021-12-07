import * as React from "react"
import '../styles/global.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import Image88 from "../images/image88.png";
// markup
const DownloadForFree = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className=" bg-maybe-dark-background w-full h-screen md:pt-24 lg:pt-0 pb-20">

                <div id="about" className="md:mb-28 p-0 flex flex-col-reverse w-full lg:flex-row-reverse md:p-16 md:mb-18 ">
                    <div className="w-full lg:my-auto lg:w-9/12">
                        <img  data-aos="fade-up" src={Image88} className="pt-6" alt="mockup" />
                    </div>
                    <div className="flex text-center flex-col w-full px-3 justify-center lg:w-5/10 lg:text-left xl:pl-10">
                    <div data-aos="fade-up">
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl sm:text-5xl md:text-7xl lg:text-6xl 2xl:text-8xl font-bold text-dark-text py-0">
                           Download now <br /> for free
                        </h2></div>
                        <p className="text-lg text-light-background px-5 text-dark-text py-5 md:px-24 lg:pl-0 xl:pr-20">
                        <div data-aos="fade-up">
                            Our app is available on all devices.
                            You can download it on Appstore and Google Play,
                            or even directly through our website. This works
                            for both computer and smaller devices. You can
                            also use our software through the browser
                             - even offline!
                             </div>
                        </p>
                        <div className="flex justify-center text-center items-center py-0 lg:justify-start">
                            <a data-aos="fade-up" href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Download app</a> <a data-aos="fade-up" className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#">Download for PC</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadForFree