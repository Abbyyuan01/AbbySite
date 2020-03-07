import React from 'react';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Blog from './components/blog'
import Projects from './components/projects'
import './App.css';


function App() {
  return (
      <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
      <div id="colorlib-main">
        <Introduction></Introduction>
        <About></About>
        <Timeline></Timeline>
        <Blog/>
        <Projects/>
          </div>
      </div>
    </div>
  );
}

export default App;
