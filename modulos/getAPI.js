let XMLHttpRequest = require('xhr2');
const http = new XMLHttpRequest()
require("dotenv").config() // Criando as variaveis sensiveis do projeto

async function consulta(ativo) {
    return new Promise (function (resolve, reject) {
        http.open("GET", `https://api.oplab.com.br/v3/market/instruments/series/${ativo}`)
        http.setRequestHeader('Access-Token',process.env.API_TOKEN);
        http.send() 
        http.onload = async() => {
            let status = http.status;
            if (status == 200) {
                let obj = JSON.parse(http.responseText) 
                resolve(obj)
            } else {
                reject(status);
            } 
        }   
    })
}

async function statusMarket() {
    return new Promise (function (resolve, reject) {
        http.open("GET", `https://api.oplab.com.br/v3/market/status`)
        http.setRequestHeader('Access-Token', process.env.API_TOKEN);
        http.send() 
        http.onload = async() => {
            let status = http.status;
            if (status == 200) {
                let obj = JSON.parse(http.responseText) 
                resolve(obj.market_status)
            } else {
                reject(status);
            } 
        }   
    })
}


module.exports = {
    consulta: consulta,
    statusMarket: statusMarket,
}

/*
async function executar() {
    let teste = await statusMarket()
    console.log(teste)
}


executar()*/