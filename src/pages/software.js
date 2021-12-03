import * as React from "react"

//components
import Navigation from "../components/navigation";
import Footer from "../components/footer.js"
import SoftwareHero from "../components/softwareHero"
import SoftwareOverview from "../components/softwareOverview"
import SoftwareFeatureCards from "../components/softwareFeatureCards"
import SoftwareHowWorks from "../components/softwareHowWorks"
import SoftwareHotToD from "../components/softwareHotToD"
import SoftwareTheStepsOverview from "../components/softwareTheStepsOverview"
import InstallGuide from "../components/installGuide"

//additional pages

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const Software = () => {
  return (
    <main style={pageStyles}>
      <title>Planner X- about the software</title>
      <Navigation/>
      <SoftwareHero/>
      <SoftwareOverview/>
      <SoftwareHowWorks/>
      <SoftwareFeatureCards/>
      <SoftwareHotToD/>
      <SoftwareTheStepsOverview/>
      <InstallGuide/>
      <Footer/>
    </main>
  )
}

export default Software
