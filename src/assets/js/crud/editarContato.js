// editarContato.js

import { useState, useEffect } from 'react';

const editarContato = (idcontato, navigate) => {
  const [contato, setContato] = useState({
    nome: '',
    idade: 0,
    descricao: '',
    foto: ''
  });

  useEffect(() => {
    const fetchContatoDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/contatos/buscarId/${idcontato}`);
        const result = await response.json();
        setContato(result);
      } catch (error) {
        console.log('Erro ao buscar contato no banco: ', error);
      }
    };

    fetchContatoDetails();
  }, [idcontato]);

  const handleEditar = async () => {
    try {
      const response = await fetch(`http://localhost:8080/contatos/editar/${idcontato}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(contato)
      });

      if (response.ok) {
        const responseBody = await response.text();

        if (responseBody) {
          const updatedContato = JSON.parse(responseBody);
          setContato(updatedContato);
          // Redirecionar automaticamente após 2 segundos
          navigate('/view');
        } else {
          console.log('Erro: resposta vazia');
        }
      } else {
        console.log('Erro ao editar contato:', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao editar contato:', error);
    }
  };

  return { contato, setContato, handleEditar };
};

export default editarContato;
