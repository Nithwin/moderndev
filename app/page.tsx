// Import necessary components for the Home page layout
import Achievement from "@/components/Achievement"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import TechSkills from "@/components/TechSkills"
import Vision from "@/components/Vision"

// Home component responsible for rendering the main landing page.
// It orchestrates the layout by including various section components.
const Home = () => {
  return (
    // Main container for the entire page, setting background color and minimum height.
    // The 'relative' class is used for positioning child elements.
    <div className="bg-[#1E1E1E] z-0 min-h-dvh relative pb-[4rem]">
    {/* Header component: Navigation bar at the top of the page. */}
    <Header />
    {/* Hero component: The main introductory section with a video background and key messages. */}
    <Hero />
    {/* Achievement component: Displays the lab's key achievements in a carousel format. */}
    <Achievement />
    <Vision />
    <Projects />
    <TechSkills />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home