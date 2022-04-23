import React from "react";

//data
import {allProjects} from "../data";

//components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    
    return (
    <div id="project-list">
        {allProjects.map((projectData) => {
            return (
                <ProjectCard 
                key={`project-${projectData.id}`} 
            projectData={projectData} />
            );
        })}
    </div>
    );
}

export default HomePage;