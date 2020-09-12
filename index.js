const Discord = require("discord.js");
const config = require("./config.json");

process.on('unhandledRejection', error => {
  console.error(
    "There was an error! Did you update the config.json file? " +
    "If you did, let me know what the error message says in an issue on the repo on GitHub. \n",
    error
  );
  process.exit();
});

const client = new Discord.Client();
client.on('ready', async () => console.log("Ready to level up!"));
client.config = config;

client.on("message", async message => {
  // Ignore message if the content doesn't apply to us
  if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;

  const prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command !== "emoji") return;

  // Turns letters into the Discord regional indicator emojis
  let content = args.map((word) => {
    let chars = word.split(''), emojis = "";
    for (let i in chars)
      // Currently only supports letters
      if (chars[i].match(/[a-z]/i))
        emojis += `:regional_indicator_${chars[i]}: `;

    return emojis;
  }).join(' ').replace(/(\r\n|\n|\r)/gm,""); // Removes the line break between words

  // If there are no string args, can't send the message.
  if (content) message.channel.send(content);

  // Delete the command
  message.delete().catch(console.error);
});

client.login(config.bot_token);