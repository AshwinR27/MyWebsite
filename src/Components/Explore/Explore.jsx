import React from 'react';

import { useLoaderData } from 'react-router-dom';




function Explore() {
    const educationArr = useLoaderData()

    const [explore, setExplore] = React.useState(false)

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

export default Explore;