import React, { useState } from "react";
import { Link } from "react-router-dom"

function PledgeForm({ projectId }) {

    //State
    const token = window.localStorage.getItem("token");
    const [pledge, setPledge] = useState({
        amount: "",
    });

    //Actions and Helpers 
    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    const hadnleSubmit = async(event) => {
        event.preventDefault();
        try {
            const res = await 
            fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
                method:"post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    project_id: projectId,
                    amount: pledge.amount,
                    anonymous: pledge.anonymous,
                    supporter: window.localStorage.getItem("username"),
                }),
            });
            const data = await res.json()
            console.log(data);
        }catch(err) {
            console.log(err);
        }
    }

    if (!token) {
        return(
            <Link to="/login"> Please login</Link>
        );
    }

    return (
        <div className="form">
        <form>
            <div className="form-item">
            <label htmlFor="amount">Amount:</label>
            <input
                type="number"
                id="amount"
                placeholder="Enter pledge amount"
                onChange={handleChange}
            />
            </div>
            <div className="form-item">
            <label htmlFor="anonymous">Anonymous:</label>
            <select className="form-item" id="anonymous" onChange={handleChange}>
                <option value="">--Please select an option--</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>
            </div>
            <div className="form-item">
            <button type="submit"  onClick={hadnleSubmit}>
            Pledge
            </button>
            </div>
        </form>
        </div>
        );
}

export default PledgeForm