import { Command } from '../../index.js';

export default new Command({
	name: 'nsfw',
	description: 'NSFW command',
	nsfw: true,
}).addHandler('chat_input', (_bot, int) => int.reply('NSFW command'));
