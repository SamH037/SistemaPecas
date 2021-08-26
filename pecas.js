var listaDePecas = ["Cabeçote", "Suspenção", "Motor de Partida", "Roda"]

if(listaDePecas.length < 10) {
    // Se nº peças menor que 10, é possivel cadastrar peças
    console.log("É possivel cadastrar mais peças");
} else {
    // Caso a lista não tiver mais espaços
    console.log("impossivel cadastrar, lista cheia")
}

let peso = 150;
    // Define qual será o peso que as peças devem ter
if(peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("Peso adequado")
}

let nomePeca = "Escapamento";
    // Define quantas letras o nome da peça pode ter
switch (nomePeca.length) {
    default:
        console.log("Nome adequado para cadastro")
        break;
    // Define quantas letras o nome da peça não pode ter
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais de 3 caracteres")
        break;
    case 0:
        console.log("O nome da peça não pode estar em branco")
        break;
}