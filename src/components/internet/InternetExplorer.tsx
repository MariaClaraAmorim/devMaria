import React from 'react';
import './styles.css';
import Header from '../header/header';
import HomeComponent from '../home';
import About from '../about';
import Skills from '../skills';
import Projects from '../projects';
import Contact from '../contact';
import Footer from '../footer';


const InternetExplorerInterface: React.FC = () => {

  return (
    <div className="browser-window">
      <div className="top-bar">
        <button className="back-button">⏪</button>
        <input type="text" className="url-bar" value="https://devmaria.bohr.io/" readOnly />
        <div className="icons">
          <button className="search-icon">🔍</button>
          <button className="home-icon">🏠</button>
        </div>
      </div>
      <div className="content-frame">
        <>
          <Header />
          <HomeComponent />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />

        </>
      </div>
    </div>
  );
};

export default InternetExplorerInterface;
