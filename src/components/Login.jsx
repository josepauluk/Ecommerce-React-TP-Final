// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const data = await response.json();

      // Almacenar token en el almacenamiento local o en el estado global, por ejemplo:
      // localStorage.setItem('access_token', data.access_token);

      // Redirigir al usuario a la página principal
      navigate('/');
    } catch (error) {
      setError('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
