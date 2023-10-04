document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.getElementById("corpo-cadastrados");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Obter os valores dos campos do formulário
        const codigo = document.getElementById("codigo").value;
        const marca = document.getElementById("marca").value;
        const categoria = document.getElementById("categoria").value;
        const preco = document.getElementById("preco").value;
        const obs = document.getElementById("obs").value;

        // Criar uma nova linha na tabela
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${marca}</td>
        <td>${categoria}</td>
        <td>${preco}</td>
        <td>${obs}</td>
      `;

        // Adicionar a nova linha à tabela
        tableBody.appendChild(newRow);

        // Limpar os campos do formulário após o cadastro
        form.reset();
    });
});

function limparListaProdutos() {
    const tableBody = document.getElementById("corpo-cadastrados");
        tableBody.deleteRow(0);
}
