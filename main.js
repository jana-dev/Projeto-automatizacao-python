document.addEventListener("DOMContentLoaded", (event) => {

    const submitButton = document.getElementById("submitButton");

    //clique no botão sumit
    submitButton.addEventListener("click", (event) => {
        // Evite que o formulário seja enviado automaticamente
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        // Verifique se os campos de entrada não estão vazios, trim() garante que espaços em branco não sejam considerados
        if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Redirecione para a página de cadastro.html se os campos não estiverem vazios
            window.location.href = "cadastro.html";
        }
    });
});

