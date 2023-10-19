import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Login() {

  {/* Estilos  padrão para textos */}
  const labelStyle = { color: '#FFF', fontSize: '16pt'};
  const buttonStyle = { width: '200px', fontSize: '16pt'}

  const recuPassStyle = { 
    backgroundColor: 'rgb(40, 80, 83)',
    color: '#FFF',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '10px',
    fontSize: '16pt',
    borderRadius: '10px',
    marginTop: '3em'
  }


  return (
    <div className='container my-5 mx-auto' style={{ maxWidth: '600px' }}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={labelStyle} >Usuário</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={labelStyle} >Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" style={buttonStyle}>
        Entrar
      </Button>
    </Form>

    <Container style={recuPassStyle}>
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