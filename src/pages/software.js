import * as React from "react"

//components
import Navigation from "../components/navigation";
import Footer from "../components/footer.js"
import AboutHero from "../components/aboutHero"
import SoftwareOverview from "../components/SoftwareOverview"
import SoftwareFeatureCards from "../components/softwareFeatureCards"

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
      <AboutHero/>
      <SoftwareOverview/>
      <SoftwareFeatureCards/>
      <Footer/>
    </main>
  )
}

export default Software
