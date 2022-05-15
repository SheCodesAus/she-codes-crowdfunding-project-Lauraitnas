import React from "react";
import { Navigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";

//style
import "./App.css";

//components
import Nav from "./components/Nav/Nav";
import NavHeader from "./components/NavHeader/NavHeader";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";

//pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import AssociationPage from "./pages/AssociationPage";
import UserPage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";
import NewProjectPage from "./pages/NewProjectPage";
import NewUserPage from "./pages/NewUserPage";
import NewAssociationPage from "./pages/NewAssociation";
import EditProfilePage from "./pages/EditUserPage";
import EditProjectPage from "./pages/EditProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Router>
      <div>
        <NavHeader/>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users/register" element={<NewUserPage />} />
          <Route path="/users/edit_user" element={<EditProfilePage />} />
          <Route path="/association" element={<NewAssociationPage />} />
          <Route path="/projects/new_project" element={<NewProjectPage/>} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/project/:id/edit" element={<EditProjectPage/>} />
          <Route path="/association/:user" element={<AssociationPage/>} />
          <Route path="/projects/" element={<ProjectsPage/>} />
          <Route path="/users/:username" element={<UserPage/>} />
          <Route path="/category/:slug" element={<CategoryPage/>} />
          <Route path="/contact-us/" element={<ContactPage/>} />
          <Route path="/404" element={<NotFoundPage/>} /> 
          <Route path="/*" element={<Navigate replace to="/404"/>} />
        </Routes>
        <Footer/>
        <FooterBottom/>
      </div>
    </Router>

  );
}

export default App;
