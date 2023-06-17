import React from "react";
// import { useLoaderData } from "react-router-dom";


// export function loader(){
//     const pdfSource = "https://docs.google.com/gview?url=https:"+
//                         "//firebasestorage.googleapis.com/v0/b/profile-4c24e.appspot.com/o/Ashwin%20Prabhu_Resume.pdf?"+
//                             "alt=media&token=f4cf41b2-298c-4bd1-b931-e5a6afa202fb&embedded=true"
//     return pdfSource
// }

function Resume() {
    // const loadedResume = useLoaderData()
    return ( 
    
    <div className="resume-container">
    {/* <iframe src= {loadedResume}></iframe> */}
    <embed src="resume/Ashwin_Prabhu_Resume.pdf" width="450" height="630" 
    type="application/pdf"></embed>
    <div className="resume-download">
        <h1>Click here to download my <span className="cool-color-change">Resume</span></h1>
        <a target=" _blank" href="resume/Ashwin_Prabhu_Resume.pdf"><button className="button-transition">Download ⇓</button></a>
    </div>
    
    </div>
    );
}

export default Resume;