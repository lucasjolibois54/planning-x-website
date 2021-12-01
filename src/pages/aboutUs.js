import * as React from "react"

//components
import Navigation from "../components/navigation";
import UsAbout from "../components/usAbout";
import Footer from "../components/footer.js"
import AboutCompany from "../components/AboutCompany.js"
import AboutHero from "../components/aboutHero"
import ContactUs from "../components/contactUs.js"

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
      <AboutHero/>
      <UsAbout/>
      <AboutCompany/>
      <ContactUs/>
      <Footer/>
    </main>
  )
}

export default AboutUs
