const { Bot, InlineKeyboard, webhookCallback } = require ("grammy")
const express = require ("express")
require("dotenv").config() // Criando as variaveis sensiveis do projeto

// Create a bot using the Telegram token
const bot = new Bot(process.env.TELEGRAM_TOKEN || '')

const getAPI = require ('./getAPI')

// Handle the /yo command to greet the user
bot.command("Hi", (ctx) => {
    ctx.reply(`Hi ${ctx.from?.first_name}`)
    console.log(ctx.from)
})

/*
// Handle the /about command
const aboutUrlKeyboard = new InlineKeyboard().url(
    "Testando 123",
    "https://cyclic.sh/"
); */
  
  // Suggest commands in the menu
  bot.api.setMyCommands([
    { command: "yo", description: "Be greeted by the bot" },
    {
      command: "effect",
      description: "Apply text effects on the text. (usage: /effect [text])",
    },
  ]);
  
  // Handle all other messages and the /start command
  const introductionMessage = `Hello! I'm a Telegram bot.
  I'm powered by Cyclic, the next-generation serverless computing platform.
  
  <b>Commands</b>
  /yo - Be greeted by me
  /effect [text] - Show a keyboard to apply text effects to [text]`;
  
  const replyWithIntro = (ctx) =>
    ctx.reply(introductionMessage, {
      reply_markup: aboutUrlKeyboard,
      parse_mode: "HTML",
    });
  
  bot.command("start", replyWithIntro);

  bot.on("message", (ctx) => {
    if (ctx.message.text === "Olá") {
      ctx.reply(`Olá, ${ctx.message.from.first_name}!`);
    }
})

async function setIntervalo() {
    let status = await getAPI.statusMarket() // Consulta o status do mercado
    if (status === 'A' || status === 'P') {
        await bot.api.sendMessage(process.env.TELEGRAM_USER_ID, "Mercado Aberto")
    } else {
        await bot.api.sendMessage(process.env.TELEGRAM_USER_ID, "Mercado Fechado")
    }
} 

  // Start the server
  if (process.env.NODE_ENV === "production") {
    // Use Webhooks for the production server
    const app = express();
    app.use(express.json());
    app.use(webhookCallback(bot, "express"));
    
    const gravacao = setInterval(setIntervalo, 60000)

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Bot listening on port ${PORT}`);
    });
  } else {
    // Use Long Polling for development
    bot.start();
  }