import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { StyledText,formStyle } from "../assets/styles";

function RecuperaPas() {

    //const formStyle = { maxWidth: '600px', marginTop: '2em'}
    const h2Style = { color: '#FFF', textAlign: 'center'}
    const labelStyle = { color: '#FFF', fontSize: '16pt', marginTop: '.5em'}

  return (
    <div className='container'>
        <h2 style={h2Style}>Recuperação de senha</h2>

        <Form style={formStyle}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={labelStyle}>Nome</Form.Label>
                <Form.Control placeholder="Nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={labelStyle}>Email</Form.Label>
                <Form.Control placeholder="Email" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Recuperar senha
            </Button>
        
        </Form>

        <StyledText>Adicione seu nome de usuário e seu e-mail para recuperar seu acesso. 
                    Em seguida, acesse o seu E-mail ou Gmail e  siga as instruções para 
                    redefinir a sua senha.
        </StyledText>
    </div>
  );
}

export default RecuperaPas;