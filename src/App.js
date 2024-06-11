import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Project from "./components/Projects/Project";
import Competance from "./components/Competances/Competance";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Project />
      <Competance />
      <Portfolio />
      <Footer/>
     
    </div>
  );
}

export default App;
