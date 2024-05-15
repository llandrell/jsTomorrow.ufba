let nome = prompt("Informe o nome do aluno");
let nota1 = parseFloat(prompt("informe a nota 1"));
let nota2 = parseFloat(prompt("informe a nota 2"));
let nota3 = parseFloat(prompt("informe a nota 3"));
let nota4 = parseFloat(prompt("informe a nota 4"));

let notaFinal = ((nota1 + nota2 + nota3 + nota4) / 4)

document.write(`A media final do aluno: ${nome} é ${notaFinal}`);







    // Solicitar ao usuário que informe o preço
    var preco = parseFloat(prompt(`Informe o preço:`));

    // Solicitar ao usuário que informe a quantidade
    var quantidade = parseInt(prompt(`Informe a quantidade:`));

    // Calcular o valor total
    var valorTotal = preco * quantidade;

    // Arredondar o resultado para até 3 casas decimais
    valorTotal = valorTotal.toFixed(3);

    // Exibir o resultado
    document.write(`O valor total é: ${valorTotal}`);