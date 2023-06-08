import React from "react";

const Home = () =>{

  return(
    <div className="m-5">
      <div className="card card-body d-flex align-items-center">
        <h3>Hi, welcome to my portfilio.</h3>
        <div className="d-flex align-items-center">
          <img className="square rounded-circle mx-3 " src="./Images/self.jpg" />
          <p>I'm Justin, a web developer passionate about problem solving and intentional design. On 
          this site you will find some projects I have done as well as some key highlights about them. Thanks for stopping by! </p>
        </div>
       
      </div>
    </div>
  )
}

export default Home;