var auxAtributo = 0;

function mostraModal(valorAtributo) {
    valorAtributo = parseInt(valorAtributo)
    auxAtributo = valorAtributo;
    if (!isNaN(valorAtributo) && valorAtributo !== 0) {
        $("#myModal").modal('show');
    }
}

function rolarDado(valor) {
    valor += 1;
    var valorDado = Math.floor(Math.random() * valor);

    document.getElementById("valores-atrib-dado").innerHTML = `Atributo: ${auxAtributo} | Dado: ${valorDado}`;
    resultado(auxAtributo, valorDado);
}

function resultado(valorAtributo, valorDado) {
    if(valorDado > valorAtributo) {
        // FALHA
        if (valorAtributo >= 1 && valorAtributo <= 10){
            if (valorDado === 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 11 && valorAtributo <= 20){
            if (valorDado >= 99 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 21 && valorAtributo <= 30){
            if (valorDado >= 98 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 31 && valorAtributo <= 40){
            if (valorDado >= 97 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 41 && valorAtributo <= 50){
            if (valorDado >= 96 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 51 && valorAtributo <= 60){
            if (valorDado >= 95 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 61 && valorAtributo <= 70){
            if (valorDado >= 94 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 71 && valorAtributo <= 80){
            if (valorDado >= 93 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 81 && valorAtributo <= 90){
            if (valorDado >= 92 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        } else if (valorAtributo >= 91 && valorAtributo <= 100){
            if (valorDado >= 91 && valorDado <= 100) {
                mostraResultado("fCritico");
            } else {
                mostraResultado("fNormal");
            }
        }
    } else if (valorDado <= valorAtributo) {
        // SUCESSO
        if (valorAtributo >= 1 && valorAtributo <= 10){
            if (valorDado === valorAtributo) {
                mostraResultado("sCritico");
            } else if (valorDado > 2) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 11 && valorAtributo <= 20){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 1) {
                mostraResultado("sCritico");
            } else if (valorDado > 8) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 21 && valorAtributo <= 30){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 2) {
                mostraResultado("sCritico");
            } else if (valorDado > 13) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 31 && valorAtributo <= 40){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 3) {
                mostraResultado("sCritico");
            } else if (valorDado > 18) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 41 && valorAtributo <= 50){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 4) {
                mostraResultado("sCritico");
            } else if (valorDado > 23) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 51 && valorAtributo <= 60){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 5) {
                mostraResultado("sCritico");
            } else if (valorDado > 28) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 61 && valorAtributo <= 70){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 6) {
                mostraResultado("sCritico");
            } else if (valorDado > 33) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 71 && valorAtributo <= 80){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 7) {
                mostraResultado("sCritico");
            } else if (valorDado > 38) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 81 && valorAtributo <= 90){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 8) {
                mostraResultado("sCritico");
            } else if (valorDado > 43) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        } else if (valorAtributo >= 91 && valorAtributo <= 100){
            if (valorDado <= valorAtributo && valorDado >= valorAtributo - 9) {
                mostraResultado("sCritico");
            } else if (valorDado > 48) {
                mostraResultado("sBom");
            } else {
                mostraResultado("sNormal");
            } 
        }
    }
}

// muda HTML para apresentar resultado
function mostraResultado(txt) {
    var tela = document.getElementById("msg");
    if (txt === "sCritico") {
        tela.innerHTML = "Critico :D"
        tela.style.color = "#7fff00"
    } else if (txt === "sBom") {
        tela.innerHTML = "Bom ;)"
        tela.style.color = "#7fff00"
    } else if (txt === "sNormal") {
        tela.innerHTML = "Normal :)"
        tela.style.color = "#7fff00"
    } else if (txt === "fCritico") {
        tela.innerHTML = "Critico :("
        tela.style.color = "#ff2626"
    } else if (txt === "fNormal") {
        tela.innerHTML = "Normal :/"
        tela.style.color = "#ff2626"
    }
}

function changePage(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    // for (i = 0; i < x.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
    // }
    document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += " w3-red";
}
