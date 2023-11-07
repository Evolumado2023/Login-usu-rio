import Button from 'react-bootstrap/Button';
import { StyledButton } from '../assets/styles'
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Editar() {

  //const headerStyle = { backgroundColor: "rgb(134, 245, 245)"}
  //const menu = { display: "flex", justifyContent: "space-between "}
  const item = { display: "flex", gap :"2em", color: "rgb(238, 36, 228)"}
  const liStyle = { color: '#fff', fontSize: "18pt", listStyle: "none"}
  const h1Style = { color: '#FFF'};
  const i = { color: "rgb(238, 36, 228)" }
  const a = { color: "#FFF", textDecoration: "none" }
  
  

  // <i class="fa-regular fa-user"></i> usuario

  return (
    <div className='container'>
      <header>
        <div className="container-header">
          <div className="title">
            <h1 style={h1Style}>Editar Contato</h1>
          </div>
          <div style={item} className="container-itens">
            <li style={liStyle}>
              <Link to={"/view"} style={a}>Contatos</Link>
            </li>
            <li style={liStyle}>
              <div className="profile-icon">
                <FontAwesomeIcon icon={faUser} style={i}/>
              </div>
            </li>
          </div>
        </div>
      </header>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" 
                      placeholder="Enter nome" 
                      name="nome"
        />



      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Idade</Form.Label>
        <Form.Control type="number" 
                      placeholder="Idade" 
                      name="idade"    
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" 
                      placeholder="Descrição" 
                      name="descricao"    
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="file" // Usando <input type="file> para fazer upload da foto
            name="foto"
          />
      </Form.Group>
      <Button variant="primary" type="submit">
        Editar Contato
      </Button>

    </Form>

    <Link to="/view">
        <StyledButton> <FontAwesomeIcon icon={faArrowLeft} />  Voltar</StyledButton>
    </Link>

    </div>
  );
}

export default Editar;