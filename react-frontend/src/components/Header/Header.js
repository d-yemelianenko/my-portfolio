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
  return (
    <header>
      <nav className={styles.navbar} aria-label="Main navigation">
            <ul className={styles.navList}>
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className={styles.navLink}> {link.title}</a>
                </li>
              ))}
            </ul>
      </nav>
    </header>
  );
}

export default Header;