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
            <img
            src="/images/hero-bg.webp"
            alt="Tło portfolio"
            width={300}
            height={300}
            priority={true}
            fetchpriority={"high"}
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'top',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease',
              display: 'block',
              margin: '0 auto'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
    </div>
         
    </section>
   
  );
};


export default Hero;