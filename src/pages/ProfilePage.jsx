import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


//styles
import "./styles.css"
import "../components/NavHeader/NavHeader.css"

function UserPage() {

    //State
    const [userData, setUserData] = useState();
    const [projectData, setProjectData] = useState();


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

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data);
            });
    }, [id]);
    
    //Loading state
    if (!userData) {
        return <h3>Loading profile...</h3>;
    }


    //Normal State
    return (
    <>
    <div className="user-image">
        <img src={userData.image}/>
        <div className="user-info">
            <h2>{userData.username}</h2>
        </div>
    </div>
    <div className="user-main-div">
        <div className="user-card">
            <img src={userData.image}/>
            <Link to={`${userData.social}`} className="follow-button">Follow {userData.username}</Link>
            <p className="user-bio">{userData.bio}</p>
        </div>
        <div className="user-pledges">
            <h2>My Pledges:</h2>
                    {/* //FUNZIONA QUASI - MOSTRA PLEDGES BY USER*/}
        {/* <ul>
            {projectData.pledges.map((pledgeData, key) => 
            {return (
            <li key={`pledge-${pledgeData.id}`} >
                {pledgeData.amount} to project {pledgeData.project_id}
            </li>
            );
        })
        }
        </ul> */}
        <div ><Link to="/association" className="nav-button">Create your Forest</Link></div>
        </div>
    </div>
    </>
    );
}

export default UserPage;