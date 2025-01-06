import chalk from 'chalk';
import type { Awaitable, Meinu } from '../index.js';

export const meinu_color = chalk.rgb(114, 137, 218);

export async function _meinu_log(
	{
		title,
		cb,
		bot,
	}: {
		title: string;
		cb?: Awaitable<any>;
		bot: Meinu | null;
	},
	...message: any[]
) {
	const _title = bot?.isSharding ? `#${bot.shard?.ids.join(',')}_${title}` : title;
	if (typeof cb === 'undefined') return console.log(meinu_color(`[Meinu / ${_title}]`), ...message);
	console.time(...message);
	await cb;
	console.timeEnd(...message);
}

const { green, red } = chalk;

export { green, red };
