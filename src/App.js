import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./helpers/ScrollToTop";
import CoinList from "./components/CoinList";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/coin/:id" element={<CoinList/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
