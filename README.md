<p align="center">
  <h1 align="center">Text to Emoji</h1>
</p>

<p align="center">
  <a href="https://github.com/ajmeese7/text-to-emoji/search?l=javascript">
    <img src="https://img.shields.io/badge/language-javascript-yellow" alt="JavaScript" />
  </a>
  <a href="https://github.com/ajmeese7/text-to-emoji/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/ajmeese7/text-to-emoji" alt="License" />
  </a>
  <a href="https://github.com/ajmeese7/text-to-emoji/stargazers">
    <img src="https://img.shields.io/github/stars/ajmeese7/text-to-emoji" alt="Stars" />
  </a>
  <a href="https://github.com/ajmeese7/text-to-emoji/network/members">
    <img src="https://img.shields.io/github/forks/ajmeese7/text-to-emoji" alt="Forks" />
  </a>
  <a href="https://github.com/ajmeese7/text-to-emoji/stargazers">
    <img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Leave a Star!"/>
  </a>
</p>

<p align="center">
  <img alt="Text to Emoji Usage GIF" src="https://user-images.githubusercontent.com/17814535/92997146-ac5a5000-f4d6-11ea-9eda-b411718e71eb.gif">
</p>

<p align="center">
  A Discord.js selfbot for turning text into the regional indicator emojis.
</p>

## Downloading

In a command prompt in your projects folder (wherever that may be), run the following:

`git clone https://github.com/ajmeese7/text-to-emoji`

Once finished:

- Ensure you have NodeJS installed on your PC by running `npm`. If not, Google how to install it and do that now
- In the folder from where you ran the git command, run `cd text-to-emoji` and then run `npm install`
- Edit `config.json` and enter your token and desired prefix. It should look like this afterwards:

```json
{
  "bot_token": "YOUR_TOKEN_HERE",
  "prefix": "YOUR_DESIRED_PREFIX_HERE"
}
```

Your prefix can be anything you want, but I tend to use the `/` because you're unlikely to ever use it on accident.

## Getting your login token

Go to [this link](https://github.com/Tyrrrz/DiscordChatExporter/wiki/Troubleshooting#my-token-is-disappearing-too-quickly-i-cant-copy-it) and follow the instructions
to get your login token.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Controlling the bot

To start the bot, open a command prompt from the folder containing the repository and run
`node index`.

You simply need to type `/emoji` in Discord followed by your message, then the bot will
handle the rest.

To stop it, click on the terminal and press **CTRL+C**, which will kill the process.