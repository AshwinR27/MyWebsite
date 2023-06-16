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
           <section>
                <div className="intro">
                    <img src="home/ProfileImage.png" />
                    <h1 className="intro-quote">Hey there! I'm Ashwin, a passionate CS Engineer constantly 
                        seeking out exciting opportunities 
                        to expand my skillset and put 
                        them into action.</h1>
                </div>
            
                </section>
                
                <div className="skillset">
                    <section>
                        <h1 className="skillset-quote">These are some of the skills I have accumulated throughout the years.</h1>
                        <div className="skillset-images">
                        
                            {mappedSkills}

                        </div>
                    </section>
                </div>
                
            

            <h1>Etc</h1>
        </div>
    )
}