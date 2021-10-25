
var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar
    function active() { // Quando clicar no botão.
    if (visibilidade) {//Se a variável visibilidade for igual a true, então
            document.getElementById("ic").style.display = "none"; //Ocultamos a div.
        } else {//ou se a variável estiver com o valor false..
            document.getElementById("ic").style.display = "block";
        }
    }

    function active0() { // Quando clicar no botão.
    document.getElementById("ic").style.display = "block";
      //Aparece o botao menu
    }

