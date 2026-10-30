import Navbar from './Components/Navar.jsx'
import HeroSection from './Components/HeroSection.jsx'
import AboutSection from './Components/AboutSection.jsx'
import TeamSection from './Components/TeamSection.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default App
