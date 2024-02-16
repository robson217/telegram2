//************************************************************************************************** */
// Estrutura já montadas
// Seagull VALE3
let valeD1 = ["VALEO705", 200, 0.67, "Venda", "VALE3"]
//let valeD2 = ["VALEB771", 200, 2.10, "Compra", "VALE3"]
//let valeD3 = ["VALEB791", 200, 1.38, "Venda", "VALE3"]
let valeD = {
    status: true,
    opcoes: [valeD1/*, valeD2, valeD3*/],
    retorno: 0,
    ativo: 'VALE3',
    descricao: 'Rolagem'
}
// Seagull VALE3
// THL BBDC4 
let b1 = ["BBDCC170", 500, 0.21, "Compra", "BBDC4"]
//let b2 = ["BBDCB166", 500, 0.55, "Venda", "BBDC4"]
let bbdcD = {
    status: true,
    opcoes: [b1/*, b2*/],
    retorno: 20,
    ativo: 'BBDC4',
    descricao: 'THL'
}
let arrayDesmontagens = [valeD, bbdcD]

//************************************************************************************************** */
// Estruturas que podem ser montadas
// BBDC4
let bbdcM1 = ["BBDCC170", 1, 1, "Compra", "BBDC4"] 
let bbdcM2 = ["BBDCB166", 1, 1, "Venda", "BBDC4"]
let bbdcMM1= {
    status: false,
    opcoes: [bbdcM1, bbdcM2],
    gasto: 0.27,
    ativo: 'BBDC4',
    descricao: 'Compra de Call e Put'
}

let bbdcM3 = ["BBDCC164", "Compra", "BBDC4"] 
let bbdcM4 = ["BBDCB16", "Venda", "BBDC4"]
let bbdcMM2 = {
    status: false,
    opcoes: [bbdcM3, bbdcM4],
    gasto: 0.27,
    ativo: 'BBDC4',
    descricao: 'Compra de Call e Put'
}

let arrayMontagens = [bbdcMM1, bbdcMM2]
//************************************************************************************************** */
//Criando uma biblioteca de opções
let tickets = ['BBDC4', 'ITSA4', 'B3SA3', 'GGBR4', 'ABEV3', 'MGLU3', 'SUZB3', 'BOVA11', 'PETR4', 'VALE3']

module.exports = {
    arrayDesmontagens: arrayDesmontagens,
    arrayMontagens: arrayMontagens,
    tickets: tickets
}