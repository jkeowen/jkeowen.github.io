

const projectData = () => {
  const data = [
   {
      name: "Thay In Thay Out",
      repo: "https://github.com/DungeonsAndDevelopers/ThayInThayOut",
      description: `Thay In Thay Out is a fantasy themed e-commerce site that "sells" spells on demand. The frontend is built using React and Bootstrap. It uses a Node.js backend with 
      Express.js for the server and PostgreSQL for the database. \n One thing that was challenging that I would like to highlight is the process of getting the data from the D&D API we were using. The spells in the API didn't have an index so we had 
      to fetch them by name, so first we had to fetch a list of spell names and then fetch the spell individually using each name.`,
      videoPath: "https://youtube.com/embed/P2L1ovXS6hM",
      imagePath: "./Images/ThayinThayOutCodeSnippet.png",
      twoId: "cTwoProjectOne",
      twoTarget: "#cTwoProjectOne",
      threeId: "cThreeProjectOne",
      threeTarget: "#cThreeProjectOne"
    },
   
  ]
  return data
}

export default projectData;