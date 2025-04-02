import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import PortfolioDescription from "./components/PortfolioDescription/PortfolioDescription";
import Footer from './components/Footer/Footer';
import "./App.css";
import "./index.css";

function AppContent() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDescription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
