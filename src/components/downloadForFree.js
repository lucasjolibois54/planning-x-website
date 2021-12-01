import * as React from "react"
import '../styles/global.css';

import Image88 from "../images/image88.png";
// markup
const DownloadForFree = () => {
    return (
        <div>
            <div className=" bg-maybe-dark-background w-full h-screen pt-24 lg:pt-0 pb-20">

                <div id="about" className="mb-28 p-0 flex flex-col-reverse w-full xl:flex-row-reverse md:p-16 md:mb-18 ">
                    <div className="w-full xl:w-9/12">
                        <img src={Image88} className="pt-6" alt="mockup" />
                    </div>
                    <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
                            Download now <br /> for free
                        </h2>
                        <p className="text-xl text-light-background px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                            Our app works on computers, tablets and phones.
                            Just download it and register or go to your account
                            Information is synchronized between devices.
                            The application will tell you about itself and show
                            the full functionality of the tooltip.
                        </p>
                        <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                            <a href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Download app</a> <a className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#">Download for PC</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadForFree