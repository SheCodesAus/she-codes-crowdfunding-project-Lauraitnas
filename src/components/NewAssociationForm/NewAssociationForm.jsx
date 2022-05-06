import React, { useState } from "react";

// Imports
import { useNavigate, Link } from "react-router-dom";

function NewAssociationForm() {
  // State
    const [association, setAssociation] = useState({
    "association_number": "",
	"association_name": "",
	"location": "",
	"forest_image": "",
    });

  // // Hooks
    const navigate = useNavigate();

  // Actions and Helpers
    const handleChange = (event) => {
        const { id, value } = event.target;
        setAssociation((prevAssociation) => ({
        ...prevAssociation,
        [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        
        if (association.association_number && association.association_name && association.location && association.forest_image) {
        try {
            const response = await fetch(
            `${process.env.REACT_APP_API_URL}association/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`
                },
                body: JSON.stringify({
                association_number: association.association_number, 
                association_name: association.association_name,
                location: association.location,
                forest_image: association.forest_image,
                user:window.localStorage.getItem("username"),
                }),
            }
            );
            const data = await response.json();
            console.log(data)
            // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
            navigate(`/`);
        } catch (err) {
            console.log(err);
        }
        }
    };



    const formFields = [
        {
        id: "association_number",
        label: "Association Number",
        placeholder: "Enter registered Association number",
        type: "text",
    },
    {
        id: "association_name",
        label: "Association Name",
        placeholder: "Enter your association's name",
        type: "text",
    },
    {
        id: "location",
        label: "Location",
        placeholder: "Where is the forest located?",
        type: "text",
    },
    {
        id: "forest_image",
        label: "Forest photo",
        placeholder: "Enter a photo of your forest",
        type: "url",
    },
]
    if (!window.localStorage.getItem("token")) {
        return(
            <Link to="/login"> Please login</Link>
        );
}

    return ( 
        <form>
            {formFields.map((field, key) => {
                return (
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            <button type="submit" onClick={handleSubmit}>
                Create Association
            </button>
        </form>
    )
}

export default NewAssociationForm;