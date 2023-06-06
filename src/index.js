import React from "react";
import {createRoot} from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () =>{
  return(
    <>
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects />} />
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