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
            <h2>{projectData.title}</h2>
            <h4>Support the {projectData.association.association_name}</h4>
            <h4>Posted on {new Date(projectData.date_created).toDateString()}</h4>
            <p>{projectData.description}</p>
            <div className="project-buttons">  
                {projectData.association.user === window.localStorage.getItem("username") && <div><Link to={`/project/${projectData.id}/edit`} className="nav-button">Edit your project</Link></div>}
                {projectData.association.user === window.localStorage.getItem("username") && <div><button className="nav-button" onClick={handleDeleteProject}>Delete your project</button></div>}
            </div>
        </div>
        <div className="project-info">
            <div>
            <h3>This project's goal is </h3><h1> $ {projectData.goal}</h1>
            <h3> This projects is closing on {new Date(projectData.deadline).toDateString()}</h3>
            </div>
            <div>
                <h3>People who already supported us:</h3>
                <div  className="pledge-list">
                    {projectData.pledges.map((pledgeData, key) => 
                    {return (
                    <h4 className="pledges" key={`pledge-${pledgeData.id}`} >
                        ${pledgeData.amount} from {pledgeData.supporter}
                    </h4>
                    );
                })
                }
                </div>
            </div>
        </div>
    </div>
        <PledgeForm projectId={id}/>
    </>
    );
}

export default ProjectPage;