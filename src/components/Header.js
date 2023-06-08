import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header className="d-flex flex-column align-items-center m-3 p-3 rounded first-color-bg">
      <h1>Justin Keowen</h1>
      <h6>Fullstack Developer</h6>
      <nav>
        <Link className="mx-2" to={'/'} >Home</Link>
        <Link className="mx-2" to={'/projects'}>Projects</Link>
        <Link className="mx-2" to={'/resume'}>Resume</Link>
        <a className="mx-2" href="https://github.com/jkeowen" target="_blank" >Github</a>
        <a className="mx-2" href="https://www.linkedin.com/in/justin-keowen/" target="_blank">LinkedIn</a>
      </nav>
  </header>
  )
}

export default Header;