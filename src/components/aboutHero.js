import * as React from "react"
import '../styles/global.css';


// markup
const AboutHero = () => {
  return (

<div>
<div id="top-of-the-home-page" className="w-full  bg-center bg-no-repeat bg-cover  bg-maybe-dark-background pb-16">
    <div className="w-full h-screen flex justify-center items-center pt-28">
        <div className="mx-4 text-center text-white mt--1/3  md:left-1/2 right-1/2">
            <h1 className="mt-20 md:mt-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl md:text-7xl text-center font-semibold ">Learn more <br/>about us!</h1>

            <div>
                <div className="flex flex-col justify-center text-center items-center py-0 pb-28">
                    
                <div className="md:w-2/6">
                        <h2 className="font-light text-lg mt-4 text-center sm:pr-0 mb-7">Planner X is a revolutionary free-to-use software made to make your workspace simpler, by helping you manage your team. Scroll down to learn more about us, our company & our software!</h2>
                       </div> 
                       <div className="flex justify-center text-center items-center py-0 mb-5">
                                <a href="https://plannerx.netlify.app/" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Try our app</a> <a className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#meettheteam">About our team</a>
                            </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default AboutHero
