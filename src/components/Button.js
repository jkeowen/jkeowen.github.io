import React, {useState} from "react";

const Button = ({text, target}) =>{
  const [buttonColor, setButtonColor ] = useState("second-color-bg");
  const buttonColorHandler = () =>{
    if(buttonColor === "third-color-bg") setButtonColor("second-color-bg")
    else setButtonColor("third-color-bg");
  }
  return(
    <button className={`btn ${buttonColor} mt-4`} onClick={buttonColorHandler} type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls="demo-video-collapse">
        {text}
    </button>
  )
};

export default Button;



