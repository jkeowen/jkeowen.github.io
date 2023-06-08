import React from 'react';
import { Link } from "react-router-dom";
 
const Footer = () =>{

  return(
    <footer className="d-flex w- flex-column align-items-center  p-3 first-color-bg">
      <h6>jkeowen@gmail.com</h6>
      <nav>
        <Link className="mx-2" to={'/'} >Home</Link>
        <Link className="mx-2" to={'/projects'}>Projects</Link>
        <Link className="mx-2" to={'/resume'}>Resume</Link>
        <a className="mx-2" href="https://github.com/jkeowen" target="_blank" >Github</a>
        <a className="mx-2" href="https://www.linkedin.com/in/justin-keowen/" target="_blank">LinkedIn</a>
      </nav>
  </footer>
  )
}

export default Footer;