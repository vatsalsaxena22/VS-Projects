import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
