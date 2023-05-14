import "./styles.css";

const Contact = () => {
  return (
    <main id="contact-main">
      <div id="contact-content" className="welcome-section">
        <h2>CONTATO</h2>
        <div className="contact-subtitle">
          <span>Nossos canais & informações</span>
          <span>para contato</span>
        </div>
      </div>
      <div className="contact-second-section">
        <div className="contact-card">
          <div className="contact-form-card">
            <span className="ti-type">Fale conosco</span>
            <input type="text" className="i-type c-type" placeholder="Seu nome" name="user-name" id="user-name" />
            <input type="email" className="i-type c-type" placeholder="E-Mail" name="user-email" id="user-email" />
            <input type="text" className="i-type c-type" placeholder="Assunto" name="user-subject" id="user-subject" />
            {/* <textarea className="t-type c-type"  placeholder="Envie-nos uma mensagem" name="user-input" id="user-input"></textarea> */}
            <input type="text" className="t-type c-type" placeholder="Envie-nos uma mensagem" name="user-input" id="user-input" />
          </div>
          {/* <div className="contact-info-card">
            <span>Nossas informações</span>
            <p>Logradouro</p>
            <p>Telefones</p>
            <p>E-mails</p>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Contact;
