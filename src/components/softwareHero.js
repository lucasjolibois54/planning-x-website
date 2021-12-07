import * as React from "react"
import '../styles/global.css';

//images
import SubHeroTablet2 from "../images/hero-img-software.svg";

// markup
const SoftwareHero = () => {
  return (
    <div>
    <div id="top-of-the-home-page" className="w-full  bg-center bg-no-repeat bg-cover  bg-maybe-dark-background pb-16">
        <div className="w-full h-screen flex justify-center items-center pt-28">
            <div className="mx-4 text-center text-white mt--1/3  md:left-1/2 right-1/2">
                <h1 data-aos="fade-up" className="mt-20 md:mt-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl md:text-7xl text-center font-semibold ">Get to know <br/>the software</h1>

                <div>
                    <div className="flex flex-col justify-center text-center items-center py-0 pb-28">
                        
                    <div className="md:w-2/6">
                            <h2 data-aos="fade-up" className="font-light text-lg mt-4 text-center sm:pr-0 mb-7">Our software easen your workflow and makes it easier for you to work and keeping track of the work being done through out the day art the office. Additionally it’ll also give your a clear strucutre of the tasks to be done as well as an overview.</h2>
                           </div> <div className="md:w-4/6"> <img data-aos="fade-up" src={SubHeroTablet2} className="pt-6" alt="mockup" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default SoftwareHero
