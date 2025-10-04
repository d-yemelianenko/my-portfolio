import React from 'react';
import styles from './About.module.css'; 

const About = () => {
  return (
   <section className="section content-section" id='about'>
    <div className="about-content">
        <h2 className="section-title">About Me</h2>
          <p>
          Z wykształcenia inżynier, z zamiłowania programistka! 
          Moja przygoda z PHP zaczęła się od akademickich projektów, 
          a teraz przeradza się w prawdziwą pasję.
        </p>
        
        <p>
          Uwielbiam widzieć jak linijki kodu zamieniają się w funkcjonalne aplikacje. 
          Obecnie łączę moc CakePHP z nowoczesnym Reactem, tworząc kompletne rozwiązania webowe.
        </p>
        
        {/* SEKCJA SKILLS */}
        <div className="skills-section">
          <h3>Technologie</h3>
          <div>
            <ul>
                <li>
                    <strong>Backend:</strong> PHP, CakePHP, Symfony
                </li>
                <li>    <strong>Frontend:</strong> React, JavaScript, HTML, CSS     
                </li>
                <li>    <strong>Inne:</strong> Docker, MySQL, Git
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;