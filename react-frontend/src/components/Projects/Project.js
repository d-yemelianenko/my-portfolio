import React from 'react';
import styles from './Project.module.css'; 

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with React showcasing my projects and skills.',
        link: '#',
    },
    {
        title: 'Meal Plan App',
        description: 'A full-stack e-commerce application with user authentication and payment integration.',
        link: '#',
    },
    {
        title: 'TaskManager App',
        description: 'A full-stack e-commerce application with user authentication and payment integration.',
        link: '#',
    },
    // Add more projects as needed
];

const Project = () => (
    <section className="section content-section" id="projects">

        <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
                <div key={idx} className={styles.projectDescription} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '300px' }}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            ))}
        </div>
    </section>
);

export default Project;