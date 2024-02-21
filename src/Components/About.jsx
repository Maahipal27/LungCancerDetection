import React from "react";
const About = () => {
    return ( 
        <div className="about">

<div className=" flex-col flex  md:flex-row justify-between items-center h-full py-5 ">
      
      <img src="./images/human.jpg" className="w-1/1 h-1/1  " />
      
        <h1 className="text-black text-center text-4xl font-medium py-7 font-sans">More about Lung Cancer</h1>
       </div>
       <div className="para">
        <p className="text-black  md:text-base py-3 font-sans ">
            Causes and Risk Factors:
            <br />
            - Highlight common causes such as smoking, exposure to carcinogens, and genetic factors.
            <br />
            - Discuss risk factors that increase the likelihood of developing lung cancer.
          </p>

       </div>
       </div>
        
     );
}
 
export default About;