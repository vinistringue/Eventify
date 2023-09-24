// Função para cadastrar um evento
function cadastrarEvento(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    // Obtenha os valores dos campos de entrada
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const localizacao = document.getElementById('localizacao').value;
    const categoria = document.getElementById('categoria').value;
  
    // Crie um objeto de evento com os valores dos campos
    const evento = {
      titulo,
      descricao,
      data,
      hora,
      localizacao,
      categoria,
    };
  
    // Envie uma solicitação POST para adicionar o evento ao servidor JSON
    fetch('http://localhost:3000/eventos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(evento),
    })
      .then((response) => response.json())
      .then(() => {
        // Limpe os campos de entrada após o cadastro
        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('data').value = '';
        document.getElementById('hora').value = '';
        document.getElementById('localizacao').value = '';
        document.getElementById('categoria').value = '1';
  
        // Exiba uma mensagem de sucesso na página
        const mensagem = document.getElementById('mensagem');
        mensagem.style.display = 'block';
        mensagem.textContent = 'Evento cadastrado com sucesso!';
  
        // Aguarde 2 segundos e oculte a mensagem de sucesso
        setTimeout(() => {
          mensagem.style.display = 'none';
        }, 2000);
  
        console.log('Evento cadastrado com sucesso');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar evento:', error);
      });
  }
  
  // Adicione um ouvinte de evento ao formulário para capturar o envio
  const formularioCadastro = document.getElementById('cadastro-form');
  formularioCadastro.addEventListener('submit', cadastrarEvento);
  
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const mensagem = document.getElementById('mensagem');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Impede o envio padrão do formulário
  
      // Obter valores dos campos
      const titulo = document.getElementById('titulo').value;
      const descricao = document.getElementById('descricao').value;
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const localizacao = document.getElementById('localizacao').value;
      const categoria = document.getElementById('categoria').value;
  
      // Verificar se todos os campos estão preenchidos
      if (titulo && descricao && data && hora && localizacao && categoria !== '1') {
        // Exibir mensagem de sucesso
        mensagem.innerText = 'Evento cadastrado com sucesso!';
        mensagem.classList.add('alert-success');
        mensagem.style.display = 'block';
  
        // Aguardar 2 segundos e ocultar a mensagem de sucesso
        setTimeout(function () {
          mensagem.style.display = 'none';
        }, 2000);
      }
    });
  });
  