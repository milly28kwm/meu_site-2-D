let totalApoios = 0;
const botao = document.getElementById('btn-apoio');
const contadorTexto = document.getElementById('contador');

botao.addEventListener('click', () => {
    totalApoios++;
    if(totalApoios === 1) {
        contadorTexto.innerText = "Você demonstrou seu apoio! 1 pessoa engajada.";
    } else {
        contadorTexto.innerText = `Obrigado! ${totalApoios} pessoas já demonstraram apoio nesta página.`;
    }
    botao.style.backgroundColor = "#1b5e20";
    botao.innerText = "Apoio Registrado! ❤️";
});
