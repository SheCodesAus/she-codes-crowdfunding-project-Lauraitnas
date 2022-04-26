import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function AssociationPage() {

    //State
    const [associationData, setAssociationData] = useState();

    //Hooks
    const { id } = useParams();

    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}association/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setAssociationData(data);
            });
    }, [id]);
    
    //Loading state
    if (!associationData) {
        return <h3>Loading Association...</h3>;
    }


    //Normal State
    return (
    <>
        <h2>{associationData.user}</h2>
        <h3>We are in: {associationData.location}</h3>
    </>
    );
}

export default AssociationPage;