import * as React from "react"
import '../styles/global.css';
import { navigate } from "gatsby"


// markup
const Footer = () => {
    return (
        <div>
            <hr />
            <div className="footer-2 bg-maybe-dark-background pt-6 md:pt-12">
                <div className="container px-4 mx-auto">

                    <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

                        <div className="footer-info lg:w-1/3 md:px-4">
                            <h4 className="text-light-button text-2xl mb-4">thousands of users are using Planner X and making their work life easier.</h4>
                            <p className="text-gray-footer">We have carefully crafted the blocks to suit to every workspace' need.</p>
                            <div className="mt-4">
                                {/* <button className="bg-facebook bg-blue-700 py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
            <span className="fab fa-facebook-f mr-2"></span> Follow
          </button>
          <button className="bg-twitter bg-blue-700 py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
            <span className="fab fa-twitter mr-2"></span> Follow @PlannerX
          </button> */}
                            </div>
                        </div>

                        <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                            <div className="sm:flex">
                                <div className="sm:flex-1">
                                    <h6 className="text-base font-medium text-light-button uppercase mb-2">About</h6>
                                    <div>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Company</a>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Culture</a>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Team</a>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Software</a>
                                    </div>
                                </div>
                                <div className="sm:flex-1 mt-4 sm:mt-0">
                                    <h6 className="text-base font-medium text-light-button uppercase mb-2">What we offer</h6>
                                    <div>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Free software</a>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Good resources</a>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Effective Tools</a>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">24/7 support</a>
                                        <a href="#" className="text-gray-footer py-1 block hover:underline">Other</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
                            <h5 className="text-lg text-light-button font-medium mb-4">Try the software for free</h5>
                            <button className="bg-blue-button text-light-background transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800 rounded-md py-2 px-6 md:px-12 ">Try it out!</button>
                        </div>

                    </div>

                </div>

                <div className="border-t border-solid border-gray-900 mt-4 py-4">
                    <div className="container px-4 mx-auto">

                        <div className="md:flex md:-mx-4 md:items-center">
                            <div className="md:flex-1 md:px-4 text-center md:text-left">
                                <p className="cursor-pointer text-light-button" onClick={() => { navigate("/") }}>&copy; <strong>Planner X</strong></p>
                            </div>
                            <div className="md:flex-1 md:px-4 text-center md:text-right">
                                <a href="#" className="py-2 px-4 text-light-button inline-block hover:underline" onClick={() => { navigate("/termOfService") }}>Terms of Service</a>

                                <a className="cursor-pointer py-2 px-4 text-light-button inline-block hover:underline" onClick={() => { navigate("/privacyPolicy") }}>Privacy Policy</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
