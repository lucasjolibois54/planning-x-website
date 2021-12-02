import * as React from "react"
import '../styles/global.css';

//images
import DevicesImg2 from "../images/Rectangle7654.png";

// markup
const FeaturedSection = () => {
    return (
        <div className=" bg-maybe-dark-background w-full h-screen pt-24 lg:pt-0 pb-20">

            <div id="about" className="mb-28 p-0 flex flex-col-reverse w-full xl:flex-row md:p-16 md:mb-18">
                <div className="w-full xl:w-9/12">
                    <img src={DevicesImg2} className="pt-6" alt="mockup" />
                </div>
                <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold text-dark-text py-0">
                        Featured to help you with time planning
                    </h2>
                    <p className="text-xl text-light-background px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                        We have created a convenient network for work management. Here you can communicate with your team members, set tasks for them, propose events, plans & more. It will be easier for you to see which coworkers are working on a task. Your team will find it easier to plan their time when all the tasks are ahead of them. And it will be easier for you to control and help them.
                    </p>
                    <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                        <a href="https://plannerx.netlify.app/" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Download app</a> <a className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="https://plannerx.netlify.app/">Download for PC</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection
