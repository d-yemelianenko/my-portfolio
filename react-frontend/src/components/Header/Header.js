import { useState } from 'react';
import React from 'react';
import styles from './Header.module.css'; 

const links = [
    {
        title: 'Home',
        url: '#hero',
    },
    {
        title: 'About',
        url: '#about',
    },
    {
        title: 'Projects',
        url: '#projects',
    },
    {
        title: 'Contact',
        url: '#contact',
    },
    
];


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};
  return (
    
    <header>
       <div className={styles.navContainer}>
        <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className={styles.navLink}> {link.title}</a>
                </li>
              ))}
            </ul>
        </nav>
       
       <button 
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.change : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMobileMenuOpen}
        >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
           
        </button>
        </div>

            {isMobileMenuOpen && (
                <nav 
    className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}
    aria-label="Mobile navigation"
>
            <ul className={styles.mobileNavList}>
                {links.map((link, idx) => (
                    <li key={idx}>
                        <a 
                            href={link.url} 
                            className={styles.navLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
            )}
    </header>
  );
}

export default Header;