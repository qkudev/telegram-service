import path from 'path';
import Telegram from 'node-telegram-bot-api';
import Telegraf from 'telegraf';
import express from 'express';

const token1 = '901382200:AAFbnOqObG7X2Xu_pJYs_5NBDYy25wX2_LY';
const token2 = '1097729467:AAEBDGZbIRf-Kr3hKeQp7ekEARZa_rwwK24';

const expressApp = express();

const bot = new Telegraf(token1);
expressApp.use(bot.webhookCallback('/secret-path'));
bot.telegram.setWebhook('https://server.tld:8443/secret-path');

bot.command('/start', async (ctx) => {
  await ctx.reply('HELLO 1');
})

expressApp.use('*', (req,res, next) => {
  console.log(`${new Date().toLocaleDateString()} incoming request: `, req.path);
  next();
})

expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})

expressApp.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
