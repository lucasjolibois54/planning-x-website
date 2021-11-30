import * as React from "react"
import '../styles/global.css';

//images
import DevicesImg from "../images/devices.png";

// markup
const AllDevicesHome = () => {
    return (
        <div className=" bg-light-background w-full h-screen">

            <div id="about" className="mb-28 p-0 flex flex-col w-full xl:flex-row md:p-16 md:mb-18">
                <div className="w-full xl:w-full">
                    <img src={DevicesImg} className="pt-6" alt="mockup" />
                </div>
                <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
                    Works on all devices
                    </h2>
                    <p className="text-xl px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                    Our app works on computers, tablets and phones.
Just download it and register or go to your account
Information is synchronized between devices.
The application will tell you about itself and show
the full functionality of the tooltip.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AllDevicesHome
