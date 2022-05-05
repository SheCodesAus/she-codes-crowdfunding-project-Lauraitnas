import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
    
    //Loading state
    if (!associationData) {
        return <h3>Loading Association...</h3>;
    }


    //Normal State
    return (
    <>
        <h2>{associationData.username}</h2>
        <img src={associationData.forest_image} alt="association image"/>
        <h3>We are in: {associationData.location}</h3>
    </>
    );
}

export default AssociationPage;