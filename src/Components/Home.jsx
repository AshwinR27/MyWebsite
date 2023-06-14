import React from "react";

export default function Home(){
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
                    <figure className="skillset-logo">
                        <img src="skillset/python.png" />
                        <figcaption className="tooltip">Python</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/java.png" />
                        <figcaption className="tooltip">Java</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/cpp.png" />
                        <figcaption className="tooltip">C++</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/html-5.png" />
                        <figcaption className="tooltip">HTML5</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/css-3.png" />
                        <figcaption className="tooltip">CSS3</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/js.png" />
                        <figcaption className="tooltip">JavaScript</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/ts.png" />
                        <figcaption className="tooltip">Typescript</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/react.png" />
                        <figcaption className="tooltip">React</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/flask.png" />
                        <figcaption className="tooltip">Flask</figcaption>
                    </figure>
                    <figure className="skillset-logo">
                        <img src="skillset/db.png" />
                        <figcaption className="tooltip">SQL/NoSQL</figcaption>
                    </figure>
                </div>
            </div>
            
            <h1>Etc</h1>
        </div>
    )
}