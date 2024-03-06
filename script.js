const formulario = document.querySelector("form");
//esse código seleciona elementos HTML usando o metodo document.querySelector e armazena e variáveis
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Itel = document.querySelector(".tel");
const Isenha = document.querySelector(".senha");

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(Inome.value)
})