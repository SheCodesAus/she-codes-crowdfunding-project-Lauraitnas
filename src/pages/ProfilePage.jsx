import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UserPage() {

    //State
    const [userData, setUserData] = useState();

    //Hooks
    const { id } = useParams();

    //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setUserData(data);
            });
    }, [id]);
    
    //Loading state
    if (!userData) {
        return <h3>Loading profile...</h3>;
    }


    //Normal State
    return (
    <>
        <h2>{userData.username}</h2>
        <h3>{userData.bio}</h3>
        <img src={userData.image}/>
    </>
    );
}

export default UserPage;