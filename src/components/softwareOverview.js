import * as React from "react"
import '../styles/global.css';

//images
import devicesSotware from "../images/devicesSotware.svg";

// markup
const SoftwareOverview = () => {
  return (
    <div>
            <div className=" bg-maybe-dark-background w-full h-screen pt-24 lg:pt-0 pb-20">

                <div className="mb-28 p-0 flex flex-col-reverse w-full xl:flex-row-reverse md:p-16 md:mb-18 ">
                    <div className="w-full xl:w-9/12">
                        <img src={devicesSotware} className="pt-6" alt="mockup" />
                    </div>
                    <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-light-button to-orange-text text-5xl sm:text-6xl md:text-3xl 2xl:text-3xl font-semibold font-sans text-dark-text py-0">
                           <span className="text-blue-button">/</span>Easy access & overview
                        </h2>
                        <p className="text-md text-light-background font-regular px-5 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                        Assemble all the work to be done in one place, with free acess for any given team member!
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

export default SoftwareOverview
