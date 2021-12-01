import * as React from "react"
import '../styles/global.css';

//images
import SubHeroTablet from "../images/Rectangle276(1).png";


// markup
const SubHero = () => {
  return (
<div>
<div className="h-50v bg-maybe-dark-background"></div>
<div className="relative">
<div className="w-full xl:w-6/12 absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={SubHeroTablet} className="pt-6" alt="mockup" />
                </div>
                </div>
<div className="h-50v bg-light-background"></div>
</div>
  )
}

export default SubHero
