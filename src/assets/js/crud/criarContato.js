// criarContato.js

import { useState } from 'react';

const criarContato = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async () => {
    const data = { nome, idade, descricao, foto };

    try {
      const response = await fetch('http://localhost:8080/contatos/criar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Contato cadastrado com sucesso!");
        setNome('');
        setIdade('');
        setDescricao('');
        setFoto('');
      } else {
        console.error('Erro ao cadastrar contato: ', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao processar a solicitação: ', error.message);
    }
  };

  return { nome, idade, descricao, foto, uploading, setNome, setIdade, setDescricao, setFoto, handleSubmit };
};

export default criarContato;
