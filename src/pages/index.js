import * as React from "react"

//components
import Navigation from "../components/navigation";
import HeroSection from "../components/heroSection"
import SubHero from "../components/subHero"
import AllDevicesHome from "../components/allDevicesHome.js"
import FeaturedSection from "../components/featuredSection.js"
import DownloadForFree from "../components/downloadForFree.js"
import Footer from "../components/footer.js"

//additional pages

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
      <title>Planner X- home</title>
      <section className="bg-maybe-dark-background" style={pageStyles}>
    <div className="max-w-screen-2xl y-auto">
      <Navigation/>
      <HeroSection/>
      </div>
        </section>
      <SubHero/>
      <section className="bg-light-background" style={pageStyles}>
    <div className="max-w-screen-2xl y-auto">
      <AllDevicesHome/>
      </div>
        </section>
      <section className="bg-maybe-dark-background" style={pageStyles}>
    <div className="max-w-screen-2xl y-auto">
      <FeaturedSection/>
      <DownloadForFree/>
      <Footer/>
      </div>
        </section>
    </main>
  )
}

export default IndexPage
