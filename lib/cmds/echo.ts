import { ApplicationCommandOptionType } from 'discord.js';
import type { Meinu } from '../index.js';
import { Command } from '../utils/index.js';

export default <T extends Meinu>() =>
	new Command<T>({
		name: 'echo',
		description: 'send back what the user sent',
		options: [
			{
				name: 'string',
				description: 'the string you want sent back to you',
				type: ApplicationCommandOptionType.String,
				required: true,
			},
		],
	}).addHandler('chat_input', (bot, int) => {
		const string = int.options.getString('string', true);
		return int.reply(string);
	});
