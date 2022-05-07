import React, { useState } from "react";


// Imports
import { useNavigate, Link } from "react-router-dom";

function EditProjectForm({project, categories}) {
  // State
    const [editProjectInfo, setEditProjectInfo] = useState(project);


    console.log("------>", editProjectInfo)

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditProjectInfo((prevEditProjectInfo) => ({
            ...prevEditProjectInfo,
            [id]: value,
        }));
    };

    const navigate = useNavigate();


    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        const updatedProject = {}
        if (project.title !== editProjectInfo.title) updatedProject.title = editProjectInfo.title
        if (project.description !== editProjectInfo.description) updatedProject.description = editProjectInfo.description
        if (project.goal !== editProjectInfo.goal) updatedProject.goal = parseInt(editProjectInfo.goal)
        if (project.image !== editProjectInfo.image) updatedProject.image = editProjectInfo.image
        if (project.category !== editProjectInfo.category) updatedProject.category = editProjectInfo.category
        if (project.date_created !== editProjectInfo.date_created) updatedProject.date_created = new Date(editProjectInfo.date_created).toISOString()
        if (project.deadline !== editProjectInfo.deadline) updatedProject.deadline = new Date(editProjectInfo.deadline).toISOString()

        if (project.title && project.description && project.goal && project.image && project.category && project.date_created && project.deadline) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}projects/${project.id}`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedProject}),
                });
                const data = await res.json()
                console.log(data);

                navigate(`/project/${project.id}`);               
            }catch(err) {
                console.log(err);
            }
        }
    }


    return ( 
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={editProjectInfo.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={editProjectInfo.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input
                    type="number"
                    id="goal"
                    value={editProjectInfo.goal}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="url"
                    id="image"
                    value={editProjectInfo.image}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="is_open">Open:</label>
                <input
                    type="checkbox"
                    id="is_open"
                    value={editProjectInfo.is_open}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date_created">Date created:</label>
                <input
                    type="date"
                    id="date_created"
                    value={editProjectInfo.date_created}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select name="category" id="category" defaultValue={editProjectInfo.category} onChange={handleChange}>
                    {categories.map((category, key) =>  {
                        return(
                        <option key={`${key}-${category.id}`} value={category.slug}>{category.name}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="deadline">Deadline:</label>
                <input
                    type="date"
                    id="deadline"
                    value={editProjectInfo.deadline}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                    Update Project
            </button>
        </form>
        )
    }


export default EditProjectForm