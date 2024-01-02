//************************************************************************************************** */
// Estrutura já montadas
// BBDC4
let bbdcD1 = ["BBDCA174", 100, 0.15, "Compra", "BBDC4"] 
let bbdcD2 = ["BBDCM157", 100, 0.11, "Compra", "BBDC4"]
let bbdcD = {
    status: true,
    opcoes: [/*bbdcD1, */bbdcD2],
    retorno: 60,
    ativo: "BBDC4",
    descricao: 'Compra de Call e Put'
}
// ITSA4
let itsaD1 = ["ITSAA130", 300, 0.06, "Compra", "ITSA4"]
let itsaD2 = ["ITSAM120", 300, 0.03, "Compra", "ITSA4"]
let itsaD = {
    status: true,
    opcoes: [/*itsaD1, */itsaD2],
    retorno: 80,
    ativo: "ITSA4",
    descricao: 'Compra de Call e Put'
}
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
// GGBR4
let ggbrD1 = ["GGBRA248", 100, 0.29, "Compra", "GGBR4"]
let ggbrD2 = ["GGBRM225", 100, 0.12, "Compra", "GGBR4"]
let ggbrD = {
    status: true,
    opcoes: [ggbrD1, ggbrD2],
    retorno: 80,
    ativo: 'GGBR4',
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
// SUZB3
let suzbD1 = ["MGLUA245", 100, 0.09, "Compra", "SUZB3"]
let suzbD2 = ["MGLUM20", 100, 0.14, "Compra", "SUZB3"]
let suzbD = {
    status: false,
    opcoes: [suzbD1, suzbD2],
    retorno: 80,
    ativo: 'SUZB3',
    descricao: 'Compra de Call e Put'
}
// BOVA11
let bovaD1 = ["MGLUA245", 100, 0.09, "Compra", "BOVA11"]
let bovaD2 = ["MGLUM20", 100, 0.14, "Compra", "BOVA11"]
let bovaD = {
    status: false,
    opcoes: [bovaD1, bovaD2],
    retorno: 80,
    ativo: 'BOVA11',
    descricao: 'Compra de Call e Put'
}
// PETR4
let petrD1 = ["MGLUA245", 100, 0.09, "Compra", "PETR4"]
let petrD2 = ["MGLUM20", 100, 0.14, "Compra", "PETR4"]
let petrD = {
    status: false,
    opcoes: [petrD1, petrD2],
    retorno: 80,
    ativo: 'PETR4',
    descricao: 'Compra de Call e Put'
}
// VALE3
let valeD1 = ["MGLUA245", 100, 0.09, "Compra", "VALE3"]
let valeD2 = ["MGLUM20", 100, 0.14, "Compra", "VALE3"]
let valeD = {
    status: false,
    opcoes: [valeD1, valeD2],
    retorno: 80,
    ativo: 'VALE3',
    descricao: 'Compra de Call e Put'
}
// Seagull
let rrrpD1 = ["RRRPM270", 100, 1.14, "Venda", "RRRP3"]
let rrrpD2 = ["RRRPA275", 100, 1.39, "Compra", "RRRP3"]
let rrrpD3 = ["RRRPA295", 100, 0.71, "Venda", "RRRP3"]
let rrrpD = {
    status: true,
    opcoes: [rrrpD1, rrrpD2, rrrpD3],
    retorno: 60,
    ativo: 'RRRP3',
    descricao: 'Seagull'
}
let arrayDesmontagens = [bbdcD, itsaD, b3saD, ggbrD, abevD, mgluD, suzbD, bovaD, petrD, valeD, rrrpD]

//************************************************************************************************** */
// Estruturas que podem ser montadas
// BBDC4
let bbdcM1 = ["BBDCA174", "Compra", "BBDC4"] 
let bbdcM2 = ["BBDCM157", "Compra", "BBDC4"]
let bbdcM = {
    status: false,
    opcoes: [bbdcM1, bbdcM2],
    gasto: 0.26,
    descricao: 'Compra de Call e Put'
}
// ITSA4
let itsaM1 = ["ITSAA130", "Compra", "ITSA4"] 
let itsaM2 = ["ITSAM120", "Compra", "ITSA4"]
let itsaM = {
    status: false,
    opcoes: [itsaM1, itsaM2],
    gasto: 0.10,
    ativo: 'ITSA4',
    descricao: 'Compra de Call / Put'
}
// B3SA3
let b3saM1 = ["B3SAA155", "Compra", "B3SA3"] 
let b3saM2 = ["B3SAM140", "Compra", "B3SA3"]
let b3saM = {
    status: false,
    opcoes: [b3saM1, b3saM2],
    gasto: 0.26,
    ativo: 'B3SA3',
    descricao: 'Compra de Call e Put'
}
//GGBR4
let ggbrM1 = ["GGBRA248", 1, 1, "Compra", "GGBR4"]
let ggbrM2 = ["GGBRM225", 1, 1, "Compra", "GGBR4"]
let ggbrM = {
    status: false,
    opcoes: [ggbrM1, ggbrM2],
    gasto: -0.41,
    ativo: 'GGBR4',
    descricao: 'Compra de Call e Put'
}
//ABEV3
let abevM1 = ["ABEVA148", 1, 1, "Compra", "ABEV3"]
let abevM2 = ["ABEVM138", 1, 1, "Compra", "ABEV3"]
let abevM = {
    status: false,
    opcoes: [abevM1, abevM2],
    gasto: -0.18,
    ativo: 'ABEV3',
    descricao: 'Compra de Call e Put'
}
//MGLU3
let mgluM1 = ["MGLUA245", 1, 1, "Compra", "MGLU3"]
let mgluM2 = ["MGLUM20", 1, 1, "Compra", "MGLU3"]
let mgluM = {
    status: false,
    opcoes: [mgluM1, mgluM2],
    gasto: -0.25,
    ativo: 'MGLU3',
    descricao: 'Compra de Call e Put'
}
//SUZB3
let suzbM1 = ["SUZBA565", 1, 1, "Compra", "SUZB3"]
let suzbM2 = ["SUZBM510", 1, 1, "Compra", "SUZB3"]
let suzbM = {
    status: true,
    opcoes: [suzbM1, suzbM2],
    gasto: -4.67,
    ativo: 'SUZB3',
    descricao: 'Compra de Call e Put'
}
//BOVA11
let bovaM1 = ["BOVAA132", 1, 1, "Compra", "BOVA11"]
let bovaM2 = ["BOVAM116", 1, 1, "Compra", "BOVA11"]
let bovaM = {
    status: true,
    opcoes: [bovaM1, bovaM2],
    gasto: -0.91,
    ativo: 'BOVA11',
    descricao: 'Compra de Call e Put'
}
//PETR4
let petrM1 = ["PETRA383", 1, 1, "Compra", "PETR4"]
let petrM2 = ["PETRM371", 1, 1, "Compra", "PETR4"]
let petrM = {
    status: true,
    opcoes: [petrM1, petrM2],
    gasto: -0.91,
    ativo: 'PETR4',
    descricao: 'Compra de Call e Put'
}
//VALE3
let valeM1 = ["VALEA826", 1, 1, "Compra", "VALE3"]
let valeM2 = ["VALEM756", 1, 1, "Compra", "VALE3"]
let valeM = {
    status: true,
    opcoes: [valeM1, valeM2],
    gasto: -0.98,
    ativo: 'VALE3',
    descricao: 'Compra de Call e Put'
}
let arrayMontagens = [bbdcM, itsaM, b3saM, ggbrM, abevM, mgluM, suzbM, bovaM, petrM, valeM]
//************************************************************************************************** */
//Criando uma biblioteca de opções
let tickets = ['BBDC4', 'ITSA4', 'B3SA3', 'GGBR4', 'ABEV3', 'MGLU3', 'SUZB3', 'BOVA11', 'PETR4', 'VALE3']

module.exports = {
    arrayDesmontagens: arrayDesmontagens,
    arrayMontagens: arrayMontagens,
    tickets: tickets
}