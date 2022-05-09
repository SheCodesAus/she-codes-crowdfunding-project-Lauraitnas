import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


//styles
import "./styles.css"
import "../components/NavHeader/NavHeader.css"

function UserPage() {

    //State
    const [userData, setUserData] = useState();
    const [pledgeData, setPledgeData] = useState([]);
    const [projectsData, setprojectsData] = useState([]);



    //Hooks
    const { username } = useParams();    
    

       //Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            // const data = await res.json()
            console.log("data", data)
            console.log("usernam", username)

            const filteredData = data.filter((user) => user.username === username)[0];
            console.log("filteredata", filteredData)
            setUserData(filteredData);
        });

        fetch(`${process.env.REACT_APP_API_URL}pledges`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            // const data = await res.json()
            console.log("data", data)
            console.log("usernam", username)

            const filteredData = data.filter((pledge) => pledge.supporter === username);
            setPledgeData(filteredData);
        });

    }, [username]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setprojectsData(data);
        });

    }, []);

    const getProjectName = (projectId) => {
        const project = projectsData.find((project) => project.id === projectId);
        return project ? project.title : "No project name"
    }



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
            <h2 className="user-username">{userData.username}</h2>
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
        <ul>
            {pledgeData.map((pledge, key) => 
            {return (
            <li key={`pledge-${pledge.id}`} >
                $ {pledge.amount} to project {getProjectName(pledge.project_id)}
            </li>
            );
        })
        }
        </ul>
        <div ><Link to="/association" className="nav-button">Create your Forest</Link></div>
        </div>
    </div>
    </>
    );
}

export default UserPage;