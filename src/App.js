import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//style
import "./App.css";

//components
import Nav from "./components/Nav/Nav";
import NavHeader from "./components/NavHeader/NavHeader";

//pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import AssociationPage from "./pages/AssociationPage";
import UserPage from "./pages/ProfilePage";
import WeProtectPage from "./pages/WeProtect";
import NewProjectPage from "./pages/NewProject";


function App() {
  return (
    <Router>
      <div>
        <NavHeader/>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projects/new_project/" element={<NewProjectPage/>} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/association/:user" element={<AssociationPage/>} />
          <Route path="/projects/" element={<ProjectsPage/>} />
          <Route path="/users/:id" element={<UserPage/>} />
          <Route path="/category/we_protect" element={<WeProtectPage/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
