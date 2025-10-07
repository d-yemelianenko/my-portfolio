import React from 'react';
import styles from './Hero.module.css'; 

const Hero = () => {
  return (
   <section className="section content-section" id='hero'>
    <div className={styles.overlay}>
         <div className={styles.textContent}>
             <h1 className={styles.greeting}>Cześć, jestem</h1>
            <h2 className={styles.name}>Daria</h2>
            <p className={styles.title}>PHP Developer</p>
             <p className={styles.description}>
    Tworzę wydajne rozwiązania backendowe i aplikacje internetowe. 
    Specjalizuję się w czystym kodzie i optymalnych bazach danych.
  </p>
          <div className={styles.buttonContainer}>    
            <button className={styles.contactBtn}>Contact</button>
             <button className={styles.contactBtn}>Pobierz CV</button>
          </div>
          </div>
          <div >
            <img src="https://plus.unsplash.com/premium_photo-1671826911765-6386652c2e27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Developer"
              className={styles.imageContent}
            />
          </div>
    </div>
         
    </section>
   
  );
};


export default Hero;