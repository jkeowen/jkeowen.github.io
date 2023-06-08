import React from "react";

const Home = () =>{

  return(
    <div className="m-5">
      <div className="card card-body d-flex align-items-center">
        <h3>Hi, welcome to my portfilio.</h3>
        <div className="d-flex align-items-center">
          <img className="w-25 rounded-circle mx-3" src="./Images/self.jpg" />
          <p>I'm Justin, a web developer passionate about problem solving and intentional design.</p>
        </div>
       
      </div>
    </div>
  )
}

export default Home;