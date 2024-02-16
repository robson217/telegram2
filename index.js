const { Bot, webhookCallback } = require ("grammy")
const express = require ("express")
require("dotenv").config() // Criando as variaveis sensiveis do projeto
const { Menu, MenuRange } = require("@grammyjs/menu")

// Create a bot using the Telegram token
const bot = new Bot(process.env.TELEGRAM_TOKEN || '')

// Módulos que serão importados da pasta módulos
const getAPI = require ('./modulos/getAPI')
const consultaEstruturas = require ('./modulos/consultaEstruturas')
const variaveis = require ('./modulos/variaveis')

//**************************************************** *
// Menu Principal
const main = new Menu("root-menu")
    .submenu ("Montadas","desmontar")
    .submenu("Não Montadas", "montar")
    .text("Fechar", (ctx) => ctx.deleteMessage())

//************************************************************************ */
// Criando um menu de acompanhamento de Desmontagens
const menu = new Menu("desmontar", { onMenuOutdated: false })
menu.dynamic(async () => {
    const range = new MenuRange()
    let num = 0
    for (const ativo of variaveis.arrayDesmontagens) {
        if (ativo.status) {
            num++
            range
                .text(ativo.ativo, async(ctx) => {
                    let texto = await consultaEstruturas.verificaDesmontagem(ativo, 0)
                    ctx.reply(texto)
                    //ctx.deleteMessage()
                    console.log(ativo)
                })
                if ((num % 4) === 0) {
                    range.row()
                }    
        }
    }
    return range;
})
    .text("Cancelar", 
        (ctx) => ctx.deleteMessage(),
        (ctx) => ctx.menu.update()
    )
bot.use(menu)

bot.command("desmontar", async (ctx) => {
  await ctx.reply("Escolha o ativo montado:", { reply_markup: menu });
})
//************************************************************************ */

// Criando um menu de acompanhamento de Montagens
const menuM = new Menu("montar", { onMenuOutdated: false })
menuM.dynamic(async () => {
    const range = new MenuRange()
    let num = 0
    for (const ativo of variaveis.arrayMontagens) {
        if (ativo.status) {
            num++
            range
                .text(ativo.ativo, async(ctx) => {
                    let texto = await consultaEstruturas.verificaMontagem(ativo, 0)
                    ctx.reply(texto)
                    //ctx.deleteMessage()
                    console.log(ativo)
                })
                if ((num % 4) === 0) {
                    range.row()
                }    
        }
    }
    return range;
})
    .text("Cancelar", 
        (ctx) => ctx.deleteMessage(),
        (ctx) => ctx.menu.update()
    )
bot.use(menuM)

bot.command("montar", async (ctx) => {
    await ctx.reply("Escolha o ativo montado:", { reply_markup: menuM });
})
//************************************************************************ */

main.register(menu)
main.register(menuM)
bot.use(main)

bot.command("start", async (ctx) => {
    await ctx.reply("Escolha o ativo montado:", { reply_markup: main });
})

//****************************************************************** */
let num = 0
// Executa a Analise das Compras combinadas de Call e Put

const analise = setInterval(setIntervalo, 480000)//480000
async function setIntervalo() { // Each 14 minutes execute this function
    let status = await getAPI.statusMarket() // Consulta o status do mercado
    if (status === 'A' || status === 'P') {
        // Avalia desmontagem de Estrutura
        let ret =  await consultaEstruturas.executar(variaveis.arrayDesmontagens, variaveis.arrayMontagens)
        if (ret !== "") {
            await bot.api.sendMessage(process.env.TELEGRAM_USER_ID || "", ret)
        }
    }
}

// Start the server
if (process.env.NODE_ENV === "production") {   
    // Use Webhooks for the production server
    const app = express();
    app.use(express.json());
    app.use(webhookCallback(bot, "express"));
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Bot listening on port ${PORT}`);
    });
} else {
    // Use Long Polling for development
    bot.start();  
}