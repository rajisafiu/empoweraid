import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./components/PrivacyPolicy"
import AboutUsSection from "./components/AboutSection"
import TermsConditionspage from "./pages/TermsConditionspage"
import ApplyPage from "./pages/ApplyPage"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/apply" element={<ApplyPage/>} />
      <Route path="privacy" element={<PrivacyPolicy/>} />
      <Route path="about" element={<AboutUsSection/>} />
      <Route path="terms" element={<TermsConditionspage/>} />
    
      
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App