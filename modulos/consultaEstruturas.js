const GetAPI = require ('./getAPI')
const variaveis = require ('./variaveis')

async function montaOpcao(ativo) {
    let api = await GetAPI.consulta(ativo[4])
    let lista = []
    api.series.forEach(async(e) => {       
        lista = lista.concat(e.strikes)       
    })

    let obj = {}
    lista.forEach(l => {
        if(l.call.symbol === ativo[0]) {
            obj.symbol = ativo[0],
            obj.category =  l.call.category,
            obj.ativo = api.close,
            obj.qtd = ativo[1],
            obj.premio = parseFloat(ativo[2]),
            obj.acao = ativo[3],
            obj.strike = l.strike,
            obj.bid = l.call.bid,
            obj.ask = l.call.ask,
            obj.resParcial = 0,
            obj.resFinal = 0,
            obj.txtParcial = "",
            obj.txtFinal = ""
        }

        if(l.put.symbol === ativo[0]) {
            obj.symbol = ativo[0],
            obj.category =  l.put.category,
            obj.ativo = api.close,
            obj.qtd = ativo[1],
            obj.premio = parseFloat(ativo[2]),
            obj.acao = ativo[3],
            obj.strike = l.strike,
            obj.bid = l.put.bid,
            obj.ask = l.put.ask,
            obj.resParcial = 0,
            obj.resFinal = 0,
            obj.txtParcial = "",
            obj.txtFinal = ""
        }

    })
    return obj
}

async function montaEstrutura(estrutura, num, tipo, symbolAtivo, gasto){
    let montagem = 0
    let preco = estrutura[0].ativo
    let acaoParcial = ""   
    estrutura.forEach(e => {
        if(e.acao === "Compra") {
            montagem = montagem - e.qtd * parseFloat(e.ask)
            e.txtParcial = `Comprar ${e.symbol.substring(4)} por R$${e.ask}, str=R$ ${e.strike}`  
        } else {
            montagem = montagem + e.qtd * parseFloat(e.bid)
            e.txtParcial = `Comprar ${e.symbol.substring(4)} por R$${e.bid}, str=R$ ${e.strike}`
        }
    })

    estrutura.forEach(e => {
        acaoParcial = acaoParcial === "" ? acaoParcial + e.txtParcial + "\n" : acaoParcial + e.txtParcial + "\n"
    })

    let texto = 
    `Estrutura ${num}: ${tipo} 
${symbolAtivo} = R$ ${preco} e Mont.: R$ ${montagem.toFixed(2)}
Valor Esperado = R$ ${gasto} 

${acaoParcial}
*************************************`
    
    let objFinal = {
        tipo: tipo,
        ativo: estrutura[0].ativo,
        montagem: montagem,
        preco: preco,
        texto: texto
    }
    return objFinal
}

