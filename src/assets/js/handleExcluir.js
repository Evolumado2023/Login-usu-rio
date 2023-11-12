// handleExcluir.js
const handleExcluir = async (idcontato, fetContatosFromDatabase) => {
    try {
      const response = await fetch(`http://localhost:8080/contatos/deletar/${idcontato}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        fetContatosFromDatabase();
        console.log('Contato excluído com sucesso!!!');
      } else {
        console.log('Erro ao tentar excluir contato: ', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao excluir contato:', error);
    }
  };
  
  export default handleExcluir;
  