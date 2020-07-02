const discord = require("discord.js");
const axios = require("axios");

const bot = new discord.Client();

bot.on("message", async (message) => {
  var msg = message.content.split(" ");
  if (msg[0] === "!about") {
    message.reply("I'm a creepy bot!");
  }
  if (msg[0] === "!news") {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      message.author.send(
        "Title - " + res.data.title + " \n Body - " + res.data.body
      );
    } catch (err) {
      console.error(err);
    }
  }
});

// Enter bot token here
bot.login("");
