import * as React from "react"
import '../styles/global.css';
import { navigate } from "gatsby"

//images
import DevicesImg from "../images/devices.png";

// markup
const AllDevicesHome = () => {
    return (
        <div className=" bg-light-background w-full h-screen pt-20 md:pt-26 pb-20">

            <div id="about" className="md:pb-32 p-0 flex flex-col-reverse w-full pt-10 xl:flex-row md:p-16 md:mb-18">
                <div className="w-full xl:w-full">
                    <img src={DevicesImg} className="pt-6" alt="mockup" />
                </div>
                <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold text-dark-text py-0">
                        Works on all devices
                    </h2>
                    <p className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                        Our app works on computers, tablets and phones.
                        Just download it and register or go to your account
                        Information is synchronized between devices.
                        The application will tell you about itself and show
                        the full functionality of the tooltip.
                    </p>
                    <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                        <a className=" cursor-pointer py-1 px-4 text-light-button border-2 bg-black-button border-black-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800"  onClick={()=>{navigate("/software#install-guide-section")}}>Install guide</a> <a className="cursor-pointer ml-2 py-1 px-4 text-black-button border-2 border-black-button hover:bg-gray-800 hover:border-gray-800 hover:text-light-button transform transition duration-300 ease-in-out  hover:scale-110 rounded-md"  onClick={()=>{navigate("/aboutUs")}}>About us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllDevicesHome
