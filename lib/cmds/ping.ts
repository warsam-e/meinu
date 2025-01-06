import type { Meinu } from '../index.js';
import { Command } from '../utils/index.js';

export default <T extends Meinu>() =>
	new Command<T>({
		name: 'ping',
		description: 'Pong!',
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
	});
