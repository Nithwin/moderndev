import Achievement from "@/components/Achievement"
import Header from "@/components/Header"
import Hero from "@/components/Hero"


const Home = () => {
  return (
    <div className="bg-[#1E1E1E] z-0 min-h-dvh relative pb-[4rem]">
    <Header />
    <Hero />
    <Achievement />
    </div>
  )
}

export default Home