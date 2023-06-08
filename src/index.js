import React from "react";
import {createRoot} from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Home from "./components/Home";

const App = () =>{
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <App/>  
  </HashRouter>
    )