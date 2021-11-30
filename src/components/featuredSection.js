import * as React from "react"
import '../styles/global.css';

//images
import DevicesImg from "../images/devices.png";

// markup
const FeaturedSection = () => {
    return (
        <div className=" bg-maybe-dark-background w-full h-screen">

            <div id="about" className="mb-28 p-0 flex flex-col w-full xl:flex-row md:p-16 md:mb-18">
                <div className="w-full xl:w-full">
                    <img src={DevicesImg} className="pt-6" alt="mockup" />
                </div>
                <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black font-sans text-dark-text py-0">
                        Featured to help you with time planning
                    </h2>
                    <p className="text-xl text-light-background px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                        We have created a convenient social network. Here you can communicatewith your family members, set tasks for them, propose events, plan weekends and holidays. It will be easier for you to see which family member is free tomorrow and will be able to cook dinner. Children will find it easier to plan their time when all the tasks are ahead of them. And it will be easier for you to control and help them.
                    </p>
                    <div className="flex justify-center text-center items-center py-0 xl:justify-start">
                        <a href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Download app</a> <a className="ml-2 py-1 px-4 text-black-button border-2 border-black-button hover:bg-light-button hover:text-dark-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#">Download for PC</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection