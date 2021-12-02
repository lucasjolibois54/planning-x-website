import * as React from "react"
import '../styles/global.css';

//images
import SubHeroTablet2 from "../images/hero-img-software.svg";


// markup
const SubHeroSoftware = () => {
      return (
            <div className="-mt-5 lg:-mt-1">
                  <div className="h-20v md:h-50v bg-maybe-dark-background"></div>
                  <div className="relative">
                        <div className="w-full xl:w-7/12 absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <img src={SubHeroTablet2} className="pt-6" alt="mockup" />
                        </div>
                  </div>
                  <div className="h-30v md:h-50v bg-maybe-dark-background"></div>
            </div>
      )
}

export default SubHeroSoftware