async function desmontaEstrutura(estrutura, num, tipo, symbolAtivo){
    let montagem = 0
    let desmParcial = 0
    let desmVenc = 0
    let preco = estrutura[0].ativo
    let acaoParcial = ""   
    let acaoFinal = ""
    estrutura.forEach(e => {
        if(e.acao === "Compra") {
            montagem = montagem - e.qtd * parseFloat(e.premio)
            e.resParcial = e.qtd * e.bid
            e.txtParcial = `Vender ${e.symbol.substring(4)} por R$${e.bid}, str=R$ ${e.strike}`
            if(e.category === "CALL") {
                e.resFinal = preco < e.strike ? 0 : (e.qtd * (parseFloat(preco) - parseFloat(e.strike)))
                e.txtFinal = `Vender ${e.symbol.substring(4)} por R$${((e.resFinal)/e.qtd).toFixed(2)}, str=R$ ${e.strike}`
            } else {    
                e.resFinal = preco > e.strike ? 0 : (e.qtd * (parseFloat(e.strike) - parseFloat(preco)))
                e.txtFinal = `Vender ${e.symbol.substring(4)} por R$${((e.resFinal)/e.qtd).toFixed(2)}, str=R$ ${e.strike}`
            }  
        } else {
            montagem = montagem + e.qtd * parseFloat(e.premio)
            e.resParcial = - (e.qtd * e.ask)
            e.txtParcial = `Comprar ${e.symbol.substring(4)} por R$${e.ask}, str=R$ ${e.strike}`
            if(e.category === "CALL") {
                e.resFinal = preco < e.strike ? 0 : - (e.qtd * (parseFloat(preco) - parseFloat(e.strike)))
                e.txtFinal = `Comprar ${e.symbol.substring(4)} por R$${((e.resFinal)/e.qtd).toFixed(2)}, str=R$ ${e.strike}`
            } else {
                e.resFinal = preco > e.strike ? 0 : - (e.qtd * (parseFloat(e.strike) - parseFloat(preco)))
                e.txtFinal = `Comprar ${e.symbol.substring(4)} por R$${((e.resFinal)/e.qtd).toFixed(2)}, str=R$ ${e.strike}`
            }
        }
        desmParcial = desmParcial + e.resParcial
        desmVenc = desmVenc + e.resFinal
    })

    estrutura.forEach(e => {
        acaoParcial = acaoParcial === "" ? acaoParcial + e.txtParcial + "\n" : acaoParcial + e.txtParcial + "\n"
        acaoFinal = acaoFinal === "" ? acaoFinal + e.txtFinal + "\n" : acaoFinal + e.txtFinal + "\n"
    })
    let percParcial = (desmParcial + montagem) > 0 ? ((Math.abs(desmParcial + montagem)/Math.abs(montagem))  * 100) : ((Math.abs(desmParcial + montagem)/Math.abs(montagem))  * (-100))
    let percFinal = (desmVenc + montagem) > 0 ? ((Math.abs(desmVenc + montagem)/Math.abs(montagem)) * 100) : ((Math.abs(desmVenc + montagem)/Math.abs(montagem)) * (-100))
    percParcial = montagem == 0 ? 0 : percParcial
    percFinal = montagem == 0 ? 0 : percFinal

    let texto = 
    `Estrutura ${num}: ${tipo} 
${symbolAtivo} = R$ ${preco} e Mont.: R$ ${montagem.toFixed(2)} 

Parcial: Desmontagem R$ ${desmParcial.toFixed(2)}, 
Resultado: R$ ${(desmParcial + montagem).toFixed(2)} = ${percParcial.toFixed(2)}%
${acaoParcial}
Final: Desmontagem R$ ${desmVenc.toFixed(2)}, 
Resultado: R$ ${(desmVenc + montagem).toFixed(2)} = ${percFinal.toFixed(2)}%
${acaoFinal}
*************************************`
    
    let objFinal = {
        tipo: tipo,
        ativo: estrutura[0].ativo,
        montagem: montagem,
        preco: preco,
        desmParcial: desmParcial,
        resultParcial: desmParcial + montagem, 
        percParcial: percParcial,
        desmVenc: desmVenc,
        resultFinal: desmVenc + montagem,
        percFinal: percFinal,
        texto: texto
    }
    return objFinal
}

async function verificaDesmontagem(estrutura, num) {
    let arrayEst = []
    for (const opt of estrutura.opcoes){
        arrayEst.push(await montaOpcao(opt))
    }
    let result = await desmontaEstrutura(arrayEst, num, estrutura.descricao, estrutura.ativo, estrutura.gasto)
    console.log(result.texto)
    return result.texto
}

async function verificaMontagem(estrutura, num) {
    let arrayEst = []
    for (const opt of estrutura.opcoes) {
        arrayEst.push(await montaOpcao(opt))
    }
    let result = await montaEstrutura(arrayEst, num, estrutura.descricao, estrutura.ativo)
    console.log(result.texto)
    return result.texto
}


async function executar(arrayDesmontagens, arrayMontagens) {
    let num = 0
    let resultado = ''
    // Consultar Desmontagem de estruturas
    for (const est of arrayDesmontagens) {
        if (est.status) {
            let arrayEst = []
            for (const opt of est.opcoes) {
                arrayEst.push(await montaOpcao(opt))
            }
            let result = await desmontaEstrutura(arrayEst, ++num, est.descricao, est.ativo)
            if (result.percParcial >= est.retorno) {
                console.log(result.texto)
                resultado = resultado + result.texto
            }
        }
    }  
    num = 0
    // Consultar Montagem de estruturas
    for (const est of arrayMontagens) {
        if (est.status) {
            let arrayEst = []
            for (const opt of est.opcoes){           
                arrayEst.push(await montaOpcao(opt))
            }
            let result = await montaEstrutura(arrayEst, ++num, est.descricao, est.ativo, est.gasto)
            console.log(result.texto)
            if (result.montagem >= est.gasto) {
                console.log(result.texto)
                resultado = resultado + result.texto
            }
        }
    }
    return resultado
}

module.exports = {
    montaOpcao: montaOpcao,
    desmontaEstrutura: desmontaEstrutura,
    executar: executar,
    verificaDesmontagem: verificaDesmontagem,
    verificaMontagem: verificaMontagem
}

let ret =  executar(variaveis.arrayDesmontagens, variaveis.arrayMontagens)