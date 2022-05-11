import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//styles
import "./styles.css"


//components
import ProjectCard from "../components/ProjectCard/ProjectCard";


function AssociationPage() {

    //State
    const [associationData, setAssociationData] = useState();


    //Hooks
    const { user } = useParams();

    //Actions and Helpers
    useEffect(() => {
        console.log(user)
        fetch(`${process.env.REACT_APP_API_URL}association/${user}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setAssociationData(data);
            });
    }, [user]);

     //State
    const [projectList, setProjectList] = useState([]);


     //Action and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        const filteredData = data.filter((project) => project.association.user === user);
        setProjectList(filteredData);
        console.log(data)
        });
    }, []);

    
    //Loading state
    if (!associationData) {
        return <h3>Loading Association...</h3>;
    }


    //Normal State
    return (
    <>
        <div className="association-image">
            <img src={associationData.forest_image} alt="association image"/>
            <div className="association_info">
            <h1 className="association-name" >{associationData.association_name}</h1>
            <h2 className="association-location">{associationData.location}</h2>
            </div>
        </div>
        <h1>Our current projects</h1>
        {projectList && projectList.length > 0 
        ? <div id="project-list">
            {projectList.map((projectData) => {
                return (
                    <ProjectCard 
                    key={`project-${projectData.id}`} 
                projectData={projectData} />
                );
            })}
            </div>
        : <h3>There are no current projects.</h3>
        }
        {associationData.user === window.localStorage.getItem("username") && <div className="btn"><Link to="/projects/new_project/" className="nav-button">Create a new Project</Link></div>}
        
    </>
    );
}

export default AssociationPage;