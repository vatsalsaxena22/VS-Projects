import { Container } from 'react-bootstrap';
import logo from "../assets/logo-transparent.png"
import { Github, Linkedin, Facebook, Instagram } from 'react-bootstrap-icons';


export default function Footer() {
  return (
    <footer className="p-3 border-top">
      <div className='container d-flex gap-5 justify-content-between align-items-center flex-wrap'>
        <div>
          <img src={logo} className='py-4' style={{width: "60px"}} alt="logo" />
          <div>
            <h2>VS Projects</h2>
            <p>A Showcase of all my projects.</p>
          </div>
          <div className="logos fs-3">
            <a href="https://github.com/vatsalsaxena22" target='_blank' className='me-3'><Github/></a>
            <a href="https://www.linkedin.com/in/vatsalsaxena/" target='_blank' className='me-3'><Linkedin/></a>
            <a href="https://www.facebook.com/vatsalya.saxena.3/" target='_blank' className='me-3'><Facebook/></a>
            <a href="https://www.instagram.com/vatsal.saxena/" target='_blank' className='me-3'><Instagram/></a>
          </div>
        </div>
        <div className='d-flex flex-column'>
            <h4>My Tech Trio</h4>
            <a href="https://vatsalsaxena22.github.io/" target='_blank'>VS Portfolio</a>
            <a href="/">VS Projects</a>
            <a href="#">VS Works</a>
        </div>
        <div className='d-flex flex-column'>
            <h4>Menu</h4>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
      </div>
      <Container className="text-center pt-5">
        <p>© {new Date().getFullYear()} VS Projects. All rights reserved. Developed & Designed by <a target='_blank' style={{lineBreak: "anywhere"}} href="https://vatsalsaxena22.github.io/">Vatsal Saxena</a></p>
      </Container>
    </footer>
  );
}
