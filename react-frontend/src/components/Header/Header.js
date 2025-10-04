import React from 'react';
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
          <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
   <section className={styles.hero} id='header'>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
             <h1 className={styles.greeting}>Hi, I'm</h1>
            <h2 className={styles.name}>Daria</h2>
            <p className={styles.title}>PHP Developer</p>
            <button className={styles.contactBtn}>Contact</button>
          </div>
          <div >
            <img src="https://plus.unsplash.com/premium_photo-1671826911765-6386652c2e27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Developer"
              className={styles.imageContent}
            />
          </div>
          
        </div>
      </div>
    </section>
    </header>
  );
};


export default Header;