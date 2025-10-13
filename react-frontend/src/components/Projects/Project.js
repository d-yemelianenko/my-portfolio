import { useState } from 'react';
import styles from './Project.module.css'; 

const projects = [
    {
        title: "Task Manager",
        description: "Symfony aplikacja z planowaną AI integration. Inteligentne zarządzanie zadaniami w Docker environment.",
        link: "#",
        screenshots: [
            "/images/projects/task-manager.png"
        ]
    },
    {
        title: "Meal Manager", 
        description: "CakePHP system do kontroli wagi i planowania posiłków. W trakcie migracji do Docker.",
        link: "#",
        screenshots: [
            "/images/projects/diet-planner.png"
        ]
    },
    {
        title: "Portfolio",
        description: "Full-stack React + CakePHP w Docker. Demonstruje moje skills i projekty w action.",
        link: "#",
        screenshots: [
            "/images/projects/my-portfolio.png"
        ]
    }
];


const Project = () => {
      const [currentProject, setCurrentProject] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => 
            (prev + 1) % projects[currentProject].screenshots.length
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => 
            (prev - 1 + projects[currentProject].screenshots.length) % 
            projects[currentProject].screenshots.length
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const selectProject = (projectIndex) => {
        setCurrentProject(projectIndex);
        setCurrentSlide(0); // Reset do pierwszego slajdu przy zmianie projektu
    };
    return (
    
    <section className="section content-section" id="projects"> 
    <h2 className="section-title">Projects</h2> 
        <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
                <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                        View Project
                    </a>
                </div>
            </div>
        ))}
        </div>

          {/* SEKCJA 2: Slider ze screenshotami */}
            <div className={styles.sliderSection}   
                role="region"
                aria-label={`Galeria screenshotów projektu ${projects[currentProject].title}`}
                aria-live="polite">
                <h3 className={styles.sliderTitle}>
                    Screenshots: <span className={styles.projectName}>{projects[currentProject].title}</span>
                </h3>
                
                {/* Tabs do wyboru projektu */}
                <div className={styles.projectTabs}>
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            className={`${styles.tab} ${currentProject === index ? styles.activeTab : ''}`}
                            onClick={() => selectProject(index)}
                        >
                            {project.title}
                        </button>
                    ))}
                </div>

            

                         {/* Slider container */}
                <div className={styles.sliderContainer}>
                    <button 
                        className={styles.sliderButton} 
                        onClick={prevSlide}
                        aria-label="Poprzedni screenshot">
                        ‹
                    </button>    
                    
                    <div className={styles.slide}>
                         <img 
                        src={projects[currentProject].screenshots[currentSlide]} 
                        alt={`${projects[currentProject].title} - screenshot ${currentSlide + 1} z ${projects[currentProject].screenshots.length}`}
                        width={788}
                        height={343}
                        fetchpriority={"high"}
                        loading={currentProject === 0 && currentSlide === 0 ? "eager" : "lazy"}
                        decoding="async"
                        />
                        <div className={styles.slideInfo}>
                            <span>
                                {currentSlide + 1} / {projects[currentProject].screenshots.length}
                            </span>
                        </div>
                    </div>
                    <button 
                        className={styles.sliderButton} 
                        onClick={nextSlide}
                        aria-label="Następny screenshot"
                    >
                        ›
                    </button>
                </div>


                 <div className={styles.dotsContainer}>
                {projects[currentProject].screenshots.map((_, index) => (
                    <button
                    key={index}
                    className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Przejdź do screenshotu ${index + 1} z ${projects[currentProject].screenshots.length}`}
                    aria-current={currentSlide === index ? "true" : "false"}
                    />
                ))}
                </div>
            </div>
        </section>
);
};

export default Project;