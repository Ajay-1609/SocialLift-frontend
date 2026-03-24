import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import Home from "./pages/home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";  
function App() {
  return (
    
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;