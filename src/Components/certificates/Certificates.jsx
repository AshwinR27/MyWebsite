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
    

    const mappedCertificatesData = certificatesArr.map(cer => (
            <div key={cer.id}>
                <img src={cer.imageURL} />
                <h1>{cer.name}</h1>
                <h1>{cer.date}</h1>
                <h1>{cer.verifyAt}</h1>

            </div>
        )
    )
    return(
        <div className="certificates-container">{mappedCertificatesData}</div>
        
    )
}