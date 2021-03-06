import * as React from "react";
import '../styles/global.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// markup
const AboutCompany = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
 <div id="About-the-company" className=" pb-10 lg:pb-36 xsm:pl-50 xsm:pr-20 pl-5 pr-5 md:pl-36 md:pr-36 lg:pl-10 lg:pr-10 bg-maybe-dark-background">
            {/* <div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-semibold font-sans text-gray-variant py-0 text-center">
                    More about the
                    <span className="text-orange-text"> company!</span>
                </h2></div> */}
            <div
                className="
        font-sans
          mb-0
          pt-20
          flex flex-col
          content-center
          justify-center
          justify-items-center
          text-off-white text-3xl
          md:flex-row
          bg-transparent
          
        "
            >
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                    {/* <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-gray-variant md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">03</span></h2> */}
                    < h2  data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text md:text-5xl md:text-left">Learn more about the company</h2>
                    {/* <h2 className="  text-sm text-gray-variant md:text-left md:leading-10  md:text-lg">
                    Nam accumsan ornare purus id tempus. Fusce ac diam auctor lorem vehicula lacinia a at libero. Nulla volutpat nunc vitae sapien gravida tempus. Fusce rutrum tincidunt.
                    </h2> */}

                </div>
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                    {/* <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-gray-variant md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">04</span></h2> */}
                    < h2  data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-gray-variant  md:text-3xl md:text-left">01 Organize and plan</h2>
                    <h2  data-aos="fade-up" className="  text-sm text-gray-variant md:text-left md:leading-10 md:text-lg">
                    With our software you can easily organize and plan with multiple tasks. Here you can set deadlines and who is responible to complete the differnet tasks. 
                    </h2>
                </div>
            </div>

            <div
                className="
                font-sans
                mb-0
                mt-20
                flex flex-col
                content-center
                justify-center
                justify-items-center
                text-off-white text-3xl
                md:flex-row
                bg-transparent
        "
            >
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pr-10 md:w-7/12 lg:w-5/12 lg:mr-0 md:mr-10">
                    {/* <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-gray-variant md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">03</span></h2> */}
                    < h2  data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-gray-variant  md:text-3xl md:text-left">02 Get an overview</h2>
                    <h2  data-aos="fade-up" className="  text-sm text-gray-variant md:text-left md:leading-10 md:text-lg">
                    With our software its easy to see what the tasks are that needs to be done and wich tasks is done. That info can be useful to check if people have completed their tasks. 
                    </h2>

                </div>
                <div className="w-full  pt-0 pb-20 pr-0 text-center w-100% lg:pl-10 md:w-7/12 lg:w-5/12 lg:ml-0 md:ml-10">
                    {/* <h2 className="pl-8 text-4xl font-semibold pb-10 pr-10 text-center  text-gray-variant md:text-5xl"><span className="bg-orange-text p-3 pl-4 pr-4 rounded-full">04</span></h2> */}
                    < h2  data-aos="fade-up" className=" text-2xl pb-1 font-semibold text-gray-variant  md:text-3xl md:text-left">03 Easy to use</h2>
                    <h2  data-aos="fade-up" className="  text-sm text-gray-variant md:text-left md:leading-10 md:text-lg">
                    Our software is modern and easy to understand because we have focused alot on creating a user friendly design. Everyone can use it, and so can you.
                    </h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutCompany