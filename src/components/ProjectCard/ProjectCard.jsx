import React from "react";
import { Link } from "react-router-dom";

//styles
import "./ProjectCard.css";

function ProjectCard({ projectData }) {

    
    return (
    <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
            <img src={projectData.image} alt="project image"/>
        </Link>
            <h3 className="project-title">{projectData.title}</h3>
            <h3>{projectData.association.association_name}</h3>
            <h3 className="project-goal">${projectData.goal}</h3>
            <button>Support</button>
            <h4 className="project-date_created">{new Date(projectData.date_created).toDateString()}</h4>
        
    </div>
    );
}

export default ProjectCard;