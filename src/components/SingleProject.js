import React from "react";

const SingleProject = ({name,
                        description,
                        video,
                        image,
                        parentId,
                        dbsParent
                        }) =>{
  return (
    
    <div className="">
      <h3>{name}</h3>
      <div className="accordion accordion-flush" id={parentId}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Demo Video
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent={dbsParent}>
      <div className="accordion-body">
      <iframe width="550" height="315"
      src={video}>
      </iframe>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Description
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent={dbsParent}>
      <div className="accordion-body">
      <p>{description}</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Code Snippet
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent={dbsParent}>
      <div className="accordion-body">
        <img src={image} />
      </div>
    </div>
  </div>
</div>
     
      {/* <p>{description}</p>
      <iframe width="550" height="315"
      src={video}>
      </iframe>
      <img src={image} /> */}
    </div>
  )
}

export default SingleProject;