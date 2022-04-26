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
// import AssociationPage from "./pages/AssociationPage";


function App() {
  return (
    <Router>
      <div>
        <NavHeader/>
        <Nav/>
        <Routes>
          <Route path="/project/:id" element={<ProjectPage />} />
          {/* <Route path="/association/:id" element={<AssociationPage />} /> */}
          <Route path="/projects/" element={<ProjectsPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
