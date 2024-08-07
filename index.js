function doc(doc) {
    return document.getElementById(doc);
}

function info(sair=false) {
    if (sair == false) {
        doc("info").innerHTML = "Seleção brasileira";
    } else {
        doc("info").innerHTML = "";
    }
}

function outraPag(pag) {
    event.preventDefault();
    window.location.href = pag;
}

function verifLetra(event) {
    const charCode = event.charCode || event.keyCode;
    const char = String.fromCharCode(charCode);
    return /^[A-Za-z]$/.test(char);
}

function neymar(img="/images/fundog.png") {
    document.body.style.backgroundImage = `url(${img})`;
}

// Adiciona um evento ao botão para trocar a imagem de fundo ao clicar
// document.getElementById('trocarFundoBtn').addEventListener('click', function() {
//     trocarFundo('/images/nova-imagem.png');
// });