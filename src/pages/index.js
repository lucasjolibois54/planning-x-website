import * as React from "react"

//components
import HeroSection from "../components/heroSection"
import SubHero from "../components/SubHero"
import AllDevicesHome from "../components/allDevicesHome.js"
import FeaturedSection from "../components/featuredSection.js"
import DownloadForFree from "../components/DownloadForFree.js"
import Footer from "../components/footer.js"
// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Planner X</title>
      <HeroSection/>
      <SubHero/>
      <AllDevicesHome/>
      <FeaturedSection/>
      <DownloadForFree/>
      <Footer/>
    </main>
  )
}

export default IndexPage
