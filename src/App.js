
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Press from "./pages/Press";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";

import { HashRouter as Router, Route, Routes } from "react-router-dom";





function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Bio" element={<Bio />} />
          <Route path="/Press" element={<Press />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
