import * as React from "react"

//components
import Navigation from "../components/navigation";
import HeroSection from "../components/heroSection"
import UsAbout from "../components/usAbout";
import Footer from "../components/footer.js"

//additional pages

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const AboutUs = () => {
  return (
    <main style={pageStyles}>
      <title>Planner X</title>
      <Navigation/>
      <HeroSection/>
      <UsAbout/>
      <Footer/>
    </main>
  )
}

export default AboutUs
