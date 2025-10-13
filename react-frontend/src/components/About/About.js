import { useState } from 'react';
import React from 'react';
import styles from './About.module.css'; 


function UnifiedSkillsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  
  const skillsData = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      name: "Symfony", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"
    },
    {
      name: "CakePHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cakephp/cakephp-original.svg"
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    }
  ];

        const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData, ...skillsData, ...skillsData, ...skillsData];

        return (
        <div className={styles.sliderContainer}>
        <div 
                className={`${styles.sliderTrack} ${isPaused ? styles.paused : ''}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
        >
                {duplicatedSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                <div className={styles.skillIcon}>
                <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`}
                        width={80} 
                        height={80}
                        fetchpriority={"high"}
                />
                </div>
                <div className={styles.skillName}>
                {skill.name}
                </div>
                </div>
                ))}
        </div>
        </div>
        );
        }


const About = () => {
return (
 <section className="section content-section" id='about'>
    <div className={styles.sectionContainer}>
        <div className="about-content">
            <h2 className="section-title">O mnie</h2>
            <p>
                    Jestem PHP Developerem z pasją do tworzenia czystego i wydajnego kodu.<br></br>
                    Na co dzień rozwijam aplikacje webowe, skupiając się na solidnych fundamentach backendowych.<br></br>
                    Obecnie poszerzam swoje kompetencje o <strong style={{ color: "orange" }}>React</strong> i <strong style={{ color: "orange" }}>Dockera</strong>, 
                    bo wierzę, że pełny stack development <br></br> pozwala tworzyć lepsze, kompleksowe rozwiązania.<br></br>
                    W wolnych chwilach eksperymentuję z nowymi technologiami i szukam optymalnych rozwiązań 
                    dla <br></br> wyzwań programistycznych.
            </p>
               

        <h3>Technologie które wykorzystuję:</h3>
                <UnifiedSkillsSlider />
            <div className={styles.projectsPreview}>
                    <h3>Aktualnie pracuję nad:</h3>
                    <p>
                            Dwoma projektami które wkrótce będę mogła zaprezentować. 
                            To dla mnie okazja do zastosowania nowych umiejętności w praktyce.
                    </p>
                    <p>
                            To portfolio też jest częścią mojej nauki - łączę tu PHP z nowoczesnym frontendem!
                    </p>
            </div>
        </div>
        </div>
</section>
);
};


export default About;