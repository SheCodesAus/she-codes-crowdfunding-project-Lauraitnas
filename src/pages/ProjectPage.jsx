import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProjectPage() {

    //State
    const [projectData, setProjectData] = useState();

    //Hooks
    const { id } = useParams();

    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data);
            });
    }, [id]);
    
    //Loading state
    if (!projectData) {
        return <h3>Loading project...</h3>;
    }


    //Normal State
    return (
    <>
        <h2>{projectData.title}</h2>
        <img src={projectData.image}/>
        <h2>{projectData.association.association_name}</h2>
        <h3>Created at: {projectData.date_created}</h3>
        <h3>Our goal is ${projectData.goal}</h3>
        <h3>{projectData.description}</h3>
        <h3> This projects is closing on {projectData.deadline}</h3>
        <h3>{`Status: ${projectData.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => 
            {return (
            <li>
                {pledgeData.amount} from {pledgeData.supporter}
            </li>
            );
        })
        }
        </ul>
    </>
    );
}

export default ProjectPage;