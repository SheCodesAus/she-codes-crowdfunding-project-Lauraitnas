import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
            <h2 >{associationData.association_name}</h2>
            <h3 >{associationData.location}</h3>
            </div>
        </div>
        <div id="project-list">
            {projectList.map((projectData) => {
                return (
                    <ProjectCard 
                    key={`project-${projectData.id}`} 
                projectData={projectData} />
                );
            })}
        </div>
    </>
    );
}

export default AssociationPage;