import * as React from "react"
import '../styles/global.css';



// markup
const SoftwareHero = () => {
  return (
      <div>
          <div id="top-of-the-home-page" className="w-full h-100v bg-center bg-no-repeat bg-cover  bg-maybe-dark-background pb-16">
    <div className="w-full h-screen flex justify-center items-center">
        <div className="mx-4 text-center text-white absolute top-1/2  md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2">
        <h1 className="md:mt-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl md:text-7xl text-center font-semibold ">Get to know  <br/>  the software</h1>
            <h2 className="font-light text-lg mt-4 md:ml-20 md:w-96 md:mr-20 sm:pr-0 mb-7">Our software easen your workflow and makes it easier for you to work and keeping track of the work being done through out the day art the office. Additionally it’ll also give your a clear strucutre of the tasks to be done as well as an overview.</h2>
            <div>
                {/* <a href="" class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                    Our blog
                </a>
                <a href="" class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                    Shop
                </a> */}

                            <div className="flex justify-center text-center items-center py-0">
                                <a href="https://plannerx.netlify.app/" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-800 hover:border-gray-800">Try our app</a> <a className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:text-light-background hover:border-blue-button  transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#meettheteam">About our team</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftwareHero
