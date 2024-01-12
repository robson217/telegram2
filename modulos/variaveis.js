//************************************************************************************************** */
// Estrutura já montadas
// B3SA3
let b3saD1 = ["B3SAA155", 100, 0.28, "Compra", "B3SA3"]
let b3saD2 = ["B3SAM140", 100, 0.16, "Compra", "B3SA3"]
let b3saD = {
    status: true,
    opcoes: [b3saD1, b3saD2],
    retorno: 60,
    ativo: 'B3SA3',
    descricao: 'Compra de Call e Put'
}
// ABEV3
let abevD1 = ["ABEVA148", 100, 0.08, "Compra", "ABEV3"]
let abevD2 = ["ABEVM138", 100, 0.11, "Compra", "ABEV3"]
let abevD = {
    status: true,
    opcoes: [abevD1, abevD2],
    retorno: 80,
    ativo: 'ABEV3',
    descricao: 'Compra de Call e Put'
}
// MGLU3
let mgluD1 = ["MGLUA245", 100, 0.09, "Compra", "MGLU3"]
let mgluD2 = ["MGLUM20", 100, 0.14, "Compra", "MGLU3"]
let mgluD = {
    status: true,
    opcoes: [mgluD1, mgluD2],
    retorno: 80,
    ativo: 'MGLU3',
    descricao: 'Compra de Call e Put'
}
// Seagull VALE3
let valeD1 = ["VALEN721", 200, 0.62, "Venda", "VALE3"]
let valeD2 = ["VALEB771", 200, 2.10, "Compra", "VALE3"]
let valeD3 = ["VALEB791", 200, 1.38, "Venda", "VALE3"]
let valeD = {
    status: true,
    opcoes: [valeD1, valeD2, valeD3],
    retorno: 80,
    ativo: 'VALE3',
    descricao: 'Seagull'
}
// Seagull VALE3
// THL BBDC4 
let b1 = ["BBDCC170", 500, 0.75, "Compra", "BBDC4"]
let b2 = ["BBDCB166", 500, 0.55, "Venda", "BBDC4"]
let bbdcD = {
    status: true,
    opcoes: [b1, b2],
    retorno: 20,
    ativo: 'BBDC4',
    descricao: 'THL'
}
let arrayDesmontagens = [b3saD, abevD, mgluD, valeD, bbdcD]

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