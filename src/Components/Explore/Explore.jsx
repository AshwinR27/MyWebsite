import React from 'react';
import {getEducation} from "../../firebase"
import { useLoaderData } from 'react-router-dom';


export async function loader(){
    const education = await getEducation()
    return education
}


function Explore() {
    const educationArr = useLoaderData()

    const mappedEducationData = educationArr.map(data => (
       
            <div className='education-details'>
                <h1>{data.course}</h1>
                <h2>{data.instituteName}</h2>
                <h3>{data.yearRange}</h3>
                <h4>{data.score}</h4>
            </div>
            
    ))

    return ( 
        <section>
            <div className='education-container' >
                {mappedEducationData}
            </div>
        </section>
     );
}

export default Explore;