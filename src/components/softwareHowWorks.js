import * as React from "react"
import '../styles/global.css';

import Image88 from "../images/WorksSof.svg";
// markup
const SoftwareHowWorks = () => {
    return (
        <div>
            <div className=" bg-maybe-dark-background w-full h-screen pt-10 lg:pt-0 pb-20">

                <div  id="tips-about-page" className="mb-28 p-0 flex flex-col-reverse w-full xl:flex-row-reverse md:p-16 md:mb-18 ">
                    <div className="w-full xl:w-9/12">
                        <img src={Image88} className="pt-6" alt="mockup" />
                    </div>
                    <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl sm:text-4xl md:text-6xl 2xl:text-8xl font-bold text-dark-text py-0">
                    A bit about how<br /> it works
                        </h2>
 
                        <div className="text-lg text-light-background px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                            <ul>
                                <li className="list-disc"><p className="font-light text-left">The application is a SPA SaaS web application and it easen your workflow with your team. Through the app you can distribute tasks while also adding a timeframe & more.</p></li><br/>
                                <li className="list-disc"><p className="font-light text-left">Through Planner X, your coworkers will be able to mark their tasks as done when they have finished it, which will give you a clear overview of what has been done throughout the day.</p></li>
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

export default SoftwareHowWorks