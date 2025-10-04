import React from 'react';
const Contact = () => {
  return (
    <section className="section content-section" id="contact">
      <h2 className="section-title">Kontakt</h2>
     <form className="contact-form">
        <input type="text" placeholder="Imię" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Wiadomość"></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </section>
  );
};

export default Contact;
