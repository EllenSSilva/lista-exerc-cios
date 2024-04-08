// Obtém o custo de fábrica do carro do primeiro argumento da linha de comando
const custoFabrica = parseFloat(process.argv[2]);

// Define os percentuais do distribuidor e dos impostos
const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;

// Calcula o custo do distribuidor e o custo dos impostos
const custoDistribuidor = custoFabrica * percentualDistribuidor;
const custoImpostos = custoFabrica * percentualImpostos;

// Calcula o custo final ao consumidor
const custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

// Exibe o custo final ao consumidor formatado
console.log("Custo final ao consumidor: R$ " + custoConsumidor.toFixed(2));
