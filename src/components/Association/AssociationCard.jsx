import React from "react";
import { Link } from "react-router-dom";

//styles
import "./Association.css"

function AssociationCard({ associationData }) {
    return (
    <div className="association-card">
        <Link to={`/association/${associationData.user}`}>
            <img src={associationData.forest_image} alt="association image"/>
        </Link>
            <h3 className="association_name">{associationData.association_name}</h3>
        
    </div>
    );
}

export default AssociationCard;