import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';

function BasicExample() {


  return (
    <div className='container'>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;