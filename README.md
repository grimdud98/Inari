<div align="center">
  <img width="200" height="200" alt="inari" src="https://i.imgur.com/wAYngvM.jpg"><br>

  <img alt="inari" width="175" src="https://i.imgur.com/9tgcn0G.png"><br>

[![Invite inari](https://img.shields.io/badge/invite-me-7289da.svg?style=flat-square&logo=discord)](https://discordapp.com/api/oauth2/authorize?client_id=663743798722953258&permissions=387136&scope=bot)
[![Join the support server](https://img.shields.io/badge/join-the%20support%20server-7289da.svg?style=flat-square&logo=discord)](https://discord.gg/8PX6QZb)
[![Library](https://img.shields.io/badge/library-discord.js-blue.svg?style=flat-square)](https://discord.js.org/#/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
  <br><br>
    **Just a nhentai Discord bot along with some other NSFW features (and some SFW features too).**
</div>

---

# About
Inari is an open source nhentai Discord bot powered by [TypeScript](https://www.typescriptlang.org/) with [discord.js](https://discord.js.org/#/) using the [Akairo](https://discord-akairo.github.io/#/) framework.

# Features
- Almost every basic features of the **[nhentai](https://nhentai.net/)** website.
- EXP system based on the number of doujins searched
- Follow a tag and receive a DM whenever a doujin with that tag is released
- Random reddit post from [r/nhentai](https://www.reddit.com/r/nhentai/).
- SFW and NSFW images from [nekobot](https://nekobot.xyz/), [nekos.life](https://nekos.life/) and multiple booru sites such as Danbooru, Gelbooru, and much more.

# Requirements

1. Discord Bot Token. You can learn how to get one **[here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**.
2. A MongoDB server. Read **[this](https://docs.mongodb.com/manual/)** for more info.
3. Node.js v14.0.0 or newer

# Installation

```
git clone https://github.com/the-urban-inc/Inari.git
cd Inari
npm install
npm build
```

After installation finishes you can use `npm start` to start the bot.

# Configuration

Copy or Rename `.env.example` to `.env` and fill out the values:

```
DISCORD_TOKEN = 'Insert your bot's token here'
MONGODB_URI = 'URL of MongoDB server'
```

Edit the `config.json` file if you prefer different prefixes or inserting your own donate link
```json
{
    "description": "",
    "settings": {
        "prefix": {
            "sfw": ["s!"],
            "nsfw": ["n!"]
        },
        "donateLink": ""
    }
}
```

# Contributing

1. [Fork the repository](https://github.com/the-urban-inc/Inari/fork)
2. Clone your fork: `git clone https://github.com/your-username/Inari.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

# License
Inari is licensed under the **[MIT License](https://github.com/the-urban-inc/Inari/blob/master/LICENSE)**