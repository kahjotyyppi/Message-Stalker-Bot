const Discord = require("discord.js"); // All the bots requirements
const bot = new Discord.Client(); // All the bots requirements
const config = require("./config.json"); // All the bots requirements

bot.login(config.token); // Logs in with a token taken from the config file

bot.on('ready', () => {
  bot.user.setActivity('Your Messages', {
    type: 'WATCHING'
  }); // Sets the bots status
  console.log('Bot has started!'); // Logs into console when ready
});


bot.on("messageDelete", (messageDelete) => { // Triggered when a message is deleted
  const logchannel = messageDelete.guild.channels.find(channel => channel.name === "messagelogs");
  if (messageDelete.author.bot) return;
  if (messageDelete.channel.id === "552808708267180052" || messageDelete.channel.id === "480039442661244930" || messageDelete.channel.id === "417644622542798848" || messageDelete.channel.id === "531743428371939338") return;
  bot.on('error', console.error);
  if (messageDelete.content === "") {
  logchannel.send({
    embed: {
      "description": `Image Author: \`\`${messageDelete.author.tag}\`\` \n\nChannel: ${messageDelete.channel}`,
      "color": 16721216,
      "timestamp": new Date(),
      "author": {
        "name": `Deleted Image!`
      },
      footer: {
        text: `Message ID: (${messageDelete.id})`
      }
    }
  })
}

else
logchannel.send({
  embed: {
    "description": `Message Author: \`\`${messageDelete.author.tag}\`\` \n\nChannel: ${messageDelete.channel} \n\nDeleted Message: \`\`\`${messageDelete}\`\`\``,
    "color": 16721216,
    "timestamp": new Date(),
    "author": {
      "name": `Deleted Message!`
    },
    footer: {
      text: `Message ID: (${messageDelete.id})`
    }
  }
})
bot.on('error', console.error);
});

bot.on("messageUpdate", (oldMessage, newMessage) => { // Triggered when a message is edited
  const logchannel = oldMessage.guild.channels.find(channel => channel.name === "messagelogs");
  bot.on('error', console.error);
  if (oldMessage.author.bot) return;
  if (oldMessage.channel.id === "552808708267180052" || oldMessage.channel.id === "480039442661244930" || oldMessage.channel.id === "417644622542798848" || oldMessage.channel.id === "531743428371939338") return;
  if (oldMessage.attachments.size > 0) return;
  if (oldMessage.contains === ".png" || oldMessage.contains === ".jpg" || oldMessage.contains === ".gif" || oldMessage.contains === ".mp3" || oldMessage.contains === ".mp4" || oldMessage.contains === ".wav") return;
  if (!oldMessage.embeds.length || !newMessage.embeds.length) // Checks if message has an embed
    logchannel.send({
      embed: {
        "description": `Message Author: \`\`${oldMessage.author.tag}\`\`\n\nChannel: ${oldMessage.channel}\n\n[**View Message**](https://discordapp.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id}) \n\n\nOriginal Message: \`\`\`${oldMessage}\`\`\`\n\nEdited Message: \`\`\`${newMessage}\`\`\``,
        "color": 15817984,
        "timestamp": new Date(),
        "author": {
          "name": `Edited Message!`
        },
        footer: {
          text: `Message ID: (${oldMessage.id})`
        }
      }
    })
  else return; // Returns if message has an embed
  bot.on('error', console.error);
});

bot.on("message", async message => {
if (message.author.bot) return;
if (message.content === "$info") {
  message.channel.send("Bot made by Kahjo#0149 for private use only.")
};

if (message.isMentioned(bot.user)) {
  message.channel.send("Commands available: $info")
}
bot.on('error', console.error);
});