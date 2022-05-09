import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PledgeForm from "../components/PledgeForm/PledgeForm";

//styles
import "./styles.css"


function ProjectPage() {

    //State
    const [projectData, setProjectData] = useState();
    const [ errorMessage, setErrorMessage] = useState();

    //Hooks
    const { id } = useParams();
    const navigate = useNavigate();


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

    
        
    

    const handleDeleteProject = async () => {

        const token = window.localStorage.getItem("token");
        if (!token)return;
    try {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/${id}/`,
        {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`
            },
        }
        );
        console.log("response", response)

        if (!response.ok) {
            const error = `${response.status} ${response.statusText}`;
            setErrorMessage(error)
            console.log("There was an error!", error)
            return //add error
        }
        // const data = await response.json();
        // console.log(data)
        navigate("/");
    } catch (err) {
        console.log(err);
    }
}
    


    
    //Loading state
    if (!projectData) {
        return <h3>Loading project...</h3>;
    }


    //Normal State
    return (
    <>
    {errorMessage ? <h3>The following error occured: {errorMessage}</h3> : ""}

    <div className="project-container">
        <div className="image-container">
            <img className="project-image" src={projectData.image}/>
        </div>
        <div className="project-info">
            <h2>{projectData.title}</h2>
            <h2>{projectData.association.association_name}</h2>
            <h4>{new Date(projectData.date_created).toDateString()}</h4>
            <h3>Our goal is ${projectData.goal}</h3>
            <h3>{projectData.description}</h3>
            <h3> This projects is closing on {new Date(projectData.deadline).toDateString()}</h3>
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
            <div className="project-buttons">  
                {projectData.association.user === window.localStorage.getItem("username") && <div><Link to={`/project/${projectData.id}/edit`} className="nav-button">Edit your project</Link></div>}
                {projectData.association.user === window.localStorage.getItem("username") && <div><button className="nav-button" onClick={handleDeleteProject}>Delete your project</button></div>}
            </div>
        </div>
    </div>
        <h3>Pledges:</h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => 
            {return (
            <li key={`pledge-${pledgeData.id}`} >
                {pledgeData.amount} from {pledgeData.supporter}
            </li>
            );
        })
        }
        </ul>
        <PledgeForm projectId={id}/>
    </>
    );
}

export default ProjectPage;