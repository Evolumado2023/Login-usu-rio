import React from "react";
import { StyledButton, CenteredContainer } from "../assets/styles";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  { Link } from 'react-router-dom';

function CriarConta() {

    const h2Style = { color: '#FFF', textAlign: 'center'}
    const mainStyle = { justifyContent: 'center', alignItems: 'center' }

    const formStyle = { color: '#FFF',
                        fontSize: '16pt',
                        maxWidth: '600px',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '0 auto',

    }



    return (
        <CenteredContainer>
            <div className="container" style={mainStyle}>
                <h2 style={h2Style}>Criar conta</h2>
                <Form style={formStyle}>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control placeholder="Nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Sobre nome</Form.Label>
                      <Form.Control placeholder="Sobre nome" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                       <Form.Label>Email</Form.Label> <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Nomde de usuário (ex.: "abc123")</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Salvar
                    </Button>
                </Form>

                {/* os estilos desse botão estão vindo do sttyles. Eu estilizei eles usando
                    o styled components
                 */}
                <Link to="/?">
                   <StyledButton>Voltar</StyledButton>
                </Link>
            </div>


        </CenteredContainer>
    )
}

export default CriarConta;