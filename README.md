# Meinu

<a href="https://discord.gg/bMFPpxtMTe"><img src="https://img.shields.io/discord/977286501756968971?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
<a href="https://www.npmjs.com/package/meinu"><img src="https://img.shields.io/npm/v/meinu?maxAge=3600" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/meinu"><img src="https://img.shields.io/npm/dt/meinu.svg?maxAge=3600" alt="npm downloads" /></a>

### Simplifies the creation and handling of slash commands in Discord bots.

## Installation

```zsh
% bun i meinu
```

## Basic Usage

```ts
import { Meinu, Command } from 'meinu';

let commands = [
	new Command<Meinu>({
		name: 'ping',
		description: 'Pong!',
		owners_only: true, // default: false
		nsfw: true, // default: false
	}).addHandler('chat_input', async (bot, int) => {
		const sent = await int.deferReply({ withResponse: true });
		if (!sent.resource?.message?.createdTimestamp)
			return int.editReply('An error occured while executing the command.');
		const diff = sent.resource?.message?.createdTimestamp - int.createdTimestamp;

		const content = [
			'### 🏓 Pong!',
			`## ${diff}ms`,
			...(bot.isSharding ? [`-# via shard #${bot.shardId}`] : []),
		].join('\n');

		return int.editReply(content);
	})
];

new Meinu({
	name: 'MyBot',
	color: 'LuminousVividPink',
})
	.register_commands(commands)
	.init(); // starts the bot, .init(TOKEN) if `TOKEN` env is not set
```

## Scrollable
Meinu includes a class called `Scrollable` which can be used to create scrollable content.

To initate this class, you can use the `create_scrollable` function.

```ts
import { Command, create_scrollable } from 'meinu';

new Command({})
.addHandler("chat_input", (bot, int) => create_scrollable({
	int,
	data: () => [{ title: "foo" }, { title: "bar" }],
	match: (v) => ({
    	content: `## ${v.title}`
  	})
}));
```
