import * as React from "react"
import '../styles/global.css';

//images
import devicesSotware from "../images/devicesSotware.svg";

// markup
const SoftwareOverview = () => {
  return (
    <div>
            <div className=" bg-maybe-dark-background w-full h-screen pt-24 lg:pt-0 pb-16">

                <div id="software-overview-on-software-page" className="mb-18 p-0 flex flex-col-reverse w-full lg:flex-row-reverse md:p-16 md:mb-18 ">
                    <div className="w-full xl:w-9/12">
                        <img src={devicesSotware} className="pt-6" alt="mockup" />
                    </div>
                    <div className="flex text-center flex-col w-full px-3 justify-center xl:w-5/10 lg:text-left xl:pl-10">

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-light-button to-orange-text text-2xl sm:text-3xl md:text-3xl 2xl:text-3xl font-semibold font-sans text-dark-text py-0">
                           <span className="text-blue-button">/</span>{" "}Easy access & overview
                        </h2>
                        <p className="text-md text-light-background font-regular px-5 text-dark-text py-5 xl:px-24 xl:pl-0 xl:pr-20">
                        Assemble all the work to be done in one place, with free acess for any given team member!
                        </p>
                        
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-light-button to-orange-text text-2xl sm:text-3xl md:text-3xl 2xl:text-3xl font-semibold font-sans text-dark-text py-0">
                           <span className="text-blue-button">/</span>{" "}Tidy up your teamwork
                        </h2>
                        <p className="text-md text-light-background font-regular px-5 text-dark-text py-5 xl:px-24 xl:pl-0 xl:pr-20">
                        You don’t need to worry about your team not knowing what to do!
                        </p>

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-light-button to-orange-text text-2xl sm:text-3xl md:text-3xl 2xl:text-3xl font-semibold font-sans text-dark-text py-0">
                           <span className="text-blue-button">/</span>{" "} Collaboration meets knowledge
                        </h2>
                        <p className="text-md text-light-background font-regular px-5 text-dark-text py-5 xl:px-24 xl:pl-0 xl:pr-20">
                        Distribute assignments to your coworkers no matter when or where your are!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftwareOverview
