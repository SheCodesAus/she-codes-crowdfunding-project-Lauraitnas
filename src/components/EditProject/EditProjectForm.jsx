// import React, { useState } from "react";

// // Imports
// import { useNavigate, Link } from "react-router-dom";

// function EditProjectForm({projects}) {
//   // State
//     const [editProjectInfo, setEditProjectInfo] = useState({
//         title: "",
//         description: "",
//         goal: "",
//         image:"",
//         is_open: "",
//         date_created:"",
//         category:"",
//         deadline:"",
//     });

//   // // Hooks
//     const navigate = useNavigate();

//   // Actions and Helpers
//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setEditProjectInfo((prevEditProjectInfo) => ({
//         ...prevEditProjectInfo,
//         [id]: value,
//         }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const token = window.localStorage.getItem("token");
//         if (!token)return;

    
//     // Is user logged in and have they put something in all fields?
//     if (editProjectInfo.title && editProjectInfo.description && editProjectInfo.goal && editProjectInfo.image && editProjectInfo.is_open && editProjectInfo.date_created && editProjectInfo.is_open && editProjectInfo.category && editProjectInfo.deadline) {
//         try {
//             const response = await fetch(
//             `${process.env.REACT_APP_API_URL}projects/${projects}`,
//             {
//                 method: "put",
//                 headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': `Token ${token}`,
//                 },
//                 body: JSON.stringify({
//                     title: editProjectInfo.title,
//                     description: editProjectInfo.description,
//                     goal: editProjectInfo.goal,
//                     image: editProjectInfo.image,
//                     is_open: editProjectInfo.is_open,
//                     data_created: editProjectInfo.date_created,
//                     deadline: editProjectInfo.deadline,
//                     associaton: window.localStorage.getItem("username"),
//                     category: editProjectInfo.category,
//                 }),
//             }
//             );
//             const data = await response.json();
//             console.log(data)
//             // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
//             navigate(`/`);
//         } catch (err) {
//             console.log(err);
//         }
//         }
//     };


//     const fields = [

//             {
//                 id: "title",
//                 label: "Title",
//                 placeholder: "Update title",
//                 type: "text",
//                 options: [],
//             },
//             {
//                 id: "description",
//                 label: "Description",
//                 placeholder: "Update description",
//                 type: "text",
//                 options: [],
//             },
//             {
//                 id: "goal",
//                 label: "Goal",
//                 placeholder: "Update goal",
//                 type: "text",
//                 options: [],
//             },
//             {
//                 id: "image",
//                 label: "Image",
//                 placeholder: "Update image",
//                 type: "url",
//                 options: [],
//             },
//                 {
//                 id: "is_open",
//                 label: "Is open",
//                 placeholder: "Enter if project open",
//                 type: "checkbox",
//                 options: [],
//             },
//             {
//                 id: "date_created",
//                 label: "Date created",
//                 placeholder: "Update date",
//                 type: "date",
//                 options: [],
//             },
//             {
//                 id: "category",
//                 label: "Category",
//                 placeholder: "Update category",
//                 type: "select",
//                 options: data
//             },
//             {
//                 id: "deadline",
//                 label: "deadline",
//                 placeholder: "Enter closing date",
//                 type: "date",
//                 options: [],
//             },
//         ]
        
    
    
//     if (!window.localStorage.getItem("token")) {
//     return(
//     <Link to="/login"> Please login</Link>
//     );
//     }



//     return ( 
//         <form>
//             {formFields.map((field, key) => {
//                 return (
//                 <div key={`${key}-${field.id}`}>
//                     <label htmlFor={field.id}>
//                         {field.label}
//                     </label>
//                     <input
//                         type={field.type}
//                         id={field.id}
//                         placeholder={field.placeholder}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 )
//             })}
//             <button type="submit" onClick={handleSubmit}>
//                 Update Now
//             </button>
//         </form>
//     )
// }

// export default EditProjectForm;