import React from 'react';
import styles from './About.module.css'; 

const About = () => {
return (
 <section className="section content-section" id='about'>
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
                <div className={styles.skills}>
                
                    <div className={styles.skillItem}>
                            <strong>PHP</strong>
                            <div className={styles.skill}>Laravel, Symfony</div>
                    </div>
                    <div className={styles.skillItem}>
                            <strong>Bazy Danych</strong>
                            <div className={styles.skill}>MySQL, PostgreSQL</div>
                    </div>
                    <div className={styles.skillItem}>
                            <strong>Frontend</strong>
                            <div className={styles.skill}>JavaScript, React</div>
                    </div>
                    <div className={styles.skillItem}>
                            <strong>Narzędzia</strong>
                            <div className={styles.skill}>Docker, Git, REST API</div>
                    </div>
                    </div>
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
        </section>
);
};


export default About;