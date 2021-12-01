import * as React from "react"
import '../styles/global.css';


// markup
const HeroSection = () => {
  return (
      <div>
          <div className="w-full h-screen bg-center bg-no-repeat bg-cover  bg-maybe-dark-background pb-16">
    <div className="w-full h-screen flex justify-center items-center">
        <div className="mx-4 text-center text-white">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-4xl md:text-7xl text-center font-semibold ">Your digital <br/> daily reminder</h1>
            <h2 className="font-light text-lg mt-10 md:ml-96 md:w-96 md:mr-96 mb-12">Covid -19 is a world known virus that has affected millions of people. Wearing a mask has been our number one solution to stay safe and protect others. Why not invest in a high quality mask with focus in breathability, safety & design?</h2>
            <div>
                {/* <a href="" class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                    Our blog
                </a>
                <a href="" class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                    Shop
                </a> */}

<a href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform transition duration-300 ease-in-out hover:scale-110 hover:bg-light-button hover:text-dark-background hover:border-light-button">Try our App</a> <a className="ml-2 py-1 px-4 text-light-button  border-2 border-light-button hover:border-blue-button hover:text-light-button transform transition duration-300 ease-in-out  hover:scale-110 rounded-md" href="#"> More about us</a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default HeroSection
