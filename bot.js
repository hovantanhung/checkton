const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_API_TOKEN'; // Thay bằng API Token của bot bạn
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://your-dapp-url.vercel.app'; // Thay bằng URL của DApp đã triển khai

bot.onText(/\/start|play/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Click to play the TON Blockchain Game!', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Play Game', web_app: { url: webAppUrl } }]
      ]
    }
  });
});
