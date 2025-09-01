import Achievement from "@/components/Achievement"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import TechSkills from "@/components/TechSkills"
import Vision from "@/components/Vision"



const Home = () => {
  return (
    <div className="bg-[#1E1E1E] z-0 min-h-dvh relative pb-[4rem]">
    <Header />
    <Hero />
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