import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Login() {
  return (
    <div className='container my-5 mx-auto' style={{ maxWidth: '600px' }}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuário</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
    <br />
    <br />

    <Container className='container-recuper-login'>
      <Row>
        <Col>Ainda não tem uma conta?</Col>
        <Col>Recuperar senha</Col>
        
      </Row>
      <Row>


        <Col> <Link to='/criar-conta'>Criar conta</Link> </Col>
        <Col> <Link to="/recuperar-senha">Recuperar senha</Link> </Col>
      </Row>
    </Container>



    </div>

    
  );
}

export default Login;