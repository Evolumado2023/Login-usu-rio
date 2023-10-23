import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Cadastrar() {


  const h1Style = { color: '#FFF'};
  

  return (
    <div className='container'>
      <h1 style={h1Style}>Cadastre o seu contato</h1>
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

      <Link to={"/view"}>
        <Button variant="primary" type="submit">
          Cadastrar Contato
        </Button>

      </Link>

    </Form>
    </div>
  );
}

export default Cadastrar;