import path from 'path';
import Telegram from 'node-telegram-bot-api';

const token1 = '901382200:AAFbnOqObG7X2Xu_pJYs_5NBDYy25wX2_LY';
const token2 = '1097729467:AAEBDGZbIRf-Kr3hKeQp7ekEARZa_rwwK24';

const bot1 = new Telegram(token1, { polling: true });
const bot2 = new Telegram(token2, { polling: true });

bot1.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  await bot1.sendMessage(chatId, 'HELLO 1');
})

bot2.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  await bot1.sendMessage(chatId, 'HELLO 2');
})

async function start() {
}
