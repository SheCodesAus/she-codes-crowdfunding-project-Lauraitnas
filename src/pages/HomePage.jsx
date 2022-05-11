import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//styles
import "./styles.css"
//components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import AssociationCard from "../components/AssociationCard/AssociationCard";
import HeaderImage from "../components/HeaderImage/HeaderImage";

function HomePage() {

    //State
    const [projectList, setProjectList] = useState([]);

    //Action and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            const latestProject = data.splice(0, 3)
            setProjectList(latestProject);

        });
    }, []);

    //State
    const[associationList, setAssociationList] = useState([]);

    //Action and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}association`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        setAssociationList(data);
        });
    }, []);
    

    
    return (
    <div>
        <HeaderImage/>
        <div className="project_home">
            <div className="subtitles">
            <h1>Latest projects</h1>
            <h2>Woods and Forests are essential for Life</h2>
            <h3>For People. For Wildlife. For Life</h3>
            </div>
            <div id="project-list">
                {projectList.map((projectData) => {
                    return (
                        <ProjectCard 
                        key={`project-${projectData.id}`} 
                    projectData={projectData}/>
                    );
                })}
            </div>
            <Link to="/projects/">
            <div className="btn"><button className="donate_button" type="button">CHECK ALL PROJECTS</button></div>
            </Link>
        </div>
        <div className="association_home">
            <div className="subtitles">
            <h1>Visiting our Forests</h1>
            </div>
            <div id="association-list">
                {associationList.map((associationData) => {
                    return (
                        <AssociationCard 
                        key={`association-${associationData.id}`} 
                    associationData={associationData} />
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default HomePage;