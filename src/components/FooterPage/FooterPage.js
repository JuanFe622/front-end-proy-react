import React from 'react';
import { Row, Col } from 'antd';
import './FooterPage.scss';

export const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12} md={8}>
            <h4>Información de contacto</h4>
            <p>Universidad Autónoma de Manizales</p>
            <p>Facultad de Ingeniería</p>
            <p>Programa de Ingeniería de Sistemas</p>
            <p>Manizales, Caldas, Colombia</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Enlaces Útiles</h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <a href="#">Politicas de Privacidad</a>{" "}
              </li>
              <li>
                <a href="#">Terminos y Condiciones</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Suscribete a nuestro boletin</h4>
            <p>Recibe las ultimas noticias de nuestro sitio web</p>
            <form action="">
              <div className="form-group">
              <input type="email" className='form-control' placeholder="Correo electronico" />
              </div>
              <button type="submit" className="btn btn-primary">
                Suscribirse
              </button>
            </form>
          </Col>
        </Row>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <Row>
            <Col md={12}>
              <p className='text-center'> &copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

