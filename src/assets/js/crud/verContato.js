// verContato.js

import { useState, useEffect } from 'react';

const verContato = (idcontato) => {
  const [contato, setContato] = useState({
    nome: '',
    idade: 0,
    descricao: '',
    foto: ''
  });

  const fetchContatoDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/contatos/buscarId/${idcontato}`);
      const result = await response.json();
      console.log('Result:', result);
      setContato(result);
    } catch (error) {
      console.log('Erro ao buscar contato no banco: ', error);
    }
  };

  useEffect(() => {
    fetchContatoDetails();
  }, [idcontato]);

  return contato;
};

export default verContato;
