import React from "react";
import Button from "./Button";

const SingleProject = ({name,
                        description,
                        video,
                        image,
                        twoId,
                        twoTarget,
                        threeId,
                        threeTarget
                        }) =>{


  return (

    <div className="card card-body my-5 ">
    <h4 className="mt-3">{name}</h4>
    <div className="card card-body project-card ">
          <iframe  
            src="https://youtube.com/embed/P2L1ovXS6hM">
          </iframe>
        </div>
      <p>
      <Button text={"Description"} target={twoTarget} />
    </p>
      <div className="collapse" id={twoId}>
        <div className="card card-body project-card">
          <p>{description}</p>
        </div>
      </div>
      <p>
      <Button text={"Highlight "} target={threeTarget} />
    </p>
      <div className="collapse" id={threeId}>
        <div className="card card-body project-card">
        
          <img className="" src={image} /> 
        </div>
      </div>
    </div>    
  )
}

export default SingleProject;