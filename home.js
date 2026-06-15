function toggleLoginModal(acao) {
      const modal = document.getElementById('loginModal');
      const txtAcao = document.getElementById('acao-nome');
      
      // Se uma ação foi passada, atualiza o texto do modal
      if (acao) {
        txtAcao.innerText = acao.toLowerCase();
      }

      // Alterna a exibição do modal (flex abre, none esconde)
      if (modal.style.display === 'flex') {
        modal.style.style.display = 'none';
      } else {
        modal.style.display = 'flex';
      }
    }

    // Fecha o modal caso o usuário clique na parte escura do fundo
    function fecharModalFora(event) {
      const modal = document.getElementById('loginModal');
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }