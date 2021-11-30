import * as React from "react"
import '../styles/global.css';


// markup
const HeroSection = () => {
  return (
      <div className=" bg-maybe-dark-background w-full h-screen">
          <div className="text-center pt-56">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-text to-orange-text text-7xl text-center font-semibold ">Your digital <br/> daily reminder</h1>
          <p className="text-p-tag-light text-center mx-96 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</p>
          <div className="mt-5">
          <a href="#" className="py-1 px-4 text-light-button border-2 bg-blue-button border-blue-button rounded-md mr-2 transform motion-safe:hover:scale-110 hover:bg-blue-700 hover:border-blue-700">Try program</a> <a className="ml-2 py-1 px-4 text-light-button border-2 border-light-button hover:bg-gray-200 hover:border-gray-200 hover:text-maybe-dark-background rounded-md" href="#">About us</a>
          </div>
          </div>
    </div>
  )
}

export default HeroSection
