import React from "react";
import data from "../skillset";

export default function Home(){

   
    const mappedSkills = data.map(skill => {
        return(
        <figure className="skillset-logo" key={skill.id}>
            <img src={skill.imageURL} />
            <figcaption className="tooltip">{skill.name}</figcaption>
        </figure>
        )
    }
        
    )


    return(
        <div className="home-container">
           
                <div className="intro">
                    <img src="home/ProfileImage.png" />
                    <quote className="intro-quote">Hey there! I'm Ashwin, a passionate CS Engineer constantly 
                        seeking out exciting opportunities 
                        to expand my skillset and put 
                        them into action.</quote>
                </div>
            
        
                   
                <div className="skillset">
                    <quote className="skillset-quote">These are some of the skills I have accumulated throughout the years.</quote>
                    <div className="skillset-images">
                     
                        {mappedSkills}

                    </div>
                </div>
            
            

            <h1>Etc</h1>
        </div>
    )
}