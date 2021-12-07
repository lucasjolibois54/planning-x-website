import * as React from "react"
import '../styles/global.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

//images
import Contactimg from "../images/contactimg.svg";

// markup
const ContactUs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div >
            <div className=" bg-maybe-dark-background w-full h-screen pt-24 lg:pt-0 xl:pb-0">

                <div id="meettheteam" className="xl:mb-16 p-0 flex flex-col-reverse w-full xl:flex-row-reverse md:p-16 md:mb-10 ">
                    <div className="w-full lg:pt-20 xl:w-9/12 flex flex-bottom">
                        <img src={Contactimg} className="pt-6" alt="The Team" />
                    </div>
                    <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 xl:text-left xl:pl-10">

                        <h2  data-aos="fade-up" id="contact-us-id" className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-semibold font-sans text-dark-text py-0">
                        Get in touch!
                        </h2>
                        <p  data-aos="fade-up" className=" lg:w-10/12 text-xl font-light text-light-background px-2 text-dark-text py-5 md:px-24 xl:pl-0 xl:pr-20">
                        To request a quote, contact us directly or fill out the form and we will get back to you promptly.
                        </p>
                        <div class="">
          <div  data-aos="fade-up">
            <span class="uppercase text-sm text-gray-600 font-bold"></span>
            <input class="w-9/12 bg-blue-box text-gray-variant mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Enter full Name"/>
          </div>
          <div  data-aos="fade-up" class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold"></span>
            <input class="w-9/12 bg-blue-box text-gray-variant mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Enter your email"/>
          </div>
          <div  data-aos="fade-up" class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold"></span>
            <textarea
              class="w-9/12 h-32 bg-blue-box text-gray-variant mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Write your message"></textarea>
          </div>
          <div  data-aos="fade-up" class="mt-8">

          </div>
        </div>
                        <div  data-aos="fade-up" className="flex justify-center text-center items-center py-0 xl:justify-start">
                            <a href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Send</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ContactUs
