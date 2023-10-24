import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormStyle } from "../assets/styles";
import { StyledText } from '../assets/styles';
import { StyledButton } from '../assets/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function RecuperaPas() {

    //const formStyle = { maxWidth: '600px', marginTop: '2em'}
    const h2Style = { color: '#FFF', textAlign: 'center'}
    const labelStyle = { color: '#FFF', fontSize: '16pt', marginTop: '.5em'}

  return (
    <div className='container'>
        <h2 style={h2Style}>Recuperação de senha</h2>

        <FormStyle>
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
        
        </FormStyle>

        <StyledText>
        Adicione seu nome de usuário e seu e-mail para recuperar seu acesso. 
            Em seguida, acesse o seu E-mail ou Gmail e  siga as instruções para 
            redefinir a sua senha.
        </StyledText>
        
        <Link to="/?">
            <StyledButton><FontAwesomeIcon icon={faArrowLeft} /> 
               Voltar
            </StyledButton>
        </Link>


    </div>
  );
}

export default RecuperaPas;