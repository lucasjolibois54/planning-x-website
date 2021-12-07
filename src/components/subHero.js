import * as React from "react"
import '../styles/global.css';

//images
import SubHeroTablet from "../images/Rectangle276(1).png";


// markup
const SubHero = () => {
      return (
            <div className="-mt-5 lg:-mt-1">
                        <section className="bg-maybe-dark-background" >
    <div className="max-w-screen-2xl y-auto">
                  <div className="md:h-12v h-20v bg-maybe-dark-background "></div></div>
                  </section>
                  <section>
    <div className="max-w-screen-2xl y-auto mx-auto">
                  <div className="relative">
                        <div className="w-full xl:w-7/12 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <img src={SubHeroTablet} className="pt-6" alt="mockup" />
                        </div>
                  </div>
                  </div>
                  </section>
                  
                  <section className="bg-light-background" >
    <div className="max-w-screen-2xl y-auto">
                  <div className="h-20v md:h-50v bg-light-background"></div></div></section>
            </div>
      )
}

export default SubHero
