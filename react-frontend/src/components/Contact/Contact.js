import React from 'react';
const Contact = () => {
  return (
    <section className="section content-section" id="contact">
      <h2 className="section-title">Kontakt</h2>
      <div className="contact-info">
        <form className="contact-form">
            <input type="text" placeholder="Imię" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Wiadomość"></textarea>
            <button type="submit">Wyślij</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
