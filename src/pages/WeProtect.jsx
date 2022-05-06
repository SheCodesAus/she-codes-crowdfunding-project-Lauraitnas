import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//styles
import "./styles.css"

//components
import ProjectCard from "../components/ProjectCard/ProjectCard";

//images
import Protect from "../images/We-protect.png"



function WeProtectPage() {

    //State
    const [projectList, setProjectList] = useState([]);
    // const [categoryList, setCategoryList] = useState([]);


    //Hooks
    const { id } = useParams();

    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}category/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        const filteredData = data.filter((project) => project.category.id === id);
            setProjectList(filteredData);
        console.log(data)
        });
    }, [id]);
    
    // //Loading state
    // if (!projectData) {
    //     return <h3>Loading project...</h3>;
    // }


    //Normal State
    return (
        <div id="project-list">
            {projectList.map((projectData) => {
                return (
                    <ProjectCard 
                    key={`project-${projectData.id}`} 
                projectData={projectData} />
                );
            })}
        </div>
    );
}

export default WeProtectPage;