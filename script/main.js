// constante (não é alterada) document.quertSelector - busca algum seletor
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


//pegar todos os elementos (querySelectorAll) e dizer se foi + ou - o botão clicado (evento.target.textContent) mostrando o alvo-target e o conteudo-textContent
//parentNode pega além do alvo escolhido, os filhos dele
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});

//funcao anonima, addEventListener - adiciona um evento que "ouve", nessse caso um click no 'robotron'
//somar.addEventListener("click", () => {manipulaDados("somar")});

//parseInt para transdormar o valor em numero inteiro
//subtrair.addEventListener("click", () => {manipulaDados("subtrair")});

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }
    else{
        peca.value = parseInt(peca.value) + 1;
    }
};

//busca as pecas e o valor de cada peca na variavel, alterando atraves das estatiscas  os valores de cada elemento do robo, energia, poder, etc
function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        console.log(elemento.dataset.estatisticas)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
};