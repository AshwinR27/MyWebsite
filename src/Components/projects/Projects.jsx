import React from 'react';

import { useLoaderData } from 'react-router-dom';

export default function Projects(){
    const projectArr = useLoaderData()[1]

    const mappedProjectData = projectArr.map(data => (
        
         
                
                <div className='project-details'>
                    <div className='project-title'>
                        <div>{data.name}</div> 
                    </div>
                    <div className='project-desc'>
                        <div className='project-desc-details'>{data.description}</div>
                        <div className='tech-stack'>
                            {data.techStack.map(tech => (<div className='tech-stack-element'>{tech} </div>))}
                        </div>
                    </div>
               
                </div>
       
    
    ))
    return (
        <>
            <div className="projects-quote quote">Here are few of the <span className="cool-color-change">Projects</span> I have worked on</div>
            {mappedProjectData}
        </>
    )
}