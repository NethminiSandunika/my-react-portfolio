import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonals from './components/testimonals/Testimonals';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'></main>
    <Home />
    <About />
    <Services />
    <Resume />
    <Portfolio />
    <Testimonals />
    <Blog />
    <Contact />
    </>
  )
}

export default App;
