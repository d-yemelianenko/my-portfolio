//import logo from './logo.svg';
import React from 'react';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import './App.css';
import Project from './components/Projects/Project.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <div className="App">
            <Header />
            <About />
            <Project />
            <Contact />
    </div>
  );
}

export default App;
