import React from "react";

const Resume = () =>{

  return(
    <div className="px-3">
      <h1>RESUME</h1>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div>
        <h2><u>Skills</u></h2>
        <div className="d-flex bg-dark justify-content-center rounded" >
          <ul className="card card-body mx-4 my-2">
            <h3><u>Languages</u></h3>
            <div className="mx-4">
              <li className="my-1">JavaScript</li>
              <li className="my-1">HTML</li>
              <li className="my-1">CSS</li>
              <li className="my-1">C#</li>
              <li className="my-1">SQL</li>
            </div>
          </ul>
          <ul className="card card-body mx-4 my-2">
            <h3><u>Techs</u></h3>
            <div className="mx-4">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>Boostrap</li>
              <li>.Net</li>
              <li>Unity</li>
            </div>
          </ul>
          <ul className="card card-body mx-4 my-2">
            <h3><u>Soft Skills</u></h3>
            <div className="mx-4">
              <li>Agile/SCRUM</li>
              <li>Teamwork and Collaboration</li>
              <li>Communication</li>
              <li>Fast Learner</li>
              <li>Thrives in a fast paced enviromnet </li>
              <li>Self-Starter</li>
              <li>Passionate</li>
            </div>
          </ul>
          </div>
        </div>
      </div>
    <div className="mt-5">
      <h2><u>Work History</u></h2>
      <div>
        <ul>
          <li>Market Gardener at Loup Farms</li>
          <ul>
            <li>Cultivated, harvested, prepared, and sold produce on a small vegetable farm </li>
            <li>Managed the weekly farm stand, including inventory, payments, customer service</li>
            <li>Built and maintained positive relationships with customers, which led to an increase in sales and rate of repeat customers, thus making the farm profitable for the first time in six years  </li>
          </ul>
          <li>Owner and Grower of Fresh 48 Farm</li>
          <ul>Recognized and seized upon market trends regarding microgreens and mushrooms, leading to successful micro-farm </ul>
          <ul>Independently learned and developed skills in growing microgreens, including varietal selection, planting, harvesting, packing, and marketing </ul>
          <ul>Effectively marketed products to local restaurant resulting in increase in sales 20% increase in sales</ul>
        </ul>
      </div>
    </div>
    <div>
      <h2><u>Education</u></h2>
      <div>
        <ul>
          <li>Fullstack Academy Web Development Bootcamp</li>
            <ul>
              <li>Learned PERN stack development</li>
              <li>Did a variety of projects ranging from vanilla JS apps, React Frontend Apps, Express Server Apps, to Fullstack Applications</li>
            </ul>
          <li>Some College</li>
            <ul>
              <li>Nanosystems Engineering at Louisiana Tech University</li>
              <li>Horticulture at Louisiana State University</li>
            </ul>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Resume;