import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import AboutUs from "./components/Aboutus";
import ContactUs from "./components/ContactUs"; // Ensure this exists

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                
              </>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
