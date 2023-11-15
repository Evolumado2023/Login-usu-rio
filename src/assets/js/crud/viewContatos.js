// Arquivo: api.js
 /*
 Esse código, é apenas um exemplo de como eu poderia deixar a lógica para 
 exibir todos os contatos do banco na tabela. Ele não está sendo usado
 em lugar nenhum, mas eu poderia usá-lo na View. 
 */


export const viewContatos = async (searchQuery, setContatos) => {
    try {
      let url = 'http://localhost:8080/contatos';
  
      if (searchQuery) {
        url = `http://localhost:8080/contatos/buscarNome/${encodeURIComponent(searchQuery)}`;
      }
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Falha na solicitação: ${response.status}`);
      }
  
      const result = await response.json();
  
      setContatos(result);
    } catch (error) {
      console.log("erro ao buscar dados no banco: ", error);
    }
  };
  