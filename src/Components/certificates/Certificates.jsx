import React from "react";

import {
    useSearchParams,
    useLoaderData
} from "react-router-dom"
import getCertificates from "../../firebase"

export async function loader(){
    const certificates = await getCertificates()
    return certificates
}


export default function Certificates(){
    const certificatesArr = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    
    console.log(searchParams.get("year"))

    const yearFilter = searchParams.get("year")

    function handleFilterChange(key, value){
        setSearchParams(prevParam => {
            if(value == null){
                prevParam.delete(key)
            }else{
                prevParam.set(key, value)
            }
            return prevParam
        })
    }

    const filteredCertificates = yearFilter ? certificatesArr.filter(certi => certi.date.slice(-4) === yearFilter) : certificatesArr
 

    const mappedCertificatesData = filteredCertificates.map(cer => (
            <div key={cer.id}>
                <figure>
                    <img src={cer.imageURL} />
                    <figcaption>
                        <h1>{cer.name}</h1>
                        <h2>{cer.date.slice(0,-5)}<span>{cer.date.slice(-5)}</span></h2>
                        <a href={cer.verifyAt}><h3>verify link &#128279;</h3></a>
                        
                    </figcaption>
                </figure>

            </div>
        )
    )

        

    return(
        <section>
        
            <div className="filter-year-buttons">
                <h1>Filter My <span className="cool-color-change">Certificates</span> by year</h1>
                <div className="actual-filter-buttons">
                <button
                onClick={() => handleFilterChange("year","2020")}
                className={`${yearFilter === '2020'? "selected": "rest"} button-transition`} >
                    2020
                </button>
                <button
                onClick={() => handleFilterChange("year","2021")}
                className={`${yearFilter === '2021'? "selected": "rest"} button-transition`} >
                    2021
                </button>
                <button
                onClick={() => handleFilterChange("year","2022")}
                className={`${yearFilter === '2022'? "selected": "rest"} button-transition`}>
                    2022
                </button>
                <button
                onClick={() => handleFilterChange("year","2023")}
                className={`${yearFilter === '2023'? "selected": "rest"} button-transition`} >
                    2023
                </button>
                
                {yearFilter && <button
                onClick={() => handleFilterChange("year",null)}
                className="year-clear " >
                    Clear filter
                </button>}
                </div>
            </div>
            
           
                <div className="certificates-container">{mappedCertificatesData}</div>
            
        </section>
    )
}