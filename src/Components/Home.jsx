import React from "react";
import data from "../skillset";
import { Outlet, Link } from "react-router-dom";

export default function Home(){
    const [explore, setExplore] = React.useState(false)

    const toggleExplore = () => {
        setExplore(prevExplore => !prevExplore)
    }
   
    const mappedSkills = data.map(skill => {
        return(
        <figure className="skillset-logo" key={skill.id}>
            <img src={skill.imageURL} />
            <figcaption className="tooltip">{skill.name}</figcaption>
        </figure>
        )
    }
        
    )

    React.useEffect

    return(
        <main>
           <section>
                <div className="intro">
                    <img src="home/ProfileImage.png" />
                    <h1 className="intro-quote">Hey there! I'm <span className="cool-color-change">Ashwin</span>, a passionate <span className="cool-color-change">CS Engineer</span> constantly 
                        seeking out exciting opportunities 
                        to expand my skillset and put 
                        them into action.</h1>
                </div>
            
                </section>
                <section>
                    <div className="skillset full-bleed">
                        
                            <h1 className="skillset-quote">These are some of the <span className="cool-color-change">Skills</span> I have accumulated throughout the years.</h1>
                            <div className="skillset-images">
                            
                                {mappedSkills}

                            </div>
                        
                    </div>
            </section>
                
            {explore ? 
                <div className="exploration">
                    <Link to=".">
                        <button className="explore-btn  button-transition" onClick={toggleExplore}>Hide &#11165;</button>
                    </Link>
                    <Outlet />
            </div>
            
            :
            
            <div className="exploration">
                <Link to="/explore">
                    <button className="explore-btn  button-transition" onClick={toggleExplore}>Explore more &#11167;</button>
                </Link>

               
            </div>}
            
        </main>
    )
}