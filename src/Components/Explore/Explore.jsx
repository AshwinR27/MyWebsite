import React from 'react';

import { useLoaderData } from 'react-router-dom';




export default function Explore() {
    const educationArr = useLoaderData()[0]

    const [explore, setExplore] = React.useState(true)

    const toggleExplore = () => {
        setExplore(prevExplore => !prevExplore)
    }

    const mappedEducationData = educationArr.map(data => (

            
            <div className='education-details'>
                <h1>{data.course}</h1>
                <h2>{data.instituteName}</h2>
                <h3>{data.yearRange}</h3>
                <h4>{data.score}</h4>
            </div>
      
    ))

    return ( 

        <div className="exploration">
            <button className="explore-btn  button-transition" onClick={toggleExplore}>
                {explore?   <span>Hide &#11165;</span>:<span>Explore more &#11167;</span>}
            </button> 
       
            <div className='education-container' >
                {explore? mappedEducationData:""}
            </div>
       </div>
     );
}

