const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = "https://geosapp.herokuapp.com",
    token = process.env.TOKEN || '875217300:AAFT4Tx2iWyV6gdcAHduEw2y9_QTwSMieYs',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);

bot.on('message',(msg) => {
const chatId=msg.chat.id
if(msg=="hi"){
    bot.sendMessage(chatId,'hello')
else if(msg=="hello"){
    bot.sendMessage(chatId,'Hi')
else
    bot.sendMessage(chatId,'pikka pe')
                    
})
