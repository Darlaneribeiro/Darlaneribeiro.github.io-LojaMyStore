let carrinho = [];
let total = 0;

function adicionarItem(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  exibirCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  total = 0;
  exibirCarrinho();
}

function exibirCarrinho() {
  const itensCarrinho = document.getElementById('itens-carrinho');
  itensCarrinho.innerHTML = '';
  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.nome} - R$${item.preco.toFixed(2)}`;
    itensCarrinho.appendChild(li);
  });
  
  const totalElement = document.getElementById('total');
  totalElement.innerText = `Total: R$${total.toFixed(2)}`;
}
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".add-bag");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.dataset.name;
            const productPrice = parseFloat(this.dataset.price);

            // Aqui você pode adicionar lógica para adicionar o item ao carrinho
            adicionarItemAoCarrinho(productName, productPrice);
        });
    });

    // Função para adicionar item ao carrinho
    function adicionarItemAoCarrinho(nome, preco) {
        // Aqui você pode implementar a lógica para adicionar o item ao carrinho
        // Por exemplo, usar um array para armazenar os itens do carrinho ou enviar uma solicitação para um servidor
        console.log(`Item "${nome}" adicionado ao carrinho por R$${preco.toFixed(2)}`);
        // Adicione aqui a lógica para calcular o total do carrinho
    }
});
