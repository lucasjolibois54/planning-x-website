import * as React from "react"
import '../styles/global.css';

//images
import Steps5 from "../images/download-steps-one.svg";
// markup
const SoftwareHotToD = () => {
    return (
        <div>
            <div id="install-guide-section" className="w-full  bg-center bg-no-repeat bg-cover  bg-maybe-dark-background pb-16">
                <div className="w-full h-screen flex justify-center items-center pt-28">
                    <div className="mx-4 text-center text-white mt--1/3  md:left-1/2 right-1/2">
                        <h1 className="md:mt-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl md:text-7xl text-center font-semibold ">How to download <br/>the app offline</h1>

                        <div>
                            <div className="flex justify-center text-center items-center py-0 pb-20">
                                <div className="md:w-4/6">
                                    <img src={Steps5} className="pt-6" alt="mockup" />
                                    <h2 className="font-light text-lg mt-4 text-left sm:pr-0 mb-7">Our app works on computers, tablets and phones. Just download it and register or go to your account Information is synchronized between devices. The application will tell you about itself and show the full functionality of the tooltip.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftwareHotToD
