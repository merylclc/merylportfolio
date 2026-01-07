import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Presentation />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
