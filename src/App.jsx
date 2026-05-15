import { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Router>

        {/* SCROLL TO TOP */}
        <ScrollToTop />

        <Header />

        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div
                className="spinner-border"
                style={{ color: "var(--main-color)" }}
                role="status"
              >
                <span className="visually-hidden">
                  Loading...
                </span>
              </div>
            </div>
          }
        >

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </Suspense>

        <Footer />

      </Router>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;