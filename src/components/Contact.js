import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'

export const Contact = () => {
  
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const [name, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if (name === '' || sobrenome === '' || email === '' || telefone === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name + sobrenome,
      message: message,
      email: email,
      telefone: telefone
    }

    emailjs.send("service_8wgsunr", "template_679p5u9", templateParams, "C6dMmavOlD-9EJHpp")
    .then((response) => {
      console.log("Email Enviado", response.status, response.text)
      if (response.status == 200) {
        setStatus({ success: true, message: 'Mensagem enviada com sucesso!'});
      } else {
        setStatus({ success: false, message: 'Algo deu errado, tente novamente mais tarde.'});
      }
      setNome('')
      setSobrenome('')
      setEmail('')
      setTelefone('')
      setMessage('')
      
    }, (err) => {
      console.log("Erro: ", err)
    })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Entre em contato</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        className="input"
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={name}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                          className="input"
                          type="text"
                          placeholder="Sobrenome"
                          onChange={(e) => setSobrenome(e.target.value)}
                          value={sobrenome}
                        />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        className="input"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input 
                        className="input"
                        type="tel"
                        placeholder="Telefone"
                        onChange={(e) => setTelefone(e.target.value)}
                        value={telefone}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea 
                          rows="6"
                          className="textarea"
                          placeholder="Mensagem"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                        />
                      <button type="submit"><span>Enviar</span></button>
                    </Col>
                    {
                      status.message &&
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}