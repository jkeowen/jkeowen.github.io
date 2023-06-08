import React, {useState, useEffect} from "react";
import SingleProject from "./SingleProject";
import projectData from "../data/projectsData";

const Projects = () => {

  const [ dataSet, setDataSet ] = useState([]);

  useEffect(()=>{
    setDataSet(projectData());
  },[]);
  console.log(dataSet);
 
  return(
    <div className="d-flex flex-column align-items-center">
    <h2 className="" ><u>Projects</u></h2>
    <div>
    {
      dataSet.map((data, index)=> {
        return(
          <SingleProject key={index} name={data.name} description={data.description} video={data.videoPath} image={data.imagePath}
            twoId={data.twoId} twoTarget={data.twoTarget} threeId={data.threeId} threeTarget={data.threeTarget}
          />
        )
      })
    }
    </div>
  </div>
  )
}

export default Projects;