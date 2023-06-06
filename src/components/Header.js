import React from "react";

const Header = () => {
  return(
    <header className="d-flex flex-column align-items-center m-3 p-3 border">
      <h1>Justin Keowen</h1>
      <h6>Fullstack Developer</h6>
      <nav>
        <a className="mx-2" href="./index.html" >Home</a>
        <a className="mx-2" href="./project.html">Projects</a>
        <a className="mx-2" href="./resume.html">Resume</a>
        <a className="mx-2" href="https://github.com/jkeowen" target="_blank" >Github</a>
        <a className="mx-2" href="https://www.linkedin.com/in/justin-keowen/" target="_blank">LinkedIn</a>
      </nav>
  </header>
  )
}

export default Header;