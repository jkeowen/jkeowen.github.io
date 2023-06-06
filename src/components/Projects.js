import React from "react";
import SingleProject from "./SingleProject";

const Projects = () => {

  return(
    <div class="">
    <h2 class="border-bottom border-dark border-2" >Projects</h2>
    <div>
      <SingleProject name={'Thay In Thay Out'} description={'DESCRIPTION PLACEHOLDER'}
        video={"https://www.youtube.com/embed/ED2pSguRn7U"} image={"./Images/ThayinThayOutCodeSnippet.png"}
        parentId={"projectOne"} dbsParent={"#projectOne"}
      />
      <SingleProject name={'Fitness Tracker'} description={'DESCRIPTION PLACEHOLDER'} 
        video={"https://www.youtube.com/embed/ED2pSguRn7U"}
        image={"./Images/FitnessTrackerDBMockup.png"}
      />
      <SingleProject name={'Strangers Things'} description={'DECRIPTION PLACEHOLDER'}
        video={"https://www.youtube.com/embed/ED2pSguRn7U"}
        image={"./Images/ThayinThayOutCodeSnippet.png"}
      />
      <SingleProject name={'Tic-Tac-Toe'} description={'DESCRIPTION PLACEHOLDER'}
        video={"https://www.youtube.com/embed/ED2pSguRn7U"}
        image={"./Images/TicTacToeSnip.png" }
       />
    </div>
  </div>
  )
}

export default Projects;