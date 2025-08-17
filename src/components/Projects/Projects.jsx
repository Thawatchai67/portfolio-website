// src/components/Projects/Projects.jsx
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
