import { ApplicationCommandOptionType } from 'discord.js';
import { inspect } from 'node:util';
import type { Meinu } from '../index.js';
import { Command } from '../utils/index.js';

export default <T extends Meinu>() =>
	new Command<T>({
		name: 'eval',
		description: 'evaluate javascript',
		options: [
			{
				name: 'script',
				description: 'the code',
				type: ApplicationCommandOptionType.String,
				required: true,
			},
		],
		owners_only: true,
	}).addHandler('chat_input', async (bot, int) => {
		const script = int.options.getString('script', true);

		let run: string;
		try {
			run = await Object.getPrototypeOf(async () => '').constructor('bot', 'int', `return ${script}`)(bot, int);
		} catch (e) {
			console.error(e);
			run = e as string;
		}

		return int.reply({
			content: `Output for \`${script}\`:\n\`\`\`js\n${inspect(run, { depth: 0 })}\`\`\``,
		});
	});
