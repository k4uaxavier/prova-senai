document.addEventListener('DOMContentLoaded', function () {
  const inscreverBotoes = document.querySelectorAll('.inscrever');

  inscreverBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
      if (botao.textContent === 'INSCREVER-SE') {
        botao.textContent = 'CANCELE';
       
      } else {
        botao.textContent = 'INSCREVER-SE';
     
      }
    });
  });
});
