// document.addEventListener("DOMContentLoaded", function() {
    // // Alerta ao abrir a página
    // alert("Bem vindo ao NextSchema!");
    
    // // Função a ser executada quando o botão for clicado
    // document.getElementById("botao-entrar").onclick = function() {
    //     // Captura o valor do campo de e-mail
    //     let email = document.getElementById("texto-email").value;
    //     // Exibe o e-mail no console
    //     console.log(email);
    // };

    

        function logar(){
            document.getElementById("botaoEntrar").onclick = function(){
                var textoEmail = document.getElementById("username").value
                var textoSenha = document.getElementById("password").value

                if (textoEmail.trim() === "" && textoSenha.trim() === ""){
                    alert("Por favor, preencha os campos.")
                } else if (textoEmail.trim() === "") {
                    alert("Por favor, insira o Email.");
                    return; 
                } else if (textoSenha.trim() === "") {
                    alert("Por favor, insira a Senha.");
                    return; 
                } else if(textoEmail == "admin" && textoSenha == "admin"){
                        location.href = "homeAdmin.html"
                    } else if (textoEmail == "user@email.com" && textoSenha == "user" ) {
                        location.href = "homeUser.html"
                    }else{
                    alert("Login inválido!")
                        location.href = "index.html"
                }
            }
        }
    
// });